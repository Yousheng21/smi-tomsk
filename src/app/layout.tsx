import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Toaster } from 'sonner';
import { Providers } from '@/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'SMI Tomsk',
  description: 'SMI Tomsk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <AppRouterCacheProvider>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>

        <Toaster
          richColors
          closeButton
          toastOptions={{
            duration: 6000,
            classNames: {
              closeButton: 'my-close-button',
              error: 'my-error-toast',
              success: 'my-success-toast',
            },
          }}
        />
      </body>
    </html>
  );
}
