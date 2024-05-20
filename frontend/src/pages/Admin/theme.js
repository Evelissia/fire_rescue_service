import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E21249',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#E21249',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#E21249',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#E21249',
          borderRadius: '14px',
          '&:hover': {
            backgroundColor: '#3a3a3a',
          },
        },
      },
    },
  },
});

export default theme;
