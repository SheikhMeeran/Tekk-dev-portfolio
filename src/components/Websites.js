import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
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
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      {/* Navigation Arrows */}
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify="center"
      >
        <Hidden smDown>
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
        </Hidden>

        <Hidden smDown>
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
        </Hidden>
      </Grid>

      {/* Digital Transformation Section */}
      <Grid
        item
        container
        direction={smaller ? "column" : "row"}
        alignItems="center"
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid item xs={12} md={12} className={classes.heading}>
          <Typography
            variant="h2"
            align={smaller ? "center" : "left"}
            gutterBottom
          >
            2.	Software Development
          </Typography>
          <Typography variant="body1" paragraph>
“Blend of Technology Diversity, Product Scalability, Innovative Design, Agile Development”          </Typography>
          <Typography variant="body1" paragraph>
            At TekkDev, we offer in-house development services for businesses, startups, enterprises with a strong emphasis on business analysis, application design, robust database architecture ensured through complete end to end quality of the software. 
          </Typography>
          <Typography variant="body1" paragraph>
Our Software Development Methodology operates on flexible, cost-effective engagement options, our cross-functional professionals can function as short- or long-term solutions for your development needs. Our development focus is to ensure the requirements are gathered, complete analysis is performed, scope is outlined, design is discussed and agreed with the client before development phase commences and all development is completed with unit testing, modular and integration testing before software development is marked completed and ready to be deployed on client site. All code is version controlled and secured.          </Typography>
          <Typography variant="body1" paragraph>
Our experienced team with years of expertise on various verticals (Healthcare, NFT, Blockchain, CRM) with successful track record of completing large to mid-size software development projects as web application, healthcare enterprise applications, mobile app & digital footprint management. We are experts and specialize in           </Typography>
          <Typography variant="body1" paragraph>
Vertical-Healthcare           </Typography>
          <Typography variant="body1" paragraph>
We have in-house subject matter expert who has completed specialized projects  with experience to have developed, deployed, implemented healthcare applications in .Net, .NET MVC, Java, J2EE, for clients in USA, UAE, KSA, and Pakistan. The product included scalability for a wide variety of projects in Hospital information system, Dental Solutions, Practice Management Solutions, Ambulance Systems which were conceptulaized, designed, developed and deployed successfully. All applications developed were HIPAA compliant, built on best healthcare practices, paperless, modular, interoperable and incorporated with data standards (CPT, ICD-10, SNOWMED, LOINC, CDSS) using IHE protocols. All applications seamlessly interfaced with PACS, 3rd party LIMS as well as connecting directly with lab machines using HL7, FHIR standards.          </Typography>

<Typography>Vertical-NFT</Typography>
<Typography>We create customized NFT marketplaces, which are basically decentralized platforms. We create such platforms according to your business requirements, where you can create, buy, sell and store these NFTs. We focus on developing a marketplace that has a unique selling point, which can grow very quickly to form a crypto-community</Typography>

        </Grid>



        {/* <Grid item xs={12} md={6} container justify={smaller ? "center" : "flex-end"}>
          <img
            src={digitalImage}
            alt="Digital Transformation Illustration"
            className={classes.image}
          />
        </Grid> */}
        <TechStack/>
<Typography>Our team specilaizes in building you the robust yet flexible architecture, where application development is supported though modular architecture and built on scalable microservices components.  Our purpose built, client specific architecture covers on-premise as well as deployment based on cloud architecture. Our team has deployed, managed and developed a large scale multi-tenant architectures in past.</Typography>

      </Grid>



     {/* <Grid
  item
  container
  direction={smaller ? "column" : "row"}
  alignItems="center"
  justify="space-between"
  className={classes.rowContainer}
> */}
  {/* Image on the left now */}
  {/* <Grid item xs={12} md={6} container justify={smaller ? "center" : "flex-start"}>
    <img
      src={Cloud}
      alt="Digital Transformation Illustration"
      className={classes.image}
    />
  </Grid>

  {/* Text on the right */}
  {/* <Grid item xs={12} md={6} className={classes.heading}>
    <Typography
      variant="h2"
      align={smaller ? "center" : "left"}
      gutterBottom
    >
      Cloud Assessment 
    </Typography>
    <Typography variant="body1" paragraph>
      ❖	Cloud based business over the years is now the preferred modality of hosting applications these days, but as maturity is in the process to be achieved. We “Do More”.
    </Typography>
    <Typography variant="body1" paragraph>
      ❖ Our Cloud Security Analysts perform complete, holistic mapping of your cloud architecture to prevent breaches, threats and ensure risks are mitigated.
    </Typography>
   
  </Grid>
</Grid> */} 


      {/* CTA */}
      <Grid item>
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default Websites;



