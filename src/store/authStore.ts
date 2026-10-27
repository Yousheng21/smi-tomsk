import { create } from 'zustand';

interface AuthState {
  isAuthorized: boolean;
  accessToken: string | null;
  refreshToken: string | null;

  logout: () => void;

  setTokens: (accessToken: string | null, refreshToken: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: false,
  accessToken: null,
  refreshToken: null,
  setTokens(accessToken, refreshToken) {
    set({ accessToken, refreshToken, isAuthorized: true });
  },

  logout: () => {
    set({ isAuthorized: false, accessToken: null, refreshToken: null });
  },
}));
