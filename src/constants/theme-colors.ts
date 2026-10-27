export const themeColors = {
  light: {
    primary: '#0E8743',
    secondary: '#F3F3F3',
    background: '#FFFFFF',
    backgroundSecondary: '#16AD621A',
    paper: '#ffffff',
    text: '#1a1a1a',
    textSecondary: '#fff',
    divider: '#e5e7eb',
    error: '#d32f2f',
    success: '#2e7d32',
    warning: '#ed6c02',
  },
  dark: {
    primary: '#90caf9',
    secondary: '#ce93d8',
    background: '#121212',
    backgroundSecondary: '#16ad61d3',
    paper: '#1e1e1e',
    text: '#f5f5f5',
    textSecondary: '#b0b0b0',
    divider: '#333333',
    error: '#f44336',
    success: '#66bb6a',
    warning: '#ffa726',
  },
} as const;

export type ThemeMode = keyof typeof themeColors;
