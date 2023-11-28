import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
      light: '#ffffff',
    },
    secondary: {
      main: '#259c00',
    },
  },
});

export default theme;
