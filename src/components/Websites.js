import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Container,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";

import documentsAnimation from "../animations/documentsAnimation/data.js";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";
import transform from "../assets/g.Digital Transformation v2.jpg";

import CallToAction from "./ui/CallToAction";
import TechStack from "./TechStack";

// Lottie animations
const scaleAnimationJSX = (
  <Lottie animationData={scaleAnimation} style={{ width: 400, height: 200 }} />
);
const automationAnimationJSX = (
  <Lottie animationData={automationAnimation} style={{ width: 400, height: 200 }} />
);
const uxAnimationJSX = (
  <Lottie animationData={uxAnimation} style={{ width: 400, height: 200 }} />
);
const documentsAnimationJSX = (
  <Lottie animationData={documentsAnimation} style={{ width: 400, height: 200 }} />
);

const Websites = ({ setValue, setSelected }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionStyle = {
    px: { xs: 2, md: 8 },
    py: { xs: 5, md: 1 },
  };

  const textStyle = {
    fontSize: "0.95rem",
    lineHeight: 1.6,
    textAlign: "left",
  };

  const titleStyle = {
    fontSize: "0.95rem",
    fontWeight: 600,
    textAlign: "left",
    mb: 1,
  };

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", bgcolor: "#fff" }}>
      <Container maxWidth="lg" disableGutters sx={{ mt: { xs: 6, md: 8 } }}>
        <Grid container direction="column" spacing={6}>
          {/* Software Development */}
          <Grid item sx={sectionStyle}>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Typography sx={{ ...titleStyle, color: "#000" }}>
                Software Development
              </Typography>
              <Typography paragraph sx={textStyle}>
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
                    maxHeight: expanded ? "none" : 200,
                    overflow: "hidden",
                    transition: "max-height 0.5s ease",
                  }}
                >
                  <Typography paragraph sx={textStyle}>
                    At TekkDev, we offer in-house development services for businesses, startups, enterprises with a strong emphasis on business analysis, application design, robust database architecture ensured through complete end to end quality of the software.
                  </Typography>
                  <Typography paragraph sx={textStyle}>
                    Our Software Development Methodology operates on flexible, cost-effective engagement options, our cross-functional professionals can function as short- or long-term solutions for your development needs. Our development focus is to ensure the requirements are gathered, complete analysis is performed, scope is outlined, design is discussed and agreed with the client before development phase commences and all development is completed with unit testing, modular and integration testing before software development is marked completed and ready to be deployed on client site. All code is version controlled and secured.
                  </Typography>
                  <Typography paragraph sx={textStyle}>
                    Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) with successful track record of completing large to mid-size software development projects as web application, healthcare enterprise applications, mobile app & digital footprint management. We are experts and specialize in
                  </Typography>
                  <Typography sx={titleStyle}>Vertical - Healthcare</Typography>
                  <Typography paragraph sx={textStyle}>
                    We have in-house subject matter expert who has completed specialized projects with experience to have developed, deployed, implemented healthcare applications in .Net, .NET MVC, Java, J2EE, for clients in USA, UAE, KSA, and Pakistan. The product included scalability for a wide variety of projects in Hospital information system, Dental Solutions, Practice Management Solutions, Ambulance Systems which were conceptualized, designed, developed and deployed successfully. All applications developed were HIPAA compliant, built on best healthcare practices, paperless, modular, interoperable and incorporated with data standards (CPT, ICD-10, SNOWMED, LOINC, CDSS) using IHE protocols. All applications seamlessly interfaced with PACS, 3rd party LIMS as well as connecting directly with lab machines using HL7, FHIR standards.
                  </Typography>
                  <Typography sx={titleStyle}>Vertical - NFT</Typography>
                  <Typography paragraph sx={textStyle}>
                    We create customized NFT marketplaces, which are basically decentralized platforms. We create such platforms according to your business requirements, where you can create, buy, sell and store these NFTs. We focus on developing a marketplace that has a unique selling point, which can grow very quickly to form a crypto-community.
                  </Typography>
                </Box>

                <Button onClick={() => setExpanded((prev) => !prev)} sx={{ mt: 1, color: "blue" ,fontSize: "0.75rem",
}}>
                  {expanded ? "Read Less" : "Read More"}
                </Button>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Reusable Sections */}
          {[
            {
              title: "Digital Transformation",
              text: [
  "Modern technologies, evolving frameworks, and growing user ",
  "demands require continuous innovation in software development.",
  "Applications must adapt quickly to remain scalable, secure, and ",
  "efficient in today's fast-paced tech landscape.",
  "❖ Our development process is agile and business-focused",
  "❖ Identify and eliminate functional redundancies in code",
  "❖ Aligns your product vision with development execution",
  "❖ Optimize team workflows and available resources",
  "❖ Scalable development practices with modular architecture",
  "❖ Tailored to your specific software and business requirements",
],

              image: transform,
              isImage: true,
            },
            {
              title: "Digital Documents & Data",
              text: [
                "Reduce Errors. Reduce Waste. Reduce Costs.",
                "Billions are spent annually on the purchasing, printing, and distribution of paper.",
                "On top of the massive environmental impact this has, it causes harm to your bottom",
                "line as well. By utilizing digital forms and documents you can remove these obsolete",
                "expenses, accelerate your communication, and help the Earth.",
              ],
              animation: documentsAnimationJSX,
            },
            {
              title: "Right way forward",
              text: [
                "Whether you're a growing startup, an established enterprise,",
                "or scaling fast our tailored software architecture adapts to your",
                "unique needs—ensuring seamless growth, high performance, and long-term reliability",
              ],
              animation: scaleAnimationJSX,
            },
            {
              title: "Automation",
              text: [
                "Why waste time when you don’t have to?",
                "We help you identify and automate time or event-based processes.",
                "Increasing efficiency increases profits, freeing you to focus on growth—not busywork.",
              ],
              animation: automationAnimationJSX,
            },
            {
              title: "User Experience Design",
              text: [
                "A good design that isn’t usable isn’t a good design.",
                "So why are so many software products confusing and frustrating? We prioritize real user ",
                "interaction to build unique, intuitive experiences that solve ",
                "problems rather than create them.",
              ],
              animation: uxAnimationJSX,
            },
          ].map((section, index) => {
            const showReadMore = section.text.length > 4;
            const isExpanded = expandedIndex === index;
            const visibleText = showReadMore && !isExpanded ? section.text.slice(0, 3) : section.text;

            return (
              <Grid
                container
                key={index}
                spacing={4}
                alignItems="center"
                direction={medium ? "column" : "row"}
                sx={sectionStyle}
              >
                <Grid item xs={12} md={6}>
                  <Typography sx={titleStyle}>{section.title}</Typography>
                  {visibleText.map((line, idx) => (
                    <Typography key={idx} paragraph sx={textStyle}>
                      {line}
                    </Typography>
                  ))}
                  {showReadMore && (
                    <Button
  onClick={() => setExpandedIndex(isExpanded ? null : index)}
  sx={{
    mt: 1,
    px: 1.5,
    py: 0.5,
    fontSize: "0.95rem",
    minWidth: "auto",
    color: "blue",
    textTransform: "none",
  }}
>
  {isExpanded ? "Read Less" : "Read More"}
</Button>
                  )}
                </Grid>
                <Grid item xs={12} md={6} display="flex" justifyContent={medium ? "center" : "flex-end"}>
                  {section.isImage ? (
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.title}
                      sx={{
                        width: "100%",
                        maxWidth: 400,
                        height: "auto",
                        borderRadius: 2,
                        boxShadow: 3,
                        marginLeft:"11rem",
                      }}
                    />
                  ) : (
                    section.animation
                  )}
                </Grid>
              </Grid>
            );
          })}

          {/* Tech Stack */}
          <Grid item sx={{ ...sectionStyle, pb: 0 }}>
            <TechStack />
            <Typography paragraph sx={{ ...textStyle, mb: 9 }}>
              Our team specializes in building you the robust yet flexible architecture, where application development is supported through modular architecture and built on scalable microservices components. Our purpose-built, client-specific architecture covers on-premise as well as deployment based on cloud architecture. Our team has deployed, managed and developed a large scale multi-tenant architectures in past.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ width: "100%", mt: 3 }}>
        <CallToAction setValue={setValue} setSelected={setSelected} />
      </Box>
    </Box>
  );
};

export default Websites;
