
import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

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
  heroText: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    textAlign: "center",
    backgroundColor: "#ffffff",
    width: "100%",
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "30px",
    margin: "1rem",
    height: "45px",
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderColor: Blue,
    borderWidth: 3,
    height: "35px",
    margin: "1rem",
  },
  bannerContainer: {
    marginTop: "4.2rem",
    width: "100%",
    height: "400px", // Increased height for larger banner
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
    objectFit: "cover", // Changed to cover for full image fill
    transition: "opacity 1s ease-in-out",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#ffffff",
  },
}));

const imagePaths = [Banner01, Banner02, Banner03, Banner04, Banner05];

const LandingPage = (props) => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    
    <Grid container direction="column" className={classes.mainContainer}>
      {/* ✅ Rotating Banner Below Navbar */}
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
      <Grid item className={classes.heroText}>
        <Typography variant="h2" gutterBottom>
          “We Automate, We Create, We Transform to Secure your business through Continuous Monitoring”
        </Typography>

        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
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
          </Grid>

          <Grid item>
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
          </Grid>
        </Grid>
      </Grid>

      {/* ✅ Call To Action */}
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



