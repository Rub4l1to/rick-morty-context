import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#17bf17',
    third: '#252525',
    fourth: '#2F2F2F',
    bgPrimary: '#191919',
  },
  fonts: {
    primary: {
      regular: 'Dosis-Regular',
      medium: 'Dosis-Medium',
      bold: 'Dosis-Bold',
      extrabold: 'Dosis-Black',
    },
    secondary: {
      regular: 'Roboto-Regular',
      medium: 'Roboto-Medium',
      bold: 'Roboto-Bold',
    },
  },
  breakpoints: {
    sm: '20rem',
    md: '48rem',
    lg: '64rem',
    xl: '80rem',
  },
};
