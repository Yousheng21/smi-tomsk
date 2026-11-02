import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Toaster } from 'sonner';
import { Providers } from '@/providers/Providers';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smi-tomsk.vercel.app/'),

  title: {
    default: 'СМИ. Сердце Сибири',
    template: '%s | СМИ. Сердце Сибири',
  },

  description:
    'СМИ. Сердце Сибири — новости Томской области, актуальные события, репортажи и публикации.',

  applicationName: 'СМИ. Сердце Сибири',

  keywords: [
    'СМИ',
    'Сердце Сибири',
    'новости Томска',
    'новости Томской области',
    'Томская область',
    'события Томска',
  ],

  authors: [{ name: 'СМИ. Сердце Сибири' }],
  creator: 'СМИ. Сердце Сибири',
  publisher: 'СМИ. Сердце Сибири',

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'СМИ. Сердце Сибири',
    title: 'СМИ. Сердце Сибири',
    description: 'Новости Томской области, актуальные события, репортажи и публикации.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'СМИ. Сердце Сибири',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'СМИ. Сердце Сибири',
    description: 'Новости Томской области и актуальные события.',
    images: ['/opengraph-image.png'],
  },

  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
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
