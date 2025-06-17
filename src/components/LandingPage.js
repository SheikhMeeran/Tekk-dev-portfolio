import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Button,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

import Banner01 from "../assets/Banner01.jpeg";
import Banner02 from "../assets/Banner02.jpg";
import Banner03 from "../assets/Banner03.jpg";
import Banner04 from "../assets/Banner04.jpg";
import Banner05 from "../assets/Banner05.jpg";

// Animation variants for page transition
const slideVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

// MUI styles
const useStyles = makeStyles(() => ({
  mainContainer: {
    marginTop: 0,
    backgroundColor: "#fff",
    width: "100%",
  },
  bannerContainer: {
    marginTop: "4.2rem",
    width: "100%",
    height: "400px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1s ease-in-out",
    position: "absolute",
    top: 0,
    left: 0,
  },
  heroTextWrapper: {
    position: "relative",
    padding: "6rem 2rem",
    textAlign: "center",
    backgroundColor: "#fff",
    maxWidth: "1397px",
    margin: "0 auto",
  },
  fixedButtons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
  estimate: {
    backgroundColor: "#166EE9",
    color: "#fff",
    borderRadius: "30px",
    height: "48px",
    width: "180px",
    fontWeight: 600,
    fontSize: "1rem",
    fontFamily: "Roboto",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#145ec7",
      transform: "scale(1.05)",
    },
  },
  learnButton: {
    borderColor: "#166EE9",
    borderWidth: 3,
    height: "48px",
    width: "170px",
    fontWeight: 600,
    color: "#000",
    fontSize: "1rem",
    fontFamily: "Roboto",
    borderRadius: "30px",
    transition: "all 0.3s ease-in-out",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#166EE9",
      color: "#fff",
    },
  },
}));

const imagePaths = [Banner01, Banner02, Banner03, Banner04, Banner05];
const textLines = [
  "We Automate, We Create, We Transform to Secure your business through Continuous Monitoring",
  "We Innovate, We Secure Standard settings are more amenable to breach - Studies reveal",
  "Digital Solutions that Drive Growth and Security",
  "Are you a Victim of Breach - What Happens Next?",
  "Hold your business hostage” or “Ransom Demands",
];

const LandingPage = (props) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Grid container direction="column" className={classes.mainContainer}>
        {/* Banner */}
        <Grid item className={classes.bannerContainer}>
          {imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className={classes.bannerImage}
              style={{ opacity: index === currentIndex ? 1 : 0 }}
              aria-hidden={index !== currentIndex}
            />
          ))}
        </Grid>

        {/* Hero Text */}
        <Grid item className={classes.heroTextWrapper}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" }, fontWeight: 600 }}
          >
            {textLines[currentIndex]}
          </Typography>

          <div className={classes.fixedButtons}>
            <Button
              component={Link}
              to="/estimate"
              onClick={() => {
                props.setValue(5);
                props.setSelected(null);
              }}
              className={classes.estimate}
              variant="contained"
            >
              Get Estimate
            </Button>

            <Button
              component={Link}
              to="/revolution"
              onClick={() => {
                props.setValue(2);
                props.setSelected(null);
              }}
              className={classes.learnButton}
              variant="outlined"
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </div>
        </Grid>

        {/* CTA */}
        <Grid item>
          <CallToAction
            setValue={props.setValue}
            setSelected={props.setSelected}
          />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default LandingPage;
