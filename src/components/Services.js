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
import softwareIcon from "../assets/software.svg";
import mobileIcon from "../assets/mobile.svg";
import websiteIcon from "../assets/website.svg";
import { motion } from "framer-motion";


// Reusable Service Section Component
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
    <Box sx={{ py: 6 }}>
      <Grid
        container
        spacing={4}
        direction={isSmallScreen ? "column" : "row"}
        alignItems="center"
      >
        {/* Image */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: reverse ? 1 : 2 }}
        >
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{ width: "100%", maxWidth: 500, display: "block", mx: "auto" }}
          />
        </Grid>

        {/* Text */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 1, md: reverse ? 2 : 1 }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {subtitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Button variant="contained" color="primary" href={link}>
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

// Main Services Component
const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <ServiceSection
        title="Mobile App Development"
        subtitle="Extend Functionality. Extend Access. Increase Engagement."
        description="Integrate your web experience or create a standalone app with either mobile platform."
        image={mobileIcon}
        link="/mobileapps"
        reverse={false} // Text left, image right
      />
      <ServiceSection
        title="Cyber Security"
        subtitle="Efficient Security: Time, Energy & Cost Optimization"
        description="Comprehensive cybersecurity solutions from threat detection to full protection"
        image={softwareIcon}
        link="/software"
        reverse={true} // Image left, text right
      />
      <ServiceSection
        title="Website Development"
        subtitle="Reach More. Discover More. Sell More."
        description="Bring your business online with a fast,and SEO-optimized website built for impact."
        image={websiteIcon}
        link="/websites"
        reverse={false} // Text left, image right
      />
    </Container>
  );
};

export default Services;
