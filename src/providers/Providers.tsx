'use client';

import { type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeStore } from '@/store/themeStore';
import { getAppTheme } from '@/theme/theme';
import { queryClient } from '@/api/queryClient';

export function Providers({ children }: { children: ReactNode }) {
  const mode = useThemeStore((state) => state.mode);

  const theme = getAppTheme(mode);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
