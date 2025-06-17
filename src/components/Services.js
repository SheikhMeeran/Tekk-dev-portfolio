import React from "react";
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

// Animation variants
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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariant}
    >
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Grid
          container
          spacing={6}
          direction={isSmallScreen ? "column-reverse" : "row"}
          alignItems="center"
        >
          {/* Text Section */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: reverse ? 2 : 1 }}>
            <Box
              sx={{
                textAlign: isSmallScreen ? "center" : "left",
                display: "flex",
                flexDirection: "column",
                alignItems: isSmallScreen ? "center" : "flex-start",
                pr: { md: 6 },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={700}
                gutterBottom
                sx={{ fontSize: "1.1rem" }}
              >
                {title}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                gutterBottom
                sx={{ fontSize: "0.95rem" }}
              >
                {subtitle}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, fontSize: "0.95rem" }}
              >
                {description}
              </Typography>

              {!isSmallScreen && (
                <Button
                  variant="contained"
                  href={link}
                  sx={{
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
                  Learn More
                </Button>
              )}
            </Box>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: reverse ? 1 : 2 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pl: { md: 6 },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={title}
                sx={{
                  width: "100%",
                  maxWidth: { xs: "90%", sm: "80%", md: 400 },
                  display: "block",
                  mx: "auto",
                }}
              />
              {isSmallScreen && (
                <Button
                  variant="contained"
                  href={link}
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
                  Learn More
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

// Main Services Page
const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={sectionVariant}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            fontSize: "1.2rem",
            transition: "all 0.3s ease",
            "&:hover": {
              fontSize: "1.35rem",
              color: "primary.main",
            },
          }}
        >
          Our Services
        </Typography>
      </motion.div>

      <ServiceSection
        title="Mobile App Development"
        subtitle="Extend Functionality. Extend Access. Increase Engagement."
        description="Integrate your web experience or create a standalone app with either mobile platform."
        image={mobileIcon}
        link="/mobileapps"
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
        link="/websites"
        reverse={false}
      />
    </Container>
  );
};

export default Services;
