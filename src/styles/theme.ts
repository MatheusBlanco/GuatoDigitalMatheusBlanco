const fixedTheme = {
  colors: {
    background: {
      fixed: {
        violet: '#6759FF',
        gray: '#D1D3D420',
      },
    },
    text: {
      fixed: {
        primary: '#9A9FA5',
        secondary: '#9B9E9F',
        white: '#FFFFFF',
      },
    },
  },
  fonts: {
    regular: 'Inter_400Regular',
    medium: 'Inter_500Medium',
    bold: 'Inter_700Bold',
  },
};

export const lightStyles = {
  colors: {
    background: {
      ...fixedTheme.colors.background,
      primary: '#F9F9F9',
      secondary: '#FFFFFF',
      tertiary: '#FBFBFB',
      fourth: '#6759FF',
      fifth: '#FFFFFF',
      sixth: '#FFFFFF26',
    },
    border: {
      primary: '#F2F2F2',
    },
    text: {
      ...fixedTheme.colors.text,
      themeConditional: {
        primary: '#1A1D1F',
        secondary: '#41405D',
        tertiary: '#172B4D',
        fourth: '#666C89',
        fifth: '#0F1621',
        sixth: '#6759FF',
        seventh: '#FFFFFF',
        eighth: '#D1D3D4',
        ninth: '#FFFFFF',
      },
    },
  },

  ...fixedTheme.fonts,
};

export const darkStyles = {
  colors: {
    background: {
      ...fixedTheme.colors.background,
      primary: '#0F1621',
      secondary: '#18202E',
      tertiary: '#1A2332',
      fourth: '#18202E',
      fifth: '#2F3643',
      sixth: '#29303C',
    },
    border: {
      primary: '#F2F2F210',
    },
    text: {
      ...fixedTheme.colors.text,
      themeConditional: {
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        tertiary: '#FFFFFF',
        fourth: '#D1D3D4',
        fifth: '#FFFFFF',
        sixth: '#FFFFFF',
        seventh: '#D1D3D4',
        eighth: '#6F767E',
        ninth: '#FFFFFF',
      },
    },
  },

  ...fixedTheme.fonts,
};
