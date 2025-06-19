import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "@mui/styles"; // if you still need legacy styling
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CallToAction from "./ui/CallToAction";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import consultation from "../assets/consultationIcon.svg";
import vision from "../assets/vision.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintainIcon.svg";
import iterate from "../assets/iterateIcon.svg";
import { motion } from "framer-motion";


const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: "7rem",
    paddingRight: "5em",
    marginBottom: "3em",
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
      marginTop: "1em",
      marginBottom: "1em",
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "1.5em",
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
    paddingRight: "5em",
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  processRowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingBottom: "10em",
    paddingTop: "3em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  imgContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("xl")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
  launchImgContainer: {
    maxWidth: "50em",
    [theme.breakpoints.down("xl")]: {
      textAlign: "right",
    },
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      paddingLeft: "15em",
      paddingRight: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  itemContainer: {
    maxWidth: "50em",
    marginLeft: "5em",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "50%",
      marginLeft: "4em",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "80%",
      marginLeft: 0,
      marginTop: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40rem",
      marginTop: "2.5rem",
      marginLeft: 0,
    },
  },
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const larger = useMediaQuery(theme.breakpoints.down("lg"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));

  const technologyAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const technologyAnimationJSX = (
    <Grid
      item
      align="center"
      style={{ maxWidth: smallest ? "80%" : "30em" }}
      lg
    >
      <Lottie
        style={{ maxWidth: smallest ? "80%" : "30em" }}
        options={technologyAnimationOptions}
      />
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h6" gutterBottom>
          The Revolution
        </Typography>
      </Grid>
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Grid container justifyContent="left" style={{ padding: "2rem" }}>
    <Grid
      container
      item
      xs={12}
      md={10}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={28}
    >
      {/* Text Section */}
      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        alignItems="flex-start"
        paddingLeft="5rem"
      >
        <div style={{ maxWidth: "28em", width: "100%" }}>
          <Typography variant="h6" gutterBottom>
            Vision
          </Typography>
          <Typography
  variant="body1"
  paragraph
  sx={{ textAlign: "justify", fontSize: "0.95rem" }}
>
  We will always deliver services that are professional and proactive,
  ensuring our clients receive solutions that are:
</Typography>

       <Typography variant="body1" paragraph sx={{ fontSize: "0.95rem" }}>
  ❖ Reliable
</Typography>
<Typography variant="body1" paragraph sx={{ fontSize: "0.95rem" }}>
  ❖ Knowledgeable
</Typography>
<Typography variant="body1" paragraph sx={{ fontSize: "0.95rem" }}>
  ❖ Pragmatic
</Typography>
<Typography variant="body1" paragraph sx={{ fontSize: "0.95rem" }}>
  ❖ Trusted
</Typography>

        </div>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        xs={12}
        md={6}
        container
        justifyContent="center"
      >
        <img
          src={vision}
          alt="Alberta Vision background"
          style={{ width: "100%", maxWidth: "25em" }}
        />
      </Grid>
    </Grid>
  </Grid>
</motion.div>



<Grid
  container
  direction="row"
  alignItems="flex-start"
  justifyContent="flex-start"
  className={classes.rowContainer}
  sx={{ px: { xs: 2, sm: 3 }, py: 4 }}
>
  {/* TEXT SECTION */}
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      textAlign: "left",
      pr: { xs: 0, md: 0,xl:0}, // space between text and animation
    }}
    className={classes.itemContainer}
  >
    <Typography variant="h6" gutterBottom>
      Technology
    </Typography>

    {[
      "In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.",
      "Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.",
      "Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.",
      "This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.",
      "Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.",
      "These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.",
      "This puts personalization in your pocket — faster, better, and more affordable than ever before.",
    ].map((paragraph, index) => (
      <Typography
        key={index}
        variant="body1"
        paragraph
        sx={{
          fontSize: "0.9rem",
          lineHeight: 1.6,
        }}
      >
        {paragraph}
      </Typography>
    ))}
  </Grid>

  {/* ANIMATION SECTION */}
  <Grid
    item
    xs={12}
    md={4}
    sx={{
      display: "flex",
      justifyContent: "flex-start", // align left
      alignItems: "flex-start",
      mt: { xs: 4, md: 0 },
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: 280, // Adjust width here
        height: "auto",
      }}
    >
      {technologyAnimationJSX}
    </Box>
  </Grid>
</Grid>



      
      <Grid item className={classes.heading} align="left">
        <Typography variant="h5">Process</Typography>
      </Grid>
      <Grid
      container
      alignItems="left"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#fff",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 },
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" gutterBottom>
            Consultation
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
         <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Our process begins the moment you realize you need a piece of
  technology for your business. Whether you already have an idea for
  where to start and what to do, or if you just know you want to
  step things up, our initial consultation will help you examine
  your business holistically to find the best solutions.
</Typography>

          <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Detailed notes will be taken on your requirements and constraints,
  while taking care to identify other potential areas for
  consideration.
</Typography>

          <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Cutting-edge advancements in machine learning like object
  detection and natural language processing allow computers to do
  things previously unimaginable, and our expertise and intuition
  will help usher you into this new future of possibilities.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={consultation}
          alt="handshake"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
      <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 },

          
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" ,} }}>
          <Typography variant="h5" gutterBottom>
            Mockup
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
        <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  After we settle on the best path forward and decide on a solution to pursue,
  details like the cost and timeline will be finalized.
</Typography>

          <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Then it’s time for us to start on your minimum viable product. That’s just a
  fancy term for a mockup, which doesn’t include colors, images, or any other
  polished design elements, but captures the essential layout structure and
  functionality.
</Typography>

         <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  This helps us understand and refine the solution itself before getting distracted by specifics and looks.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={mockup}
          alt="monitor with website mockup"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
      
      <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#fff",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 }, // shift text slightly to left
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5" gutterBottom>
            Design
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
          <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Using the mockups and notes taken during the consultation as guides,
  we will start ironing out what the final product will look like.
  This also involves using any brand material like fonts, colors, and
  logos to extend the experience you’re already familiar with.
</Typography>

          <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  No aspect is superfluous, and care will be taken with every decision.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={design}
          alt="paint brush leaving a stroke of paint"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
      
       <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#166EE9",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 0,
          ml: { md: -4, lg: -6 }, // shift text to the left
          
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left"} }}>
          <Typography variant="h5"  color="#fff" gutterBottom>
            Review
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
        <Typography
  variant="body1"
  sx={{ color: "#f8f8f3", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  A second round of review is essential to our goal of creating
  exactly what you want, exactly how you want it.
</Typography>

          <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  This time we’ll be going over the finalized designs in another fully
  interactive demonstration. Again this gives you an opportunity to
  tweak things and make sure we get everything right the first time.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={review}
          alt="magnifying glass"
          style={{
            width: "100%",
            maxWidth: "200px",
            height: "200px",
          }}
        />
      </Grid>
    </Grid>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#fff",
        color:"black",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section - 70% */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 }, // Shift text to left
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5" gutterBottom>
            Build
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
  {[
    "Here’s where we get down to business.",
    "Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.",
    "Each area is then developed in order of importance until ready to be connected to the next piece.",
    "Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.",
    "Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.",
    "Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.",
  ].map((text, i) => (
    <Typography
      key={i}
      variant="body1"
      sx={{
        color: "black",
        lineHeight: 1.4,
        mb: 1.2,
        fontSize: "0.95rem", // Added font size for consistency
      }}
      paragraph
    >
      {text}
    </Typography>
  ))}
</Grid>

      </Grid>

      {/* Image Section - 30% */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={build}
          alt="a crane machine with a building under construction"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
      <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#166EE9",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 0,
          ml: { md: -4, lg: -6 },
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5"  color="#fff" gutterBottom>
            Launch
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
         <Typography
  variant="body1"
  sx={{ color: "#f8f8f3", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  The moment we’ve all been waiting for.
</Typography>

         <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, fontSize: "0.95rem", mb: 1.2 }}
  paragraph
>
  When construction comes to a close you’re the first one to know.
  We’ll give our final demonstration to show off your shiny new
  software in the wild so you know exactly how it will look to your
  users.
</Typography>

        <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  When you say the word, we press the button and launch your project
  out to the public. We’re there to ensure everything goes to plan
  so you can start reaping the rewards of your technological
  investment immediately.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.launchImgContainer}
      >
        <img
          src={launch}
          alt="rocket on a launch pad"
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "250px",
          }}
        />
      </Grid>
    </Grid>
      <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#fff",
        py: 6,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 },
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5" gutterBottom>
            Maintain
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
         <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Our work doesn’t end there.
</Typography>

        <Typography
  variant="body1"
  sx={{ color: "black", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  After a successful launch we keep in close contact to listen to
  feedback and hear how the project is being received.
</Typography>

          <Typography
  variant="body1"
  sx={{
    color: "black",
    lineHeight: 1.4,
    mb: 1.2,
    fontSize: "0.95rem",
  }}
  paragraph
>
  From there on out we make sure your application is kept up to date
  and taking advantage of the best features and practices available.
  When new developments arise or new techniques are discovered in
  future projects, we will implement those advancements in your
  project as part of our routine maintenance.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={maintain }
          alt="a wrench and some screws"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "300px",
          }}
        />
      </Grid>
    </Grid>
       
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.processRowContainer}
      sx={{
        backgroundColor: "#166EE9",
        py: 4,
        px: 2,
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      {/* Text Section */}
      <Grid
        item
        container
        direction="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        md={8}
        xs={12}
        sx={{
          px: 2,
          ml: { md: -4, lg: -6 },
        }}
        className={classes.itemContainer}
      >
        <Grid item sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5" color="#fff" gutterBottom>
            Iterate
          </Typography>
        </Grid>
        <Grid item sx={{ textAlign: smallest ? "center" : "justify" }}>
         <Typography
  variant="body1"
  sx={{ color: "#f8f8f3", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  The cycle repeats whenever you come up with a new idea for
  extending your current project, or come up with a brand new system
  entirely.
</Typography>
<Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  By planning for future features and changes we can build and
  evolve your application over time. As new use cases and customer
  needs develop we can respond with continuous integration of new
  content.
</Typography>

        <Typography
  variant="body1"
  sx={{ color: "#fff", lineHeight: 1.4, mb: 1.2, fontSize: "0.95rem" }}
  paragraph
>
  Our iterative process will keep you current and competitive,
  allowing you to quickly implement changes instead of waiting
  months for a single update.
</Typography>

        </Grid>
      </Grid>

      {/* Image Section */}
      <Grid
        item
        md={4}
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 4, md: 0 },
          px: 2,
        }}
        className={classes.imgContainer}
      >
        <img
          src={iterate}
          alt="falling dominos"
          style={{
            width: "100%",
            maxWidth: "250px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
      <Grid item>
        
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default Revolution;
