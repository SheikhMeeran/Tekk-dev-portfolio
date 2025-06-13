
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import digitalImage from "../assets/Digital Transformation .jpg";
import TechStack from "./TechStack";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "100em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  arrowIcons: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginBottom: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  image: {
    width: "75%",
    height: "45%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
      marginTop: "2em",
    },
  },
}));

const Websites = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Navigation Arrows */}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent="center"
      >
        {!smaller && (<>
              <Grid item className={classes.arrowContainer} style={{ marginRight: "2em" }}>
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                props.setValue(1);
                props.setSelected(1);
              }}
            >
              <img src={backArrow} alt="Back to Mobile App Development Page" />
            </IconButton>
          </Grid>
        </>)}

{!smaller && (<>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelected(null);
              }}
            >
              <img src={forwardArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
</>)}

      </Grid>

      {/* Digital Transformation Section */}
      <Grid
        item
        container
        direction={smaller ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        className={classes.rowContainer}
      >
        <Grid item xs={12} md={6} className={classes.heading}>
          <Typography
            variant="h2"
            align={smaller ? "center" : "left"}
            gutterBottom
          >
            2. Software Development
          </Typography>
          <Typography variant="body1" paragraph>
            “Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”
          </Typography>
          <Typography variant="body1" paragraph>
            At TekkDev, we offer in-house development services for businesses, startups, enterprises with a strong emphasis on business analysis, application design, robust database architecture ensured through complete end to end quality of the software.
          </Typography>
          <Typography variant="body1" paragraph>
            Our Software Development Methodology operates on flexible, cost-effective engagement options, our cross-functional professionals can function as short- or long-term solutions for your development needs. Our development focus is to ensure the requirements are gathered, complete analysis is performed, scope is outlined, design is discussed and agreed with the client before development phase commences and all development is completed with unit testing, modular and integration testing before software development is marked completed and ready to be deployed on client site. All code is version controlled and secured.
          </Typography>
          <Typography variant="body1" paragraph>
            Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) with successful track record of completing large to mid-size software development projects as web application, healthcare enterprise applications, mobile app & digital footprint management.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Vertical - Healthcare</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We have in-house subject matter expert who has completed specialized projects with experience to have developed, deployed, implemented healthcare applications in .Net, .NET MVC, Java, J2EE, for clients in USA, UAE, KSA, and Pakistan. The product included scalability for a wide variety of projects in Hospital information system, Dental Solutions, Practice Management Solutions, Ambulance Systems. All applications developed were HIPAA compliant, modular, paperless, interoperable and incorporated with data standards (CPT, ICD-10, SNOWMED, LOINC, CDSS) using IHE protocols, interfaced with PACS, 3rd party LIMS, and directly with lab machines using HL7, FHIR standards.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Vertical - NFT</strong>
          </Typography>
          <Typography variant="body1" paragraph>
            We create customized NFT marketplaces — decentralized platforms where you can create, buy, sell, and store NFTs. We build marketplaces with unique selling points that enable rapid growth and crypto-community engagement.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} container justifyContent={smaller ? "center" : "flex-end"}>
          <img
            src={digitalImage}
            alt="Digital Transformation Illustration"
            className={classes.image}
          />
        </Grid>
      </Grid>

      {/* Tech Stack & Architecture */}
      <Grid item className={classes.rowContainer}>
        <TechStack />
        <Typography variant="body1" paragraph>
          Our team specializes in building robust yet flexible architectures, where application development is supported through modular architecture and scalable microservices. We offer both on-premise and cloud deployment options, and our experience includes large-scale multi-tenant systems.
        </Typography>
      </Grid>

      {/* Call to Action */}
      <Grid item>
        <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
      </Grid>
    </Grid>
  );
};

export default Websites;
