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
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Google,
} from "@mui/icons-material";

const Footer = ({ setValue, setSelected }) => {
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
        {/* CONTACT & SERVICES together on small screens */}
        {isSmall ? (
          <>
            <Grid container spacing={2}>
              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                  CONTACT
                </Typography>
                <Typography sx={{ fontSize: "0.7rem" }}>📍 Plot 22, Block E2 Block E 2, Gulberg III Lahore, Pakistan</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>✉ Info@tekkdev.com</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>📞 +92 3244933313</Typography>
                <Typography sx={{ fontSize: "0.7rem", mt: 1 }}>☎ +92 (42) 3577-4258</Typography>
              </Grid>

              <Grid item xs={6} sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                  SERVICES
                </Typography>
                {[
                  "Cyber Security",
                  "Web development",
                  "Software development",
                  "Mobile app development",
                ].map((item, i) => (
                  <Typography key={i} variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
                    {item}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {/* CONTACT */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                CONTACT
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ fontSize: "0.7rem", mr: 1 }}>📍</Typography>
                <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                  Plot 22, Block E2 Block E 2, Gulberg III Lahore, Pakistan
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ fontSize: "0.7rem", mr: 1 }}>✉</Typography>
                <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                  Info@tekkdev.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ fontSize: "0.7rem", mr: 1 }}>📞</Typography>
                <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                  +92 3244933313
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography sx={{ fontSize: "0.7rem", mr: 1 }}>☎</Typography>
                <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                  +92 (42) 3577-4258
                </Typography>
              </Box>
            </Grid>

            {/* SERVICES */}
            <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "left" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                SERVICES
              </Typography>
              {[
                "Cyber Security",
                "Full Stack Development",
                "Software Development",
                
              ].map((item, i) => (
                <Typography key={i} variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
                  {item}
                </Typography>
              ))}
            </Grid>

            {/* USEFUL LINKS */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: "left",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                USEFUL LINKS
              </Typography>
              {["Your Account", "Help"].map(
                (item, i) => (
                  <Typography
                    key={i}
                    variant="body2"
                    sx={{ mt: 1, fontSize: "0.7rem" }}
                  >
                    {item}
                  </Typography>
                )
              )}
            </Grid>

            {/* COMPANY INFO */}
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: "left",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
                Need Tech Solutions?
              </Typography>
              <Typography
                variant="body2"
                align="left"
                color="gray"
                sx={{ fontSize: "0.7rem" }}
              >
                TEKKDEV delivers cutting-edge digital services <br />
                in web development, cybersecurity, and custom software. <br />
                We empower businesses with technology-driven solutions <br />
                that bring real value to every project.
              </Typography>
            </Grid>
          </>
        )}
      </Grid>

      {/* Bottom Bar */}
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
          <Typography
            sx={{
              color: "gray",
              fontSize: "0.7rem",
              mr: 1,
              textAlign: "right",
            }}
          >
            Get connected with us on social networks!
          </Typography>
          {[
            { icon: Facebook, link: "https://facebook.com" },
            { icon: Twitter, link: "https://twitter.com" },
            { icon: Google, link: "https://google.com" },
            {
              icon: LinkedIn,
              link: "https://www.linkedin.com/in/tekk-dev-65804536b/",
            },
            {
              icon: Instagram,
              link: "https://www.instagram.com/tekkdev/saved/?hl=en",
            },
          ].map(({ icon: Icon, link }, i) => (
            <IconButton
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", p: 0.5 }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;


