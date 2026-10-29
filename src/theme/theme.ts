import { createTheme } from '@mui/material/styles';
import { themeColors, type ThemeMode } from '@/constants/theme-colors';

export function getAppTheme(mode: ThemeMode) {
  const colors = themeColors[mode];

  return createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: 'transparent',
            },
            ':focus': {
              backgroundColor: 'transparent',
            },
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: 'var(--font-manrope), sans-serif',
      htmlFontSize: 14,

      h1: {
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },

      h2: {
        fontSize: '1.875rem',
        fontWeight: 700,
        lineHeight: 1.25,
      },

      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },

      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },

      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },

      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    palette: {
      mode,
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
        paper: colors.paper,
      },
      text: {
        primary: colors.text,
        secondary: colors.textSecondary,
      },
      divider: colors.divider,
      error: {
        main: colors.error,
      },
      success: {
        main: colors.success,
      },
      warning: {
        main: colors.warning,
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
}
