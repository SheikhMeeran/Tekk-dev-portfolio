import { createTheme } from '@mui/material/styles';

const blue = "#166EE9";
const orange = "#fff";
const hoverBlue = "#166EE9";
const linkColor = "#000000";
const mygrey = "#696969";

const theme = createTheme({
  palette: {
    common: {
      blue,
      orange,
      hoverBlue,
    },
    mode: "light",
    primary: {
      main: orange,
    },
    secondary: {
      main: blue,
    },
  },
  typography: {
    fontFamily: "Raleway, Roboto, Arial, sans-serif",
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.5,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: mygrey,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: mygrey,
    },
    link: {
      color: linkColor,
      fontSize: "0.9rem",
      fontWeight: 700,
      textTransform: "none",
    },
    estimate: {
      fontSize: "1rem",
      marginLeft: "180px",
    },
    learnButton: {
      color: "black",
      marginRight: "150px",
      marginTop: "0.1rem",
      textTransform: "none",
      borderRadius: "30px",
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: blue,
        color: orange,
      },
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: mygrey,
          fontWeight: 400,
          fontSize: "1.25rem",
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid ${orange}`,
          },
          "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            borderBottom: `2px solid ${orange}`,
          },
        },
      },
    },
  },
});

export default theme;
