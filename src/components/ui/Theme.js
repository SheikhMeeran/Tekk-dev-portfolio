import { createTheme } from "@mui/material/styles";

const blue = "#166EE9";
const orange = "#fff";
const hoverBlue = "#166EE9";
const linkColor = "#000000";
const mygrey = "#696969";

const theme = createTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
      hoverBlue: `${hoverBlue}`,
    },
    type: "light",
    primary: {
      main: `${orange}`,
    },
    secondary: {
      main: `${blue}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontFamily: "Raleway",
      fontSize: "1rem",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1.25rem",
      fontWeight: 700,
      lineHeight: 1,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: `${mygrey}`
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 400,
      color: `${mygrey}`,
    },
    link: {
      color: `${linkColor}`,
      fontFamily: "Raleway",
      fontSize: "0.9rem",
      fontWeight: 700,
      textTransform: "none",
    },
    estimate: {
      // textTransform: "none",
      fontSize: "1rem",
     marginLeft: "480px",
     
            

      
    },
    learnButton: {
      color: "black",
      // marginLeft: "20px",
      marginRight: "50px",
      marginTop: "0.5rem",
      textTransform: "none",
      borderRadius: "30px",
      fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: `${orange}`,
        color:`${linkColor}`
        // opacity: 1,
      },
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        fontSize: "1rem"
      }
    },
    MuiInput: {
      root: {
        color:  `${mygrey}`,
        fontWeight: 400,
        fontSize: "1.25rem",
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${orange}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${orange}`
        },
      }
    }
  }
});

export default theme;
