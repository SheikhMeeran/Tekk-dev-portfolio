// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   Grid,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Box,
//   Button,
//   Container,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { motion, useInView } from "framer-motion";

// import backArrow from "../assets/backArrow.svg";
// import forwardArrow from "../assets/forwardArrow.svg";
// import CallToAction from "./ui/CallToAction";
// import TechStack from "./TechStack";

// // Sample animations (replace with real JSX if available)
// const scaleAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Scale Animation</Box>;
// const automationAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Automation Animation</Box>;
// const uxAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>UX Animation</Box>;

// const Websites = (props) => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const medium = useMediaQuery(theme.breakpoints.down("md"));
//   const [expanded, setExpanded] = useState(false);

//   const handleToggleExpand = () => {
//     setExpanded((prev) => !prev);
//   };

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <Box sx={{ width: "100%", overflowX: "hidden", py: 0 }}>
//       <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 4 }, py: 0 }}>
//         <Grid container direction="column" spacing={6} alignItems="flex-start">
//           {/* Navigation Arrows */}
//           {!isSmall && (
//             <Grid item container justifyContent="space-between" alignItems="center">
//               <IconButton
//                 component={Link}
//                 to="/mobileapps"
//                 onClick={() => {
//                   props.setValue(1);
//                   props.setSelected(1);
//                 }}
//                 sx={{ "&:hover": { backgroundColor: "transparent" } }}
//               >
//                 <img src={backArrow} alt="Back to Mobile App Development Page" />
//               </IconButton>
//               <IconButton
//                 component={Link}
//                 to="/services"
//                 onClick={() => {
//                   props.setValue(1);
//                   props.setSelected(null);
//                 }}
//                 sx={{ "&:hover": { backgroundColor: "transparent" } }}
//               >
//                 <img src={forwardArrow} alt="Forward to Services Page" />
//               </IconButton>
//             </Grid>
//           )}

//           {/* Software Development Section */}
//           <Grid item alignSelf="flex-start">
//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box sx={{ pl: 2 }}>
//                 <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000000" }} gutterBottom>
//                   Software Development
//                 </Typography>

//                 <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                   “Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”
//                 </Typography>

//                 <motion.div
//                   ref={ref}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       maxHeight: expanded ? "none" : 200,
//                       overflow: "hidden",
//                       transition: "max-height 0.5s ease",
//                     }}
//                   >
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       At TekkDev, we offer in-house development services for businesses, startups, enterprises looking to build or scale their products. We deliver custom software solutions tailored to each client’s unique goals and challenges.
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our Software Development Methodology operates on flexible, cost-effective engagement options including Dedicated Teams, Fixed Scope, and T&M Models.
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) creates future-ready apps using a modern tech stack.
//                     </Typography>

//                     <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - Healthcare
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We have in-house subject matter experts who have developed healthcare apps for USA, UAE, KSA using HL7/FHIR interoperability standards, telemedicine, appointment systems, EHR/EMR integration, etc.
//                     </Typography>

//                     <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - NFT
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We create custom NFT marketplaces for creating, buying, and selling NFTs with wallet integration, smart contract development, and minting workflows.
//                     </Typography>

//                     {!expanded && (
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           bottom: 0,
//                           left: 0,
//                           right: 0,
//                           height: 60,
//                           background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
//                         }}
//                       />
//                     )}
//                   </Box>

//                   <Button
//                     variant="text"
//                     onClick={handleToggleExpand}
//                     sx={{ mt: 1, alignSelf: "flex-start", color: theme.palette.primary.main }}
//                   >
//                     {expanded ? "Read Less" : "Read More"}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Additional Services Sections */}

//           {/* Right Way Forward */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 Right way forward
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Whether you're a growing startup, an established enterprise, or scaling fast, our tailored software architecture adapts to your unique needs—ensuring seamless growth, high performance, and long-term reliability.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {scaleAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Automation */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 Automation
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Why waste time when you don’t have to?
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 We help you identify and automate time or event-based processes.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Increasing efficiency increases profits, freeing you to focus on growth—not busywork.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {automationAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* User Experience Design */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 User Experience Design
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 A good design that isn’t usable isn’t a good design.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 So why are so many software products confusing and frustrating?
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 We prioritize real user interaction to build unique, intuitive experiences that solve problems rather than create them.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {uxAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Tech Stack Section */}
//           <Grid item alignSelf="flex-start">
//             <TechStack />
//             <Typography
//               variant="body1"
//               paragraph
//               sx={{
//                 mb: 1,
//                 wordBreak: "break-word",
//                 fontSize: "0.95rem",
//                 marginBottom: "4rem",
//               }}
//             >
//               Our team specializes in robust and flexible architecture with modular, scalable components built on microservices and deployable on-premise or cloud.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Call to Action */}
//       <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
//         <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
//       </Box>
//     </Box>
//   );
// };

// export default Websites;



// import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import {
//   Grid,
//   Typography,
//   IconButton,
//   useMediaQuery,
//   Box,
//   Button,
//   Container,
// } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { motion, useInView } from "framer-motion";

// import backArrow from "../assets/backArrow.svg";
// import forwardArrow from "../assets/forwardArrow.svg";
// import CallToAction from "./ui/CallToAction";
// import TechStack from "./TechStack";

// // Placeholder animations (replace with Lottie/JSX animations if needed)
// const scaleAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Scale Animation</Box>;
// const automationAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Automation Animation</Box>;
// const uxAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>UX Animation</Box>;
// const documentsAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Documents Animation</Box>;

// const Websites = (props) => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const medium = useMediaQuery(theme.breakpoints.down("md"));
//   const [expanded, setExpanded] = useState(false);

//   const handleToggleExpand = () => {
//     setExpanded((prev) => !prev);
//   };

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <Box sx={{ width: "100%", overflowX: "hidden", py: 0 }}>
//       <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 4 }, py: 0 }}>
//         <Grid container direction="column" spacing={6} alignItems="flex-start">
//           {/* Navigation Arrows */}
//           {!isSmall && (
//             <Grid item container justifyContent="space-between" alignItems="center">
//               <IconButton
//                 component={Link}
//                 to="/mobileapps"
//                 onClick={() => {
//                   props.setValue(1);
//                   props.setSelected(1);
//                 }}
//                 sx={{ "&:hover": { backgroundColor: "transparent" } }}
//               >
//                 <img src={backArrow} alt="Back to Mobile App Development Page" />
//               </IconButton>
//               <IconButton
//                 component={Link}
//                 to="/services"
//                 onClick={() => {
//                   props.setValue(1);
//                   props.setSelected(null);
//                 }}
//                 sx={{ "&:hover": { backgroundColor: "transparent" } }}
//               >
//                 <img src={forwardArrow} alt="Forward to Services Page" />
//               </IconButton>
//             </Grid>
//           )}

//           {/* Software Development Section */}
//           <Grid item alignSelf="flex-start">
//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box sx={{ pl: 2 }}>
//                 <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "#000000" }} gutterBottom>
//                   Software Development
//                 </Typography>
//                 <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                   “Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”
//                 </Typography>

//                 <motion.div
//                   ref={ref}
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <Box
//                     sx={{
//                       position: "relative",
//                       maxHeight: expanded ? "none" : 200,
//                       overflow: "hidden",
//                       transition: "max-height 0.5s ease",
//                     }}
//                   >
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       At TekkDev, we offer in-house development services for businesses, startups, enterprises looking to build or scale their products. We deliver custom software solutions tailored to each client’s unique goals and challenges.
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our Software Development Methodology operates on flexible, cost-effective engagement options including Dedicated Teams, Fixed Scope, and T&M Models.
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) creates future-ready apps using a modern tech stack.
//                     </Typography>

//                     <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - Healthcare
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We have in-house subject matter experts who have developed healthcare apps for USA, UAE, KSA using HL7/FHIR interoperability standards, telemedicine, appointment systems, EHR/EMR integration, etc.
//                     </Typography>

//                     <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - NFT
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We create custom NFT marketplaces for creating, buying, and selling NFTs with wallet integration, smart contract development, and minting workflows.
//                     </Typography>
//                   </Box>

//                   <Button
//                     variant="text"
//                     onClick={handleToggleExpand}
//                     sx={{ mt: 1, alignSelf: "flex-start", color: theme.palette.primary.main }}
//                   >
//                     {expanded ? "Read Less" : "Read More"}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Digital Documents & Data Section */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 Digital Documents & Data
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Reduce Errors. Reduce Waste. Reduce Costs.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Billions are spent annually on the purchasing, printing, and distribution of paper.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 On top of the massive environmental impact this has, it causes harm to your bottom line as well.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication,
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 and help the Earth.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {documentsAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Right Way Forward */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 Right way forward
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Whether you're a growing startup, an established enterprise, or scaling fast, our tailored software architecture adapts to your unique needs—ensuring seamless growth, high performance, and long-term reliability.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {scaleAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Automation */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 Automation
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Why waste time when you don’t have to?
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 We help you identify and automate time or event-based processes.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 Increasing efficiency increases profits, freeing you to focus on growth—not busywork.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {automationAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* UX Design */}
//           <Grid
//             container
//             spacing={4}
//             alignItems="center"
//             direction={medium ? "column" : "row"}
//             sx={{ px: { xs: 2, md: 10 }, py: 6 }}
//           >
//             <Grid item xs={12} md={6}>
//               <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
//                 User Experience Design
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 A good design that isn’t usable isn’t a good design.
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 So why are so many software products confusing and frustrating?
//               </Typography>
//               <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                 We prioritize real user interaction to build unique, intuitive experiences that solve problems rather than create them.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {uxAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Tech Stack */}
//           <Grid item alignSelf="flex-start">
//             <TechStack />
//             <Typography variant="body1" paragraph sx={{ mb: 1, fontSize: "0.95rem", marginBottom: "4rem" }}>
//               Our team specializes in robust and flexible architecture with modular, scalable components built on microservices and deployable on-premise or cloud.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* CTA */}
//       <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
//         <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
//       </Box>
//     </Box>
//   );
// };

// export default Websites;




import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import TechStack from "./TechStack";

// Placeholder animations (replace with Lottie/JSX animations if needed)
const scaleAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Scale Animation</Box>;
const automationAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Automation Animation</Box>;
const uxAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>UX Animation</Box>;
const documentsAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Documents Animation</Box>;

const Websites = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", py: 0 }}>
      <Container maxWidth="lg" disableGutters sx={{ px: { xs: 2, sm: 4 }, py: 0 }}>
        <Grid container direction="column" spacing={6} alignItems="flex-start">
          {/* Navigation Arrows */}
          {!isSmall && (
            <Grid item container justifyContent="space-between" alignItems="center">
              <IconButton
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(1);
                }}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <img src={backArrow} alt="Back to Mobile App Development Page" />
              </IconButton>
              <IconButton
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(null);
                }}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <img src={forwardArrow} alt="Forward to Services Page" />
              </IconButton>
            </Grid>
          )}

          {/* Software Development Section */}
          <Grid item alignSelf="flex-start">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ pl: 2 }}>
                <Typography sx={{ fontSize: "0.95rem", fontWeight: "bold", color: "#000000" }} gutterBottom>
                  Software Development
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                  “Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”
                </Typography>

                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      maxHeight: expanded ? "none" : 200,
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      At TekkDev, we offer in-house development services for businesses, startups, enterprises looking to build or scale their products. We deliver custom software solutions tailored to each client’s unique goals and challenges.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      Our Software Development Methodology operates on flexible, cost-effective engagement options including Dedicated Teams, Fixed Scope, and T&M Models.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) creates future-ready apps using a modern tech stack.
                    </Typography>

                    <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
                      Vertical - Healthcare
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      We have in-house subject matter experts who have developed healthcare apps for USA, UAE, KSA using HL7/FHIR interoperability standards, telemedicine, appointment systems, EHR/EMR integration, etc.
                    </Typography>

                    <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
                      Vertical - NFT
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                      We create custom NFT marketplaces for creating, buying, and selling NFTs with wallet integration, smart contract development, and minting workflows.
                    </Typography>
                  </Box>

                  <Button
                    variant="text"
                    onClick={handleToggleExpand}
                    sx={{ mt: 1, alignSelf: "flex-start", color: theme.palette.primary.main }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Digital Documents & Data Section */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={medium ? "column" : "row"}
            sx={{ px: { xs: 2, md: 10 }, py: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Digital Documents & Data
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Billions are spent annually on the purchasing, printing, and distribution of paper.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                On top of the massive environmental impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication,
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                and help the Earth.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
              {documentsAnimationJSX}
            </Grid>
          </Grid>

          {/* Right Way Forward */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={medium ? "column" : "row"}
            sx={{ px: { xs: 2, md: 10 }, py: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Right way forward
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Whether you're a growing startup, an established enterprise, or scaling fast, our tailored software architecture adapts to your unique needs—ensuring seamless growth, high performance, and long-term reliability.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
              {scaleAnimationJSX}
            </Grid>
          </Grid>

          {/* Automation */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={medium ? "column" : "row"}
            sx={{ px: { xs: 2, md: 10 }, py: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                Automation
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                We help you identify and automate time or event-based processes.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                Increasing efficiency increases profits, freeing you to focus on growth—not busywork.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
              {automationAnimationJSX}
            </Grid>
          </Grid>

          {/* UX Design */}
          <Grid
            container
            spacing={4}
            alignItems="center"
            direction={medium ? "column" : "row"}
            sx={{ px: { xs: 2, md: 10 }, py: 6 }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
                User Experience Design
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                So why are so many software products confusing and frustrating?
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                We prioritize real user interaction to build unique, intuitive experiences that solve problems rather than create them.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
              {uxAnimationJSX}
            </Grid>
          </Grid>

          {/* Tech Stack */}
          <Grid item alignSelf="flex-start">
            <TechStack />
            <Typography variant="body1" paragraph sx={{ mb: 1, fontSize: "0.95rem", marginBottom: "4rem" }}>
              Our team specializes in robust and flexible architecture with modular, scalable components built on microservices and deployable on-premise or cloud.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
        <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Box>
    </Box>
  );
};

export default Websites;
