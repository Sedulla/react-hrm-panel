import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#9B5AE1',
        },
      },
    },
    ListItemText: {
      styleOverrides: {
        root: {
          color: '#fff',
        },
      },
    },
  },
});
