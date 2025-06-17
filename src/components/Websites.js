import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Box,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import TechStack from "./TechStack";

const Websites = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      <Grid container direction="column" spacing={6}>
        {/* Navigation Arrows */}
        <Grid
          item
          container
          justifyContent="center"
          spacing={2}
          sx={{ px: { xs: 2, md: 10 }, mt: 4 }}
        >
          {!isSmall && (
            <Grid item>
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
            </Grid>
          )}
          {!isSmall && (
            <Grid item>
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
        </Grid>

        {/* Software Development Section (Text Only) */}
        <Grid
          item
          container
          direction="column"
          spacing={4}
          sx={{ px: { xs: 2, md: 10 }, width: "100%" }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Software Development
            </Typography>

            <Typography variant="body1" paragraph>
              “Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”
            </Typography>

            <Box
              sx={{
                position: "relative",
                maxHeight: expanded ? "none" : 200,
                overflow: "hidden",
                transition: "max-height 0.5s ease",
                pr: 1,
                hyphens: "auto",
              }}
            >
              <Box>
                <Typography variant="body1" paragraph>
                  At TekkDev, we offer in-house development services for businesses, startups, enterprises with a strong emphasis on business analysis, application design, robust database architecture ensured through complete end to end quality of the software.
                </Typography>

                <Typography variant="body1" paragraph>
                  Our Software Development Methodology operates on flexible, cost-effective engagement options, our cross-functional professionals can function as short- or long-term solutions for your development needs. Our development focus is to ensure the requirements are gathered, complete analysis is performed, scope is outlined, design is discussed and agreed with the client before development phase commences and all development is completed with unit testing, modular and integration testing before software development is marked completed and ready to be deployed on client site. All code is version controlled and secured.
                </Typography>

                <Typography variant="h6" sx={{ mt: 3 }}>
                  <strong>Vertical - Healthcare</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                  We have in-house subject matter expert who has completed specialized projects with experience to have developed, deployed, implemented healthcare applications in .Net, .NET MVC, Java, J2EE, for clients in USA, UAE, KSA, and Pakistan. The product included scalability for a wide variety of projects in Hospital information system, Dental Solutions, Practice Management Solutions, Ambulance Systems which were conceptualized, designed, developed and deployed successfully. All applications developed were HIPAA compliant, built on best healthcare practices, paperless, modular, interoperable and incorporated with data standards (CPT, ICD-10, SNOWMED, LOINC, CDSS) using IHE protocols. All applications seamlessly interfaced with PACS, 3rd party LIMS as well as connecting directly with lab machines using HL7, FHIR standards.
                </Typography>

                <Typography variant="h6">
                  <strong>Vertical - NFT</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                  We create customized NFT marketplaces, which are basically decentralized platforms. We create such platforms according to your business requirements, where you can create, buy, sell and store these NFTs. We focus on developing a marketplace that has a unique selling point, which can grow very quickly to form a crypto-community.
                </Typography>
              </Box>

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
              sx={{ mt: 1, alignSelf: "flex-start" }}
            >
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </Grid>
        </Grid>

        {/* Tech Stack Section */}
        {/* <Grid item sx={{ px: { xs: 2, md: 10 } }}>
          <TechStack />
          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
Our team specilaizes in building you the robust yet flexible architecture, where application development is supported though modular architecture and built on scalable microservices components.  Our purpose built, client specific architecture covers on-premise as well as deployment based on cloud architecture. Our team has deployed, managed and developed a large scale multi-tenant architectures in past.          </Typography>
        </Grid> */}



<Grid item xs={12} sx={{ px: { xs: 2, md: 10 }, width: "100%" }}>
  <TechStack />
  <Typography
    variant="body1"
    paragraph
    sx={{
      mt: 2,
      width: "100%",
      maxWidth: "100%",
      overflowWrap: "break-word",
      wordBreak: "break-word",
      whiteSpace: "normal",
    }}
  >
    Our team specializes in building you the robust yet flexible architecture,
    where application development is supported through modular architecture and
    built on scalable microservices components. Our purpose-built,
    client-specific architecture covers on-premise as well as deployment based
    on cloud architecture. Our team has deployed, managed and developed a
    large-scale multi-tenant architectures in the past.
  </Typography>
</Grid>

        {/* Call to Action */}
        <Grid item>
          <CallToAction
            setValue={props.setValue}
            setSelected={props.setSelected}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Websites;
