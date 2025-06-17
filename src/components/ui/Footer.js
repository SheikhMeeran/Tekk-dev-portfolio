import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, useMediaQuery, useTheme, Box, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Google } from "@mui/icons-material";

const Footer = ({ setValue, setSelected }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavClick = (value, selected) => {
    setValue?.(value);
    setSelected?.(selected);
  };

  return (
    <Box sx={{ backgroundColor: "#1c2331", color: "white", mt: 8 }}>
      {/* Social Bar */}
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 2,
        }}
      >
        <Typography sx={{ mr: 2,color:"black" }}>Get connected with us on social networks!</Typography>
       <Box>
  {[Facebook, Twitter, Google, LinkedIn, Instagram].map((Icon, i) => (
    <IconButton
      key={i}
      href="https://example.com"
      target="_blank"
      sx={{ color: 'black' }}
    >
      <Icon />
    </IconButton>
  ))}
</Box>

      </Box>

      {/* Main Footer Grid */}
      <Grid container spacing={4} justifyContent="center" sx={{ px: 4, py: 6 }}>
        <Grid item xs={12} sm={6} md={3}>
       <Typography variant="h6" gutterBottom>CONTACT</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>📍  Plot 22, Block E2 Block E 2 Gulberg III Lahore, Pakistan</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>✉ Info@tekdev.com</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>📞 +92 3244933313</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>☎ +92 (42) 3577-4258</Typography> 

        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>SERVICES</Typography>
          {["Cyber Security", "Web development", "Software development", "Mobile app development"].map((item, i) => (
            <Typography key={i} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>USEFUL LINKS</Typography>
          {["Your Account", "Become an Affiliate", "Shipping Rates", "Help"].map((item, i) => (
            <Typography key={i} variant="body2" sx={{ mt: 1 }}>{item}</Typography>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          {/* <Typography variant="h6" gutterBottom>CONTACT</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>📍  Plot 22, Block E2 Block E 2 Gulberg III Lahore, Pakistan</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>✉ Info@tekdev.com</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>📞 +92 3244933313</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>☎ +92 (42) 3577-4258</Typography> */}

             <Typography variant="h6" gutterBottom>Need Tech Solutions?</Typography>
          <Typography variant="body2" align="left" color="gray">
TEKKDEV delivers cutting-edge digital services <br/>
in web development, cybersecurity, and custom software. <br/>
 We empower businesses with technology-driven solutions <br/>
 that bring real value to every project.
</Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ backgroundColor: "#0d1117", textAlign: "center", py: 2 }}>
        <Typography variant="body2" color="gray">
          © {new Date().getFullYear()} Copyright:{" "}
          <Box component="span" sx={{ color: "#fff", }}>TEKKDEV</Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;