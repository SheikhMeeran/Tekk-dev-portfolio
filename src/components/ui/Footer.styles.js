// Footer.styles.ts
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

export const FooterContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: "#305694",
  width: "100%",
  overflowX: "hidden",
  zIndex: theme.zIndex.modal + 1,
  [theme.breakpoints.down("sm")]: {
    backgroundColor: "black",
    height: "7.5em",
    overflowX: "visible",
  },
}));

export const Adornment = styled(Box)(({ theme }) => ({
  width: "21em",
  verticalAlign: "bottom",
  overflowY: "visible",
  [theme.breakpoints.down("md")]: {
    width: "20em",
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    zIndex: 1302,
    width: "100%",
  },
}));

export const MainContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginTop: "auto",
  width: "100%",
  paddingLeft: "2rem",
  [theme.breakpoints.down("md")]: {
    marginTop: "0.5rem",
    justifyContent: "flex-end",
    paddingRight: "9%",
  },
}));

export const FooterLink = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  whiteSpace: "nowrap",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

export const MediaIcon = styled('img')(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  padding: "0.5rem",
  [theme.breakpoints.down("sm")]: {
    width: "2rem",
    height: "2rem",
    padding: "0.3rem",
  },
}));

export const SocialContainer = styled(Grid)(({ theme }) => ({
  marginTop: "-3.5rem",
  paddingRight: "2rem",
  [theme.breakpoints.down("sm")]: {
    margin: "auto",
    padding: "1.5rem",
    position: "absolute",
    zIndex: 1303,
  },
}));
