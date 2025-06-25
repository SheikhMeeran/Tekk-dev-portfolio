// ✅ Updated Services.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

import softwareIcon from "../assets/software.svg";
import mobileIcon from "../assets/mobile.svg";
import websiteIcon from "../assets/website.svg";
import application from "../assets/appliction.svg";
import aug from "../assets/aug.jpg";
import aug2 from "../assets/aug2.jpg";

const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
};

const AutoChangingImage = ({ images, alt }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <Box
      component="img"
      src={images[index]}
      alt={alt}
      sx={{
        width: "100%",
        maxWidth: { xs: "90%", sm: "80%", md: 380 },
        display: "block",
        mx: "auto",
        transition: "opacity 0.5s ease-in-out",
      }}
    />
  );
};

const ServiceSection = ({
  title,
  subtitle,
  description,
  image,
  link,
  reverse = false,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);
  const isStaffAugmentation = title === "Staff Augmentation";

  const charLimit = 250;
  const isLongText = description.length > charLimit;
  const visibleText = isStaffAugmentation
    ? expanded
      ? description
      : description.slice(0, charLimit) + "..."
    : description;

  const handleLearnMore = () => {
    if (isStaffAugmentation) {
      setExpanded((prev) => !prev);
    } else if (link) {
      window.location.href = link;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <Box sx={{ py: { xs: 2, md: 3 } }}>
        <Grid
          container
          spacing={3}
          direction={isSmallScreen ? "column-reverse" : "row"}
          alignItems="center"
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: reverse ? 2 : 1 }}>
            <Box
              sx={{
                textAlign: isSmallScreen ? "center" : "left",
                display: "flex",
                flexDirection: "column",
                alignItems: isSmallScreen ? "center" : "flex-start",
                pr: { md: 5 },
              }}
            >
              <Typography variant="h5" fontWeight={700} gutterBottom sx={{ fontSize: "1.1rem", mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ fontSize: "0.95rem", mb: 1 }}>
                {subtitle}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: "0.95rem", whiteSpace: "pre-line" }}>
                {visibleText}
              </Typography>
              {!isSmallScreen && (
                <Button
                  variant="contained"
                  onClick={handleLearnMore}
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  {isStaffAugmentation && expanded ? "Show Less" : "Learn More"}
                </Button>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: reverse ? 1 : 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl: { md: 5 },
              }}
            >
              {isStaffAugmentation ? (
                <AutoChangingImage images={[aug, aug2]} alt={title} />
              ) : (
                <Box
                  component="img"
                  src={image}
                  alt={title}
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "90%", sm: "80%", md: 380 },
                    display: "block",
                    mx: "auto",
                  }}
                />
              )}
              {isSmallScreen && (
                <Button
                  variant="contained"
                  onClick={handleLearnMore}
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "primary.main",
                      color: "white",
                    },
                  }}
                >
                  {isStaffAugmentation && expanded ? "Show Less" : "Learn More"}
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariant}
      >
        <Typography
          variant="h4"
          fontWeight={600}
          align="left"
          gutterBottom
          sx={{
            mb: 3,
            fontSize: "1.2rem",
            transition: "all 0.3s ease",
            "&:hover": {
              fontSize: "1.35rem",
              color: "primary.main",
            },
          }}
        >
          Services
        </Typography>
      </motion.div>

      <ServiceSection
        title="Mobile App Development"
        subtitle="Extend Functionality. Extend Access. Increase Engagement."
        description="Integrate your web experience or create a standalone app with either mobile platform."
        image={mobileIcon}
        reverse={false}
      />
      <ServiceSection
        title="Cyber Security"
        subtitle="Efficient Security: Time, Energy & Cost Optimization"
        description="Comprehensive cybersecurity solutions from threat detection to full protection."
        image={softwareIcon}
        link="/software"
        reverse={true}
      />
      <ServiceSection
        title="Website Development"
        subtitle="Reach More. Discover More. Sell More."
        description="Bring your business online with a fast and SEO-optimized website built for impact."
        image={websiteIcon}
        reverse={false}
      />
    
      <ServiceSection
  title="Application Development"
  subtitle="Smart Development: Time, Energy & Cost Efficiency"
  description="Robust application development from concept creation to final deployment."
  image={application}
  link="/websites#target-section"
  reverse={true}
/>

      <ServiceSection
        title="Staff Augmentation"
        subtitle='TekkDev offers “Staff augmentation services”'
        description={`which facilitates your business to add involve external resources with specific 
skillsets to your existing team on contractual basis 
for projects or related product development activities to fill 
skill gaps or speedup your deliverables or meet your timelines.
We offer flexible outsourcing model which supports your software delivery 
plan with skilled workforce quickly with addition of contractual employees
Though we are not limited to skillset but can meet 
your immediate needs for MERN, C++, Node.js, React and more
Our aim is to support in providing  companies to meet project 
deadlines, by specialized resources with established credentials, 
and ultimately reduce hiring costs.`}
        image={aug}
        reverse={false}
      />
    </Container>
  );
};

export default Services;