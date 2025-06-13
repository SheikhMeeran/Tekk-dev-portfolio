import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles"; // if you still need legacy styling
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background1.jpeg";
import background2 from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 3,
    height: "40px",
    opacity: 0.9,
    color: "#fff",
    marginRight: "0px", // spacing between buttons
    marginLeft:"145px"
  },
  estimateOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.hoverBlue,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderWidth: 3,
    height: "40px",
    opacity: 0.9,
    color: "#fff",
    marginLeft: "10px", // spacing from Learn More button
    "&:hover": {
      backgroundColor: theme.palette.common.hoverBlue,
      color: "white",
      opacity: 1,
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  },
  heading: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    fontSize: "3.5rem",
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  subtext: {
    color: "#fff",
    fontWeight: 500,
    textAlign: "center",
    fontSize: "1.25rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay for text readability
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const currentBackground = smaller
    ? mobileBackground
    : bgIndex === 0
    ? background
    : background2;

  return (
    <Grid
      container
      style={{
        height: smaller ? "85em" : "60em",
        width: "100%",
        position: "relative",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <div className={classes.overlay} />
      <Grid
        item
        container
        style={{
          position: "absolute",
          zIndex: 2,
          top: smaller ? "35%" : "40%",
        }}
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Typography variant="h2" gutterBottom className={classes.heading}>
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.subtext}>
            Take advantage of the 21st Century.
          </Typography>
        </Grid>

        <Grid item className={classes.buttonContainer}>
          <Button
            component={Link}
            to="/revolution"
            onClick={() => {
              props.setValue(2);
              props.setSelected(null);
            }}
            variant="outlined"
            className={classes.learnOutlineButton}
          >
            Learn More
            <ButtonArrow width={25} height={18} fill="white" />
          </Button>

          <Button
            component={Link}
            to="/estimate"
            onClick={() => {
              props.setValue(5);
              props.setSelected(null);
            }}
            variant="outlined"
            className={classes.estimateOutlineButton}
          >
            Get Estimate
            <ButtonArrow width={25} height={18} fill="white" />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
