// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Box, Grid, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
// import ButtonArrow from "./ButtonArrow";

// import background from "../../assets/background1.jpeg";
// import background2 from "../../assets/background.jpg";
// import mobileBackground from "../../assets/mobileBackground.jpg";

// const CallToAction = ({ setValue, setSelected }) => {
//   const theme = useTheme();
//   const smaller = useMediaQuery(theme.breakpoints.down("sm"));

//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev === 0 ? 1 : 0));
//     }, 10000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentBackground = smaller ? mobileBackground : bgIndex === 0 ? background : background2;

//   return (
//     <Box
//       sx={{
//         height: { xs: "85em", sm: "60em" },
//         width: "100%",
//         position: "relative",
//         backgroundImage: `url(${currentBackground})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         transition: "background-image 1s ease-in-out",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           width: "100%",
//           height: "100%",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           zIndex: 1,
//         }}
//       />
//       <Grid
//         container
//         direction="column"
//         justifyContent="center"
//         alignItems="center"
//         sx={{
//           position: "absolute",
//           zIndex: 2,
//           top: { xs: "35%", sm: "40%" },
//         }}
//       >
//         <Typography
//           variant="h2"
//           gutterBottom
//           sx={{
//             color: "#fff",
//             fontWeight: 700,
//             textAlign: "center",
//             fontSize: { xs: "2rem", sm: "3.5rem" },
//             lineHeight: 1.2,
//           }}
//         >
//           Simple Software.
//           <br />
//           Revolutionary Results.
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           gutterBottom
//           sx={{
//             color: "#fff",
//             fontWeight: 500,
//             textAlign: "center",
//             fontSize: "1.25rem",
//           }}
//         >
//           Take advantage of the 21st Century.
//         </Typography>

//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             mt: 2,
//           }}
//         >
//           <Button
//             component={Link}
//             to="/revolution"
//             onClick={() => {
//               setValue(2);
//               setSelected(null);
//             }}
//             variant="outlined"
//            sx={{
//               borderColor: theme.palette.common.hoverBlue,
//               backgroundColor: "rgba(0,0,0,0.3)",
//               borderWidth: 3,
//               height: "40px",
//               // opacity: 0.9,
//               color: "#fff",
//               ml: 1,
//               "&:hover": {
//                 backgroundColor: theme.palette.common.hoverBlue,
//                 color: "white",
//                 opacity: 1,
//               },
//               ...theme.typography.learnButton,
//             }}
//           >
//             Learn More
//             <ButtonArrow width={25} height={18} fill="white" />
//           </Button>

//           <Button
//             component={Link}
//             to="/estimate"
//             onClick={() => {
//               setValue(5);
//               setSelected(null);
//             }}
//             variant="outlined"
//             sx={{
//               borderColor: theme.palette.common.hoverBlue,
//               backgroundColor: "rgba(0,0,0,0.3)",
//               borderWidth: 3,
//               height: "40px",
//               opacity: 0.9,
//               color: "#fff",
//               ml: 1,
//               "&:hover": {
//                 backgroundColor: theme.palette.common.hoverBlue,
//                 color: "white",
//                 opacity: 1,
//               },
//               ...theme.typography.learnButton,
//             }}
//           >
//             Get Estimate
//             <ButtonArrow width={25} height={18} fill="white" />
//           </Button>
//         </Box>
//       </Grid>
//     </Box>
//   );
// };

// export default CallToAction;





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
    marginBottom: 0, // ✅ No space below
    paddingBottom: 0,
  }}
>

      {/* Overlay */}
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

      {/* Content */}
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

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={0}
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
              backgroundColor: "rgba(0,0,0,0.3)",
              borderWidth: 3,
              height: "40px",
              color: "white",
              borderRadius: 0,
              px: 2,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            Learn More
            <ButtonArrow width={25} height={18} fill="white" />
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
              backgroundColor: "rgba(0,0,0,0.3)",
              borderWidth: 3,
              height: "40px",
              color: "white",
              borderRadius: 0,
              px: 2,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: "white",
              },
            }}
          >
            Get Estimate
            <ButtonArrow width={25} height={18} fill="white" />
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
};

export default CallToAction;
