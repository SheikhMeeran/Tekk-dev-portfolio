import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import ButtonArrow from "./ui/ButtonArrow";
import CallToAction from "./ui/CallToAction";

import Banner01 from "../assets/Banner01.jpeg";
import Banner02 from "../assets/Banner02.jpg";
import Banner03 from "../assets/Banner03.jpg";
import Banner04 from "../assets/Banner04.jpg";
import Banner05 from "../assets/Banner05.jpg";
import Banner06 from "../assets/banner09.jpg";

const imagePaths = [Banner01, Banner02, Banner03, Banner04, Banner05, Banner06];
const textLines = [
  "We Automate, We Create, We Transform to Secure your business",
  "We Innovate, We Secure. Default settings increase breach risks.",
  "Digital Solutions that Drive Growth and Security",
  "Breach Victim? Know What Happens Next.",
  "Don't let Ransom Demands hold your business hostage",
  "Our software development approach aims to help 'Code Your Way to Success'",
];

const slideVariants = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { x: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
};

const LandingPage = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
    }, 7000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagePaths.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imagePaths.length) % imagePaths.length);
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box sx={{ width: "100%", bgcolor: "#fff" }}>
        {/* Banner Section */}
        <Box
          sx={{
            mt: { xs: "2.5rem", sm: "4rem", md: "3rem" },
            width: "100%",
            height: { xs: "250px", sm: "300px", md: "430px" },
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isSmallScreen ? (
            <motion.img
              key={currentIndex}
              src={imagePaths[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "left",
                backgroundColor: "#fff",
              }}
            />
          ) : (
            imagePaths.map((src, index) => {
              const isActive = index === currentIndex;
              return (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "left",
                    opacity: isActive ? 1: 0,
                    transition: "opacity 1s ease-in-out",
                  }}
                />
              );
            })
          )}

          {/* Left Arrow Box */}
          <Box
            onClick={handlePrev}
            sx={{
              position: "absolute",
              left: { xs: 8, sm: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            <ArrowBackIos sx={{ color: "#fff", fontSize: "1rem" }} />
          </Box>

          {/* Right Arrow Box */}
          <Box
            onClick={handleNext}
            sx={{
              position: "absolute",
              right: { xs: 8, sm: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 3,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
            }}
          >
            <ArrowForwardIos sx={{ color: "#fff", fontSize: "1rem" }} />
          </Box>
        </Box>

        {/* Hero Text + Buttons */}
        <Container
          maxWidth="lg"
          sx={{
            mt: { xs: -2, sm: -3 },
            py: { xs: 4, sm: 6 },
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ maxWidth: "900px", mb: 4 }}>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.6rem" },
                fontWeight: 600,
              }}
            >
              {textLines[currentIndex]}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
              position: "relative",
              zIndex: 2,
              minHeight: "60px",
            }}
          >
            <Button
              component={Link}
              to="/estimate"
              onClick={() => {
                props.setValue(5);
                props.setSelected(null);
              }}
              variant="contained"
              sx={{
                backgroundColor: "#166EE9",
                color: "#fff",
                borderRadius: "30px",
                height: "48px",
                width: "180px",
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "Roboto",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#145ec7",
                  transform: "scale(1.05)",
                },
              }}
            >
              Get Estimate
            </Button>

            <Button
              component={Link}
              to="/evolution"
              onClick={() => {
                props.setValue(2);
                props.setSelected(null);
              }}
              variant="outlined"
              sx={{
                borderColor: "#166EE9",
                borderWidth: 3,
                color: "#000",
                borderRadius: "30px",
                height: "48px",
                width: "170px",
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "Roboto",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#166EE9",
                  color: "#fff",
                  "& svg": {
                    fill: "#fff",
                  },
                },
              }}
            >
              Learn More
              <ButtonArrow width={25} height={18} fill="black" />
            </Button>
          </Box>
        </Container>

        {/* CTA Section */}
        <Grid item>
          <CallToAction
            setValue={props.setValue}
            setSelected={props.setSelected}
          />
        </Grid>
      </Box>
    </motion.div>
  );
};

export default LandingPage;
























