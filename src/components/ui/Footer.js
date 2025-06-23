import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  IconButton,
} from "@mui/material";
import { Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#1c2331", color: "white", mt: 0, pt: 0 }}>
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ px: { xs: 2, md: 6 }, py: 6 }}
      >
        {isSmall ? (
          <>
            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                CONTACT
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }}>
                📍 Plot 22, Block E2 Block E 2, Gulberg III Lahore, Pakistan
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>
                ✉ Info@tekkdev.com
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>
                📞 +92 3244933313
              </Typography>
              <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>
                ☎ +92 (42) 3577-4258
              </Typography>
            </Grid>

            <Grid item xs={6} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                SERVICES
              </Typography>
              {[
                { label: "Cyber Security", to: "/software" },
                { label: "Software Development", to: "/websites" },
              ].map((item, i) => (
                <Typography
                  key={i}
                  component={Link}
                  to={item.to}
                  sx={{
                    mt: 1,
                    fontSize: "0.7rem",
                    display: "block",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                CONTACT
              </Typography>
              {[
                ["📍", "Plot 22, Block E2 Block E 2, Gulberg III Lahore, Pakistan"],
                ["✉", "Info@tekkdev.com"],
                ["📞", "+92 3244933313"],
                ["☎", "+92 (42) 3577-4258"],
              ].map(([icon, text], i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Typography sx={{ fontSize: "0.7rem", mr: 1 }}>{icon}</Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                SERVICES
              </Typography>
              {[
                { label: "Cyber Security", to: "/software" },
                { label: "Software Development", to: "/websites" },
                { label: "Partners", to: "/testimonials" },
              ].map((item, i) => (
                <Typography
                  key={i}
                  component={Link}
                  to={item.to}
                  sx={{
                    mt: 1,
                    fontSize: "0.7rem",
                    display: "block",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                USEFUL LINKS
              </Typography>
              {[
                {
                  label: "Linkedin",
                  href: "https://www.linkedin.com/in/tekk-dev-65804536b/",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/tekkdev/saved/?hl=en",
                },
                { label: "Help", to: "/contact" },
              ].map((item, i) =>
                item.href ? (
                  <Typography
                    key={i}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      mt: 1,
                      fontSize: "0.7rem",
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item.label}
                  </Typography>
                ) : (
                  <Typography
                    key={i}
                    component={Link}
                    to={item.to}
                    sx={{
                      mt: 1,
                      fontSize: "0.7rem",
                      display: "block",
                      color: "inherit",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {item.label}
                  </Typography>
                )
              )}
            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                <Typography
                  component="a"
                  href="/contact"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Need Tech Solutions?
                </Typography>
              </Typography>
              <Typography
                variant="body2"
                align="left"
                color="gray"
                sx={{
                  fontSize: "0.7rem",
                  "& a": {
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  },
                }}
              >
                TEKKDEV delivers cutting-edge digital services <br />
                in web development, cybersecurity, and custom software. <br />
                We empower businesses with technology-driven solutions<br />
                that bring real value to every project.
              </Typography>
            </Grid>
          </>
        )}
      </Grid>

      <Box
        sx={{
          backgroundColor: "#0d1117",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, sm: 6 },
          py: 2,
          gap: 1,
        }}
      >
        <Typography
          variant="body2"
          color="gray"
          sx={{ fontSize: "0.7rem", textAlign: { xs: "center", sm: "left" } }}
        >
          © {new Date().getFullYear()} Copyright:{" "}
          <Box component="span" sx={{ color: "#fff" }}>
            TEKKDEV
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography sx={{ color: "gray", fontSize: "0.7rem", mr: 1 }}>
            Get connected with us on social networks!
          </Typography>
          {[LinkedIn, Instagram].map((Icon, i) => {
            const links = [
              "https://www.linkedin.com/in/tekk-dev-65804536b/",
              "https://www.instagram.com/tekkdev/saved/?hl=en",
            ];
            return (
              <IconButton
                key={i}
                href={links[i]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "white", p: 0.5 }}
              >
                <Icon fontSize="small" />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
