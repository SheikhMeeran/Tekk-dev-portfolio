import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#166EE9",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FF9800",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#696969",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
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
    h5:{
       fontSize: "1.50rem",
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
      color: "#696969",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: "#696969",
    },
    link: {
      color: "#000000",
      fontSize: "0.9rem",
      fontWeight: 700,
      textTransform: "none",
    },
    estimate: {
      fontSize: "1rem",
      marginLeft: "180px",
    },
    learnButton: {
      color: "#000000",
      marginRight: "150px",
      marginTop: "0.1rem",
      textTransform: "none",
      borderRadius: "30px",
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#166EE9",
        color: "#ffffff",
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
          color: "#696969",
          fontWeight: 400,
          fontSize: "1.25rem",
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid #166EE9`,
          },
          "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
            borderBottom: `2px solid #166EE9`,
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#166EE9",
            color: "#ffffff",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "#145ec7",
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
