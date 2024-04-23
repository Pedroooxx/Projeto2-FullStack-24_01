
import {createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(237, 22, 73)"
    },
    secondary: {
      main: "rgb(255, 255, 255)"
    },
    greenOne: {
      main: "rgb(193, 237, 48)"
    },
    background: {
      default: "rgb(30, 30, 30)"
    }
  },
  typography: {
    fontSize: 16
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none"
      }
    },
    MuiTextField: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          borderColor: 'rgb(193, 237, 48)',
        },
      },
    },
    MuiBox: {
      root: {
        borderRadius: 8
      }
    },
  },
});

export default theme;
