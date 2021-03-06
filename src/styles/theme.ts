import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  borderRadius: '4px',

  palette: {
    common: {
      black: '#222831',
      white: '#ffffff',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
};

export const darkTheme: DefaultTheme = {
  borderRadius: '4px',

  palette: {
    common: {
      black: '#ffffff',
      white: '#222831',
    },
    primary: {
      main: '#726a95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
};
