import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Lottie from "react-lottie";
import { makeStyles } from "@mui/styles"; // if you still need legacy styling
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimation from "../animations/documentsAnimation/data.js";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";
import rootTree from "../assets/root.svg";
import CallToAction from "./ui/CallToAction";
import GRC from '../assets/GRC.jpeg'
import VAPT from '../assets/VAPTcopy.jpeg'
import Incident from '../assets/Incident Response .jpeg'
import Managed from '../assets/Managed App Sec.jpeg'
import Cloud from "../assets/Cloud Assessment.jpg";
import Manage from "../assets/Managed App Sec.jpeg";
import Digital from "../assets/Digital Transformation .jpg";
import Consultancy from "../assets/Consultancy .jpg";
import { Container } from "@mui/material";


// import TechStack from "./TechStack";


const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "60em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "45em",
    },
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
    // paddingRight: "15em",
    marginBottom: "7em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "90rem",
      marginBottom: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
    },
  },
}));

const Software = (props) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const documentsAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const documentsAnimationJSX = (
    <Grid
      item
      style={{
        maxWidth: medium ? "20rem" : "inherit",
        marginBottom: smaller ? "1em" : "inherit",
      }}
      md
    >
      <Lottie
        options={documentsAnimationOptions}
        style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
      />
    </Grid>
  );
  const scaleAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleAnimationJSX = (
    <Grid
      item
      style={{
        maxWidth: medium ? "20rem" : "inherit",
        marginBottom: smaller ? "1em" : "inherit",
      }}
      md
    >
      <Lottie
        options={scaleAnimationOptions}
        style={{ maxWidth: 280, maxHeight: 260 }}
      />
    </Grid>
  );
  const automationAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationAnimationJSX = (
    <Grid
      item
      style={{
        maxWidth: medium ? "20rem" : "inherit",
        marginBottom: smaller ? "1em" : "inherit",
      }}
      md
    >
      <Lottie
        options={automationAnimationOptions}
        style={{ maxWidth: 280, maxHeight: 290 }}
      />
    </Grid>
  );
  const uxAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxAnimationJSX = (
    <Grid
      item
      style={{
        maxWidth: medium ? "20rem" : "inherit",
        marginBottom: smaller ? "1em" : "inherit",
      }}
      md
    >
      <Lottie
        options={uxAnimationOptions}
        style={{ maxWidth: 155, maxHeight: 310 }}
      />
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={medium ? "space-around" : "center"}
        className={classes.rowContainer}
        style={{
          marginTop: medium ? "1rem" : "2rem",
        }}
      >
        {!smaller && (<>
                  <Grid
            item
            className={classes.arrowContainer}
            style={{
              marginRight: medium ? "1rem" : "2.5em",
              marginLeft: medium ? "-1.5rem" : "-2.5em",
            }}
          >
            <IconButton
              className={classes.arrowIcons}
              component={Link}
              to="/services"
              onClick={() => {
                props.setValue(1);
                props.setSelected(null);
              }}
            >
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </>)}

       {/* part 1 */}

        <Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
 


<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}

<Container maxWidth="xl">
      <Box
        sx={{
          width: { xs: "100%", md: "60%" },
          marginLeft: { xs: 0, md: "0" },
          marginRight: "auto",
        }}
      >
        <Grid container direction="column" spacing={2}>
          {/* Heading */}
          <Grid item>
            <Typography
              variant="h6"
              align={smaller ? "center" : "left"}
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, fontWeight: 600 }}
            >
              a) Governance, Risk and Compliance (GRC):
            </Typography>
          </Grid>

          {/* Content */}
          <Grid item>
            <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              Governance, Risk and Compliance (GRC) is the strategic and secure approach to manage the security risks, to help strategize and enable their business objectives to be compliant with regulatory requirements. The key components of GRC are
            </Typography>

            <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              ❖ <strong>Governance:</strong> Includes establishing a framework for organization technology infrastructure, covering policies, procedures, roles and responsibilities 
            </Typography>

            <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              ❖ <strong>Risk Management:</strong> Identify, assess, manage vulnerabilities and threats that can compromise
            </Typography>

            <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              ❖ <strong>Compliance:</strong> Adhere to industry-identified mandatory regulations, applicable laws, and internal policies
            </Typography>

            <Typography
              variant="h6"
              align={smaller ? "center" : "left"}
              gutterBottom
              sx={{ fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" }, fontWeight: 600 }}
            >
              The benefits of GRC
            </Typography>

            <Typography variant="body2" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>• Reduced Risk</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>• Improved Compliance</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>• Security Robustness</Typography>
            <Typography variant="body2" sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>• Strategically aligning with business goals</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>

  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={GRC}
      alt="GRC"
      style={{ width: '100%', height: 'auto'}}
    />
  </Grid>
</Grid>

</Grid>




        


{/* part 2 */}
<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
  
<Box
  sx={{
    width: '60%',
    mx: 'auto', // center horizontally
  }}
>
  <Grid
    item
    xs={12}
    md={6}
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align={smaller ? 'center' : 'left'}
        gutterBottom
      >
        b) Cloud Assessment
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Cloud based business over the years is now the preferred modality of
        hosting applications these days, but as maturity is in the process to
        be achieved. We “Do More”.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Our Cloud Security Analysts perform complete, holistic mapping of
        your cloud architecture to prevent breaches, threats and ensure risks
        are mitigated.
      </Typography>
    </Grid>
  </Grid>
</Box>

  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={Cloud}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
  
</Grid>








{/* part 3 */}
<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
 <Box
  sx={{
    width: { xs: '100%', md: '60%' }, // full width on small screens, 60% on medium and up
    mx: 'auto', // center horizontally
  }}
>
  <Grid
    item
    xs={12}
    md={6}
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align={smaller ? 'center' : 'left'}
        gutterBottom
      >
        c) Vulnerability Assessment & Penetration Testing
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        Vulnerability assessment is not just identifying weaknesses within the system but for us to lay down the understanding on the way to strengthen the entire business ecosystem. Penetration Testing a critical part of cybersecurity, commonly referred as “Pen Test” is the simulated authorized challenge performed on a computer system to evaluate the security of the system and is a separate activity. Our Experienced ‘PenTest” engineers are skilled to perform;
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ “Blackbox Pen Test”
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ “GreyBox Pen Test”
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ “WhiteBox Pen Test”.
      </Typography>
    </Grid>
  </Grid>
</Box>
  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={VAPT}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto'}}
    />
  </Grid>
</Grid>



<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
  <Box
  sx={{
    width: { xs: '100%', md: '60%' },
    mx: 'auto',
    px: 2,
    py: 3,
    textAlign: 'left', // ensures all text is left-aligned
  }}
>
  <Grid
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align="left" // force heading alignment to left
        gutterBottom
      >
        d) Incident Response
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        Unfortunately, incidents do occur. When the incident occurs our preferred way to handle in such a way that minimal interruptions to work occur and recovery times are negligible. Our Incident Response team;
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Works closely with C-suite, Security, Technology and Legal and as needed HR teams.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Provide simplified written instructions, guidelines and maintain checklists to help build proactiveness to respond to a repeat incident.
      </Typography>
    </Grid>
  </Grid>
</Box>

  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={Incident}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
</Grid>






<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
  <Box
  sx={{
    width: { xs: '100%', md: '60%' }, // responsive width
    mx: 'auto', // center horizontally
    px: 2,
    py: 3,
    textAlign: 'left', // force all inner text to align left
  }}
>
  <Grid
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align="left"
        gutterBottom
      >
        e) Managed AppSec
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        We will do it “just for you“ as your Managed Application Security Service partner in business.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ To plan extended capability to do continuous monitoring
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Managing business risks 
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Promptly responding with necessary action.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}> 
        ❖ Security environment checks and perimeters
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Keep up-to-date with rules and compliances
      </Typography>
    </Grid>
  </Grid>
</Box>

  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={Managed}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto'}}
    />
  </Grid>
</Grid>








<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
  <Box
  sx={{
    width: { xs: '100%', md: '60%' }, // full width on small screens, 60% on medium and up
    mx: 'auto', // horizontal centering
    px: 2,
    py: 3,
    textAlign: 'left', // force text alignment
  }}
>
  <Grid
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align="left"
        gutterBottom
      >
        f) Consultancy & Advisory
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        As your consultant and advisor partner to help secure your business
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Test true capability of the system while working as the attacker and defender.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Project and demonstrate area of weaknesses and vulnerabilities
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Proactively do measures to prevent software applications from near ominous or distant threats 
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ List down potential security weakness to help develop security policies, rules and procedures.
      </Typography>
    </Grid>
  </Grid>
</Box>

  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={Consultancy}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto'}}
    />
  </Grid>
</Grid>








<Grid container spacing={4} alignItems="center">
  {/* LEFT SIDE - TEXT */}
 <Box
  sx={{
    width: { xs: '100%', md: '60%' },
    mx: 'auto',
    px: 2,
    py: 3,
    textAlign: 'left',
  }}
>
  <Grid
    container
    direction="column"
    spacing={1}
    className={classes.heading}
  >
    <Grid item>
      <Typography
        variant="h5"
        align="left"
        gutterBottom
      >
        g) Digital Transformation
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        New technologies, new CS languages, new requirements all lead to constant need for applications to be updated so risks and threats are outsmarted.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Our Approach is practical and Case Centric
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Manage Gaps and focus to Remove redundancies
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Aligns your orchestration and automation program 
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Focused to your specific business needs 
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Outline ways on utilizing optimal resources
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
        ❖ Scalable implementation methodologies 
      </Typography>
    </Grid>
  </Grid>
</Box>
  {/* RIGHT SIDE - IMAGE */}
  <Grid item xs={12} md={6}>
    <img
      src={Digital}
      alt="Incident Response"
      style={{ width: '100%', height: 'auto'}}
    />
  </Grid>
</Grid>
{smaller && (<>
        
</>)}

    
      </Grid>
       <Grid
      container
      direction={isSmall ? "column" : "row"}
      justifyContent="center"
      // alignItems="center"
      spacing={10}
      sx={{ mt:2, px: 2 }}
    >
      {/* Save Time */}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ textAlign: "center", maxWidth: "300px" }}
      >
        <img src={stopwatch} alt="Stopwatch Icon" width={80} />
        <Typography variant="h5" sx={{ mt: 2 }}>
          Save Time
        </Typography>
      </Grid>

      {/* Save Energy */}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ textAlign: "center", maxWidth: "300px" }}
      >
        <img src={lightbulb} alt="Lightbulb Icon" width={80} />
        <Typography variant="h5" sx={{ mt: 2 }}>
          Save Energy
        </Typography>
      </Grid>

      {/* Save Money */}
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        sx={{ textAlign: "center", maxWidth: "300px" }}
      >
        <img src={cash} alt="Cash Icon" width={80} />
        <Typography variant="h5" sx={{ mt: 2 }}>
          Save Money
        </Typography>
      </Grid>
    </Grid>



     {/* Scale */}
<Box
      component="section"
      sx={{
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      
    </Box>
   
    
     </Grid>
  );
};

export default Software;





























