
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";
// import TechStack from "./TechStack";


// ✅ Import banner images
import Banner01 from "../assets/Banner01.jpeg";
import Banner02 from "../assets/Banner02.jpg";
import Banner03 from "../assets/Banner03.jpg";
import Banner04 from "../assets/Banner04.jpg";
import Banner05 from "../assets/Banner05.jpg";
// Custom color
const Blue = "#0050c0";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 0,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  bannerContainer: {
    marginTop: "4.2rem",
    width: "100%",
    height: "400px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
  },
  heroTextWrapper: {
    position: "relative",
    paddingTop: "6rem",
    paddingBottom: "6rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    textAlign: "center",
    backgroundColor: "#ffffff",
    width: "1397px",
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
    ...theme.typography.estimate,
    borderRadius: "30px",
    height: "48px",
    width: "180px",
    fontWeight: 600,
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderColor: Blue,
    borderWidth: 3,
    height: "48px",
    width: "170px",
    fontWeight: 600,
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* ✅ Rotating Banner */}
      <Grid item className={classes.bannerContainer}>
        {imagePaths.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={classes.bannerImage}
            style={{ opacity: index === currentImageIndex ? 1 : 0 }}
          />
        ))}
      </Grid>

      {/* ✅ Hero Section */}
      <Grid item className={classes.heroTextWrapper}>
        <Typography variant="h2" gutterBottom>
          {textLines[currentTextIndex]}
        </Typography>

        <div className={classes.fixedButtons}>
          <Button
            component={Link}
            to="/estimate"
            onClick={() => {
              props.setValue(5);
              props.setSelected(null);
            }}
            color="secondary"
            variant="contained"
            className={classes.estimate}
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
            variant="outlined"
            className={classes.learnButton}
          >
            Learn More
            <ButtonArrow width={25} height={18} fill="black" />
          </Button>
        </div>
      </Grid>

{/* <TechStack/> */}
      {/* ✅ Call To Action Section */}
      <Grid item>
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
      
    </Grid>
  );
};

export default LandingPage;
