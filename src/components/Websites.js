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

// const Websites = (props) => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const [expanded, setExpanded] = useState(false);

//   const handleToggleExpand = () => {
//     setExpanded((prev) => !prev);
//   };

//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <Box sx={{ width: "100%", overflowX: "hidden", py: 0 }}>
//       <Container
//         maxWidth="lg"
//         disableGutters
//         sx={{ px: { xs: 2, sm: 4 }, py: 0 }}
//       >
//         <Grid container direction="column" spacing={6}>
//           {/* Navigation Arrows */}
//           {!isSmall && (
//             <Grid
//               item
//               container
//               justifyContent="space-between"
//               alignItems="center"
//             >
//               <IconButton
//                 component={Link}
//                 to="/mobileapps"
//                 onClick={() => {
//                   props.setValue(1);
//                   props.setSelected(1);
//                 }}
//                 sx={{ "&:hover": { backgroundColor: "transparent" } }}
//               >
//                 <img
//                   src={backArrow}
//                   alt="Back to Mobile App Development Page"
//                 />
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
//           <Grid item>
//             <motion.div
//               initial={{ y: -40, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.7 }}
//             >
//               <Box sx={{ pl: 2 }}>
//                 <Typography
//                   sx={{
//                     fontSize: "1rem",
//                     fontWeight: "bold",
//                     color: "#000000",
//                   }}
//                   gutterBottom
//                 >
//                   Software Development
//                 </Typography>

//                 <Typography
//                   variant="body1"
//                   paragraph
//                   sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                 >
//                   “Blend of Technology Diversity, Product Scalability,
//                   Innovative Design, Agile Development”
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
//                     <Box>
//                       <Typography
//                         variant="body1"
//                         paragraph
//                         sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                       >
//                         At TekkDev, we offer in-house development services for
//                         businesses, startups, enterprises with a strong emphasis
//                         on business analysis, application design, robust
//                         database architecture ensured through complete end to
//                         end quality of the software.
//                       </Typography>

//                       <Typography
//                         variant="body1"
//                         paragraph
//                         sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                       >
//                        Our Software Development Methodology operates on flexible, cost-effective engagement options, our cross-functional professionals can function as short- or long-term solutions for your development needs. Our development focus is to ensure the requirements are gathered, complete analysis is performed, scope is outlined, design is discussed and agreed with the client before development phase commences and all development is completed with unit testing, modular and integration testing before software development is marked completed and ready to be deployed on client site. All code is version controlled and secured.
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         paragraph
//                         sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                       >
// Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) with successful track record of completing large to mid-size software development projects as web application, healthcare enterprise applications, mobile app & digital footprint management. We are experts and specialize in                       </Typography>

//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontSize: "0.95rem",
//                           lineHeight: 1.6,
//                           fontWeight: 500,
//                         }}
//                       >
//                         Vertical - Healthcare
//                       </Typography>

//                       <Typography
//                         variant="body1"
//                         paragraph
//                         sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                       >
//                     We have in-house subject matter expert who has completed specialized projects  with experience to have developed, deployed, implemented healthcare applications in .Net, .NET MVC, Java, J2EE, for clients in USA, UAE, KSA, and Pakistan. The product included scalability for a wide variety of projects in Hospital information system, Dental Solutions, Practice Management Solutions, Ambulance Systems which were conceptulaized, designed, developed and deployed successfully. All applications developed were HIPAA compliant, built on best healthcare practices, paperless, modular, interoperable and incorporated with data standards (CPT, ICD-10, SNOWMED, LOINC, CDSS) using IHE protocols. All applications seamlessly interfaced with PACS, 3rd party LIMS as well as connecting directly with lab machines using HL7, FHIR standards.
//                       </Typography>

//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontSize: "0.95rem",
//                           lineHeight: 1.6,
//                           fontWeight: 500,
//                         }}
//                       >
//                         Vertical - NFT
//                       </Typography>

//                       <Typography
//                         variant="body1"
//                         paragraph
//                         sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
//                       >
//                         We create customized NFT marketplaces, which are basically decentralized platforms. We create such platforms according to your business requirements, where you can create, buy, sell and store these NFTs. We focus on developing a marketplace that has a unique selling point, which can grow very quickly to form a crypto-community.
//                       </Typography>
//                     </Box>

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
//                     sx={{
//                       mt: 1,
//                       alignSelf: "flex-start",
//                       color: theme.palette.primary.main,
//                     }}
//                   >
//                     {expanded ? "Read Less" : "Read More"}
//                   </Button>
//                 </motion.div>
//               </Box>
//             </motion.div>
//           </Grid>

//           {/* Tech Stack Section */}
//           <Grid item sx={{ mb: 0 }}>
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
//               Our team specilaizes in building you the robust yet flexible architecture, where application development is supported though modular architecture and built on scalable microservices components.  Our purpose built, client specific architecture covers on-premise as well as deployment based on cloud architecture. Our team has deployed, managed and developed a large scale multi-tenant architectures in past.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Call to Action */}
//       <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
//         <CallToAction
//           setValue={props.setValue}
//           setSelected={props.setSelected}
//         />
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
//         <Grid container direction="column" spacing={6}>
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
//           <Grid item>
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
//                       At TekkDev, we offer in-house development services for businesses, startups, enterprises...
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our Software Development Methodology operates on flexible, cost-effective engagement options...
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM)...
//                     </Typography>

//                     <Typography variant="h6" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - Healthcare
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We have in-house subject matter experts who have developed healthcare apps for USA, UAE, KSA...
//                     </Typography>

//                     <Typography variant="h5" sx={{ fontSize: "0.95rem", lineHeight: 1.6, fontWeight: 500 }}>
//                       Vertical - NFT
//                     </Typography>
//                     <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
//                       We create custom NFT marketplaces for creating, buying, and selling NFTs...
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
//               <Typography variant="h4" gutterBottom>
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
//               <Typography variant="h4" gutterBottom>
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
//               <Typography variant="h4" gutterBottom>
//                 User Experience Design
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 A good design that isn’t usable isn’t a good design.
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 So why are so many software products confusing and frustrating?
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 We prioritize real user interaction to build unique, intuitive experiences
//               </Typography>
//               <Typography variant="body1" paragraph>
//                 that solve problems rather than create them.
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
//               {uxAnimationJSX}
//             </Grid>
//           </Grid>

//           {/* Tech Stack Section */}
//           <Grid item>
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

// Sample animations (replace with real JSX if available)
const scaleAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Scale Animation</Box>;
const automationAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>Automation Animation</Box>;
const uxAnimationJSX = <Box sx={{ width: 300, height: 200, bgcolor: "#eee" }}>UX Animation</Box>;

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
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold", color: "#000000" }} gutterBottom>
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

                    {!expanded && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 60,
                          background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
                        }}
                      />
                    )}
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

          {/* Additional Services Sections */}

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

          {/* User Experience Design */}
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

          {/* Tech Stack Section */}
          <Grid item alignSelf="flex-start">
            <TechStack />
            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 1,
                wordBreak: "break-word",
                fontSize: "0.95rem",
                marginBottom: "4rem",
              }}
            >
              Our team specializes in robust and flexible architecture with modular, scalable components built on microservices and deployable on-premise or cloud.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
        <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Box>
    </Box>
  );
};

export default Websites;