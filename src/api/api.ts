import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

import { ApiError } from './error';
import { useAuthStore } from '@/store/authStore';
import { queryClient } from './queryClient';
import { showError } from '@/utils/toast';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error('Не задана переменная NEXT_PUBLIC_API_URL');
}

type RetryAxiosRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

class ApiClient {
  authorizedClient: AxiosInstance;
  unauthorizedClient: AxiosInstance;

  private isRefreshing = false;

  private failedQueue: {
    resolve: (token: string) => void;
    reject: (error: unknown) => void;
  }[] = [];

  unauthorizeCallback: () => void = () => {};

  constructor() {
    this.authorizedClient = axios.create({
      baseURL: BASE_URL,
      timeout: 15000,
    });

    this.unauthorizedClient = axios.create({
      baseURL: BASE_URL,
      timeout: 15000,
    });

    this.authorizedClient.interceptors.request.use((config) => {
      const token = useAuthStore.getState().accessToken ?? this.getStoredToken('accessToken');

      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
      }

      return config;
    });

    this.authorizedClient.interceptors.response.use(
      (response) => response,
      async (error: AxiosError<{ message?: string; code?: string }>) => {
        const status = error.response?.status;
        const originalRequest = error.config as RetryAxiosRequestConfig | undefined;

        if (
          status === 401 &&
          originalRequest &&
          !originalRequest._retry &&
          !originalRequest.url?.includes('/auth/refresh')
        ) {
          return this.handle401(originalRequest);
        }

        if (status === 429) {
          showError('Слишком много запросов');
        }

        if (!error.response) {
          throw new ApiError('Ошибка сети');
        }

        throw new ApiError(error.response.data?.message ?? 'Неизвестная ошибка', status);
      },
    );

    this.unauthorizedClient.interceptors.response.use(
      (response) => response,
      (error: AxiosError<{ message?: string }>) => {
        if (error.response?.status && error.response.status >= 500) {
          showError('Ошибка сервера');
        }

        if (!error.response) {
          throw new ApiError('Ошибка сети');
        }

        throw new ApiError(
          error.response.data?.message ?? 'Неизвестная ошибка',
          error.response.status,
        );
      },
    );
  }

  private getStoredToken(key: string): string | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const value = localStorage.getItem(key);

    if (!value) {
      return null;
    }

    // Поддерживает и обычную строку, и JSON.stringify(token).
    try {
      const parsed: unknown = JSON.parse(value);
      return typeof parsed === 'string' ? parsed : null;
    } catch {
      return value;
    }
  }

  private setStoredToken(key: string, value: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  private clearTokens() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }

    useAuthStore.getState().logout();
    queryClient.clear();
  }

  setUnauthorizeCallback(callback: () => void) {
    this.unauthorizeCallback = callback;
  }

  private processQueue(error: unknown, token?: string) {
    this.failedQueue.forEach(({ resolve, reject }) => {
      if (error) {
        reject(error);
      } else if (token) {
        resolve(token);
      } else {
        reject(new Error('Не удалось обновить токен'));
      }
    });

    this.failedQueue = [];
  }

  private async refreshToken(): Promise<string> {
    const refreshToken = this.getStoredToken('refreshToken');

    if (!refreshToken) {
      throw new Error('Refresh-токен отсутствует');
    }

    const response = await this.unauthorizedClient.post('/auth/refresh', { token: refreshToken });

    const newAccessToken = response.data?.data?.access_token;

    if (typeof newAccessToken !== 'string' || !newAccessToken) {
      throw new Error('Сервер не вернул новый access-токен');
    }

    this.setStoredToken('accessToken', newAccessToken);

    useAuthStore.getState().setTokens(newAccessToken, refreshToken);

    return newAccessToken;
  }

  private async handle401(originalRequest: RetryAxiosRequestConfig) {
    originalRequest._retry = true;

    if (this.isRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedQueue.push({
          resolve: (token) => {
            originalRequest.headers.set('Authorization', `Bearer ${token}`);

            resolve(this.authorizedClient(originalRequest));
          },
          reject,
        });
      });
    }

    this.isRefreshing = true;

    try {
      const newToken = await this.refreshToken();

      this.processQueue(null, newToken);

      originalRequest.headers.set('Authorization', `Bearer ${newToken}`);

      return await this.authorizedClient(originalRequest);
    } catch (refreshError) {
      this.processQueue(refreshError);
      this.clearTokens();
      this.unauthorizeCallback();

      throw refreshError;
    } finally {
      this.isRefreshing = false;
    }
  }
}

const api = new ApiClient();

export default api;
