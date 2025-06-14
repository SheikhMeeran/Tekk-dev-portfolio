import React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonArrow from "./ui/ButtonArrow";

import softwareIcon from "../assets/Custom Software Icon.svg";
import appsIcon from "../assets/mobile.svg";
import webIcon from "../assets/website.svg";

// Styled Components
const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  borderColor: theme.palette.common.orange,
  borderWidth: 3,
  height: "35px",
  opacity: 0.7,
}));

const DevContainer = styled(Grid)(({ theme }) => ({
  marginTop: "10em",
  [theme.breakpoints.down("lg")]: { marginTop: "8em" },
  [theme.breakpoints.down("md")]: { marginTop: "6em" },
  [theme.breakpoints.down("sm")]: {
    marginTop: "3em",
    padding: "20px",
  },
}));

const WebDevContainer = styled(DevContainer)(({ theme }) => ({
  marginBottom: "10em",
  [theme.breakpoints.down("lg")]: { marginBottom: "8em" },
  [theme.breakpoints.down("md")]: { marginBottom: "6em" },
  [theme.breakpoints.down("sm")]: { marginBottom: "3em" },
}));

const AppDescription = styled(Grid)(({ theme }) => ({
  width: "40em",
  [theme.breakpoints.down("lg")]: { width: "32em" },
  [theme.breakpoints.down("md")]: { maxWidth: "25em" },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "20px",
    maxWidth: "40em",
  },
}));

const ServiceIcon = styled(Grid)(({ theme }) => ({
  minWidth: "15em",
  marginLeft: "2em",
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    marginBottom: "0.5em",
    maxWidth: "5em",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: "2.5rem",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1em",
  },
}));

const Services = ({ setValue, setSelected }) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const iconBlock = (icon) => (
    <Grid container justifyContent={isSm ? "center" : "flex-start"}>
      <ServiceIcon item>
        <img src={icon} alt="icon" />
      </ServiceIcon>
    </Grid>
  );

  return (
    <Grid container direction="column">
      <Grid item container justifyContent={isSm ? "center" : "flex-start"} sx={{ pl: isSm ? 2 : 6, mt: 4 }}>
        <Typography variant="h2">Services</Typography>
      </Grid>

      {/* Mobile App */}
      <Grid item>
        <DevContainer container direction="row" justifyContent={isSm ? "center" : "flex-end"}>
          <AppDescription item textAlign={isSm ? "center" : "left"}>
            {isSm && iconBlock(appsIcon)}
            <Typography variant="h4">Mobile App Development</Typography>
            <Subtitle variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Subtitle>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app with either iOS or Android platforms.
            </Typography>
            <LearnButton
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setValue(1);
                setSelected(1);
              }}
              variant="outlined"
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </LearnButton>
          </AppDescription>
          {!isSm && iconBlock(appsIcon)}
        </DevContainer>
      </Grid>

      {/* Software Dev */}
      <Grid item>
        <DevContainer container direction="row" justifyContent={isSm ? "center" : "flex-start"}>
          <AppDescription item sx={{ ml: isSm ? 0 : 6 }} textAlign={isSm ? "center" : "left"}>
            {isSm && iconBlock(softwareIcon)}
            <Typography variant="h4">Software Development</Typography>
            <Subtitle variant="subtitle1">
              Save Time. Save Energy. Save Money.
            </Subtitle>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to <span>celebration.</span>
            </Typography>
            <LearnButton
              component={Link}
              to="/software"
              onClick={() => {
                setValue(1);
                setSelected(0);
              }}
              variant="outlined"
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </LearnButton>
          </AppDescription>
          {!isSm && iconBlock(softwareIcon)}
        </DevContainer>
      </Grid>

      {/* Web Dev */}
      <Grid item>
        <WebDevContainer container direction="row" justifyContent={isSm ? "center" : "flex-end"}>
          <AppDescription item textAlign={isSm ? "center" : "left"}>
            {isSm && iconBlock(webIcon)}
            <Typography variant="h4">Website Development</Typography>
            <Subtitle variant="subtitle1">
              Discover More. Reach More. Sell More.
            </Subtitle>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <LearnButton
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelected(2);
              }}
              variant="outlined"
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </LearnButton>
          </AppDescription>
          {!isSm && iconBlock(webIcon)}
        </WebDevContainer>
      </Grid>
    </Grid>
  );
};

export default Services;
