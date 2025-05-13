const theme = {
  color: {
    // Grayscale Colors
    white: '#FFFFFF',
    gray100: '#F6F7F9',
    gray200: '#EFF0F4',
    gray300: '#DBDADF',
    gray400: '#9B9B9D',
    gray500: '#939097',
    gray600: '#878586',
    gray700: '#484848',
    gray800: '#3C3B43',
    black: '#1F2427',

    // Purple Colors
    purpleLight: '#D1A6D2',
    purpleMedium: '#9B66B7',
    purpleDark: '#6A3F99',
    purpleAccent: '#4E2A6A',

    purpleLightest: '#E8C6E8',
    purpleDeep: '#3B1D59',

    purpleAccentLight: '#F4E6F8',
    purpleAccentDark: '#A32E77',
  },
};

export type ColorType = typeof theme.color;

export interface ThemeType {
  color: ColorType;
}

export default theme;
