import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import digitalImage from "../assets/Digital Transformation .jpg";
import Cloud from "../assets/Cloud Assessment.jpg";


const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  arrowIcons: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  image: {
    width: "75%",
    height: "45%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
      marginTop: "2em",
    },
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Navigation Arrows */}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
      >
        <Hidden smDown>
          <Grid item className={classes.arrowContainer} style={{ marginRight: "2em" }}>
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelected(1);
              }}
            >
              <img src={backArrow} alt="Back to Mobile App Development Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Hidden smDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelected(null);
              }}
            >
              <img src={forwardArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      {/* Digital Transformation Section */}
      <Grid
        item
        container
        direction={smaller ? "column" : "row"}
        alignItems="center"
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid item xs={12} md={6} className={classes.heading}>
          <Typography
            variant="h2"
            align={smaller ? "center" : "left"}
            gutterBottom
          >
            Digital Transformation
          </Typography>
          <Typography variant="body1" paragraph>
            New technologies, new CS languages, new requirements all lead to
            constant need for applications to be updated so risks and threats
            are outsmarted.
          </Typography>
          <Typography variant="body1" paragraph>
            ❖ Manage Gaps and focus to Remove redundancies
          </Typography>
          <Typography variant="body1" paragraph>
            ❖ Aligns your orchestration and automation program
          </Typography>
          <Typography variant="body1" paragraph>
            ❖ Focused to your specific business needs
          </Typography>
          <Typography variant="body1" paragraph>
            ❖ Outline ways on utilizing optimal resources
          </Typography>
          <Typography variant="body1" paragraph>
            ❖ Scalable implementation methodologies
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} container justify={smaller ? "center" : "flex-end"}>
          <img
            src={digitalImage}
            alt="Digital Transformation Illustration"
            className={classes.image}
          />
        </Grid>
      </Grid>



     <Grid
  item
  container
  direction={smaller ? "column" : "row"}
  alignItems="center"
  justify="space-between"
  className={classes.rowContainer}
>
  {/* Image on the left now */}
  <Grid item xs={12} md={6} container justify={smaller ? "center" : "flex-start"}>
    <img
      src={Cloud}
      alt="Digital Transformation Illustration"
      className={classes.image}
    />
  </Grid>

  {/* Text on the right */}
  <Grid item xs={12} md={6} className={classes.heading}>
    <Typography
      variant="h2"
      align={smaller ? "center" : "left"}
      gutterBottom
    >
      Cloud Assessment 
    </Typography>
    <Typography variant="body1" paragraph>
      ❖	Cloud based business over the years is now the preferred modality of hosting applications these days, but as maturity is in the process to be achieved. We “Do More”.
    </Typography>
    <Typography variant="body1" paragraph>
      ❖ Our Cloud Security Analysts perform complete, holistic mapping of your cloud architecture to prevent breaches, threats and ensure risks are mitigated.
    </Typography>
   
  </Grid>
</Grid>


      {/* CTA */}
      <Grid item>
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default Websites;
