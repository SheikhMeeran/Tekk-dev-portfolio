import React  from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import FooterAdornment from "../../svgToReact/FooterAdornment.js";
import MobileFooterAdornment from "../../svgToReact/MobileFooterAdornment.js";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#305694",
    width: "100%",
    overflowX: "hidden",
    zIndex: theme.zIndex.modal + 1,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "black",
      height: "7.5em",
      overflowX: "visible",
    },
  },
  adornment: {
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
  },
  mainContainer: {
    position: "absolute",
    marginTop: "auto",
    marginRight: 0,
    width: "100%",
    overflow: "hidden",
    paddingLeft: "2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "0.5rem",
      justifyContent: "flex-end",
      paddingRight: "9%",
      margin: 0,
    },
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "white",
      transform: "scale(1.05)",
    },
  },
  icon: {
    width: "3rem",
    height: "3rem",
    padding: "0.5rem",
    [theme.breakpoints.down("sm")]: {
      width: "7rem",
      height: "7rem",
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "6rem",
      height: "6rem",
    },
  },
  mediaIconsContainer: {
    marginTop: "-3.5rem",
    paddingRight: "2rem",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      padding: "1.5rem",
      position: "absolute",
      zIndex: 1303,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "0.5rem",
      padding: 0,
    },
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={classes.footer}>
      {!smaller && (<>
              <Grid
          item
          container
          justify="center"
          className={classes.mainContainer}
          spacing={medium ? 5 : 10}
        >
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                style={
                  window.matchMedia("(max-width: 1450px)").matches
                    ? { display: "none" }
                    : {}
                }
                onClick={() => {
                  props.setValue(0);
                  props.setSelected(null);
                }}
                component={Link}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(null);
                }}
                component={Link}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(0);
                }}
                component={Link}
                to="/software"
              >
                Cyber Security
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(2);
                }}
                component={Link}
                to="/websites"
              >
                Web Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(2);
                  props.setSelected(null);
                }}
                component={Link}
                to="/revolution"
              >
                Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/estimate"
              >
                Get Estimate
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>)}

      {smaller ? null : (
        <Grid item className={classes.adornment}>
          <FooterAdornment className={classes.adornment} />
        </Grid>
      )}

      <Grid container direction="column" alignItems="center">
        <Grid
          item
          container
          justify={smaller ? "center" : "flex-end"}
          className={classes.mediaIconsContainer}
        >
          <Grid
            item
            component="a"
            href="https://facebook.com"
            className={classes.icon}
          >
            <img
              alt="facebook-icon"
              src={facebook}
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
          <Grid
            item
            component="a"
            href="https://instagram.com"
            className={classes.icon}
          >
            <img
              alt="instagram-icon"
              src={instagram}
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
          <Grid
            item
            component="a"
            href="https://twitter.com"
            className={classes.icon}
          >
            <img
              alt="twitter-icon"
              src={twitter}
              rel="noopener noreferrer"
              target="_blank"
            />
          </Grid>
        </Grid>

        {smaller && (
          <Grid item className={classes.adornment}>
            <MobileFooterAdornment />
          </Grid>
        )}

        {/* Copyright Footer Line */}
        <Grid item style={{ backgroundColor: "gray", width: "100%", textAlign: "center", padding: "0.5rem 0" }}>
          <span style={{ color: "#fff", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} Copyrights by TEKKDEV
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
