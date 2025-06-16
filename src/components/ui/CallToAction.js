import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background1.jpeg";
import background2 from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const CallToAction = ({ setValue, setSelected }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentBackground = isSmall
    ? mobileBackground
    : bgIndex === 0
    ? background
    : background2;


    

  return (
    <Box
      sx={{
        height: { xs: "85em", sm: "60em" },
        width: "100%",
        position: "relative",
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Centered Content */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          top: { xs: "35%", sm: "40%" },
          zIndex: 2,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#fff",
            fontSize: { xs: "2rem", sm: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          Simple Software.
          <br />
          Revolutionary Results.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            mt: 1,
            color: "#fff",
            fontSize: "1.25rem",
            fontWeight: 500,
          }}
        >
          Take advantage of the 21st Century.
        </Typography>

        {/* Action Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
          flexWrap="wrap"
        >
         <Button
  component={Link}
  to="/revolution"
  onClick={() => {
    setValue(2);
    setSelected(null);
  }}
  variant="outlined"
  sx={{
    borderColor: theme.palette.primary.main,
    backgroundColor: "white",
    color: "black",
    borderWidth: 2,
    height: "40px",
    borderRadius: "25px",
    px: 2,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      "& svg": {
        fill: "white", // Change arrow color on hover
      },
    },
    "& svg": {
      fill: "black", // Default arrow color
      marginLeft: "0.5rem",
    },
  }}
>
  Learn More
  <ButtonArrow width={25} height={18} />



</Button>


          <Button
            component={Link}
            to="/estimate"
            onClick={() => {
              setValue(5);
              setSelected(null);
            }}
            variant="outlined"
            sx={{
              borderColor: theme.palette.primary.main,
              backgroundColor: "white",
              color: "black",
              borderWidth: 2,
              height: "40px",
              borderRadius: "25px",
              px: 2,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            Get Estimate
            <ButtonArrow width={25} height={18} fill="black" />
          </Button>



          
        </Stack>
      </Grid>
    </Box>
  );
};

export default CallToAction;
