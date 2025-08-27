export const colors = {
  primary: {
    50: '#f0f6ff',
    100: '#e0ecff',
    200: '#c7dcff',
    300: '#a5c6fe',
    400: '#81a6fc',
    500: '#5d86f8',
    600: '#3576CE',
    700: '#2a5ba6',
    800: '#1f4582',
    900: '#1a3867',
  },
  
  secondary: {
    50: '#fff8f0',
    100: '#ffeed9',
    200: '#ffdbb3',
    300: '#ffc082',
    400: '#ff9f4f',
    500: '#ff7f1a',
    600: '#e56b00',
    700: '#b85400',
    800: '#8a3f00',
    900: '#5c2a00',
  },

  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },

  semantic: {
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    info: '#3576CE',
  },

  brand: {
    primary: '#3576CE',
    primaryHover: '#2A5BA6',
    secondary: '#ff7f1a',
    accent: '#0ea5e9',
    react: '#61dafb',
  },

  background: {
    light: '#ffffff',
    lightSecondary: '#f8fafc',
    lightAccent: '#f1f5f9',
    dark: '#0f172a',
    darkSecondary: '#1e293b',
    darkAccent: '#334155',
  },

  text: {
    light: '#0f172a',
    lightSecondary: '#475569',
    lightMuted: '#64748b',
    dark: '#f8fafc',
    darkSecondary: '#cbd5e1',
    darkMuted: '#94a3b8',
  },
} as const;

export type ColorKeys = keyof typeof colors;
export type PrimaryColorKeys = keyof typeof colors.primary;
export type SecondaryColorKeys = keyof typeof colors.secondary;
export type NeutralColorKeys = keyof typeof colors.neutral;
export type SemanticColorKeys = keyof typeof colors.semantic;
export type BrandColorKeys = keyof typeof colors.brand;
export type BackgroundColorKeys = keyof typeof colors.background;
export type TextColorKeys = keyof typeof colors.text;

export const getColor = (category: ColorKeys, shade?: string) => {
  const colorCategory = colors[category] as any;
  
  if (typeof colorCategory === 'string') {
    return colorCategory;
  }
  
  if (shade && colorCategory[shade]) {
    return colorCategory[shade];
  }
  
  return colorCategory;
};