// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Grid,
//   Typography,
//   useMediaQuery,
//   useTheme,
//   Box,
//   IconButton,
// } from "@mui/material";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   LinkedIn,
//   Google,
// } from "@mui/icons-material";

// const Footer = ({ setValue, setSelected }) => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleNavClick = (value, selected) => {
//     setValue?.(value);
//     setSelected?.(selected);
//   };

//   return (
//     <Box sx={{ backgroundColor: "#1c2331", color: "white", mt: 8 }}>
//       {/* Social Bar */}
//       <Box
//         sx={{
//           backgroundColor: "#fff",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           py: 2,
//           px: 2,
//           textAlign: "center",
//         }}
//       >
//         <Typography sx={{ mr: 2, mb: isSmall ? 1 : 0, color: "black" }}>
//           Get connected with us on social networks!
//         </Typography>
//         <Box>
//           {[
//             { icon: Facebook, link: "https://facebook.com" },
//             { icon: Twitter, link: "https://twitter.com" },
//             { icon: Google, link: "https://google.com" },
//             {
//               icon: LinkedIn,
//               link: "https://www.linkedin.com/in/tekk-dev-65804536b/",
//             },
//             { icon: Instagram, link: "https://instagram.com" },
//           ].map(({ icon: Icon, link }, i) => (
//             <IconButton
//               key={i}
//               href={link}
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "black" }}
//             >
//               <Icon />
//             </IconButton>
//           ))}
//         </Box>
//       </Box>

//       {/* Main Footer Grid */}
//       <Grid
//         container
//         spacing={4}
//         justifyContent="space-between"
//         sx={{ px: { xs: 2, md: 6 }, py: 6 }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={3}
//           sx={{
//             textAlign: isSmall ? "center" : "left",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             CONTACT
//           </Typography>
//          <Typography variant="body2" sx={{ mt: 1 }}>
//   📍 Plot 22, Block E2 Block E 2<br />
//   Gulberg III Lahore, Pakistan
// </Typography>

//           <Typography variant="body2" sx={{ mt: 1 }}>
//             ✉ Info@tekdev.com
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             📞 +92 3244933313
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             ☎ +92 (42) 3577-4258
//           </Typography>
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={3}
//           sx={{
//             textAlign: isSmall ? "center" : "left",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             SERVICES
//           </Typography>
//           {[
//             "Cyber Security",
//             "Web development",
//             "Software development",
//             "Mobile app development",
//           ].map((item, i) => (
//             <Typography key={i} variant="body2" sx={{ mt: 1 }}>
//               {item}
//             </Typography>
//           ))}
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={3}
//           sx={{
//             textAlign: isSmall ? "center" : "left",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             USEFUL LINKS
//           </Typography>
//           {[
//             "Your Account",
//             "Become an Affiliate",
//             "Shipping Rates",
//             "Help",
//           ].map((item, i) => (
//             <Typography key={i} variant="body2" sx={{ mt: 1 }}>
//               {item}
//             </Typography>
//           ))}
//         </Grid>

//         <Grid
//           item
//           xs={12}
//           sm={6}
//           md={3}
//           sx={{
//             textAlign: isSmall ? "center" : "left",
//             display: "flex",
//             flexDirection: "column",
//           }}
//         >
//           <Typography variant="h6" gutterBottom>
//             Need Tech Solutions?
//           </Typography>
//           <Typography variant="body2" align={isSmall ? "center" : "left"} color="gray">
//             TEKKDEV delivers cutting-edge digital services <br />
//             in web development, cybersecurity, and custom software. <br />
//             We empower businesses with technology-driven solutions <br />
//             that bring real value to every project.
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Copyright */}
//       <Box sx={{ backgroundColor: "#0d1117", textAlign: "center", py: 2 }}>
//         <Typography variant="body2" color="gray">
//           © {new Date().getFullYear()} Copyright:{" "}
//           <Box component="span" sx={{ color: "#fff" }}>
//             TEKKDEV
//           </Box>
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;





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
          flexWrap: "wrap",
          py: 2,
          px: 2,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ mr: 2, mb: isSmall ? 1 : 0, color: "black", fontSize: "0.7rem" }}
        >
          Get connected with us on social networks!
        </Typography>
        <Box>
          {[
            { icon: Facebook, link: "https://facebook.com" },
            { icon: Twitter, link: "https://twitter.com" },
            { icon: Google, link: "https://google.com" },
            {
              icon: LinkedIn,
              link: "https://www.linkedin.com/in/tekk-dev-65804536b/",
            },
            { icon: Instagram, link: "https://instagram.com" },
          ].map(({ icon: Icon, link }, i) => (
            <IconButton
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "black" }}
            >
              <Icon />
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Main Footer Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        sx={{ px: { xs: 2, md: 6 }, py: 6 }}
      >
        {/* CONTACT */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            textAlign: isSmall ? "center" : "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
            CONTACT
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
            📍 Plot 22, Block E2 Block E 2<br />
            Gulberg III Lahore, Pakistan
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
            ✉ Info@tekdev.com
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
            📞 +92 3244933313
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
            ☎ +92 (42) 3577-4258
          </Typography>
        </Grid>

        {/* SERVICES */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            textAlign: isSmall ? "center" : "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
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

        {/* USEFUL LINKS */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            textAlign: isSmall ? "center" : "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
            USEFUL LINKS
          </Typography>
          {[
            "Your Account",
            "Become an Affiliate",
            "Shipping Rates",
            "Help",
          ].map((item, i) => (
            <Typography key={i} variant="body2" sx={{ mt: 1, fontSize: "0.7rem" }}>
              {item}
            </Typography>
          ))}
        </Grid>

        {/* ABOUT / COMPANY INFO */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            textAlign: isSmall ? "center" : "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: "0.7rem" }}>
            Need Tech Solutions?
          </Typography>
          <Typography
            variant="body2"
            align={isSmall ? "center" : "left"}
            color="gray"
            sx={{ fontSize: "0.7rem" }}
          >
            TEKKDEV delivers cutting-edge digital services <br />
            in web development, cybersecurity, and custom software. <br />
            We empower businesses with technology-driven solutions <br />
            that bring real value to every project.
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ backgroundColor: "#0d1117", textAlign: "center", py: 2 }}>
        <Typography variant="body2" color="gray" sx={{ fontSize: "0.7rem" }}>
          © {new Date().getFullYear()} Copyright:{" "}
          <Box component="span" sx={{ color: "#fff" }}>
            TEKKDEV
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;


