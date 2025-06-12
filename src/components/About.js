import React from "react";
import { makeStyles } from "@mui/styles"; // still OK for v5 legacy users
import { useTheme } from "@mui/material/styles"; // CORRECT place for useTheme
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import CallToAction from "../components/ui/CallToAction.js";
import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpg"

const useStyles = makeStyles((theme) => ({
  statement: {
    fontStyle: "bold",
    fontWeight: 400,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.5,
  },
  heading: {
    paddingLeft: "5em",
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
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    marginBottom: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
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
  teamCardContainer: {
    maxWidth: "30em",
    marginLeft: "2.5em",
    marginRight: "2.5em",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "30%",
      marginLeft: "2em",
      marginRight: "2em",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "60%",
      marginLeft: 0,
      marginRight: 0,
      marginTop: "2.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
      marginTop: "2.5rem",
      marginLeft: 0,
    },
  },
  avatar: {
    height: 250,
    width: 250,
    [theme.breakpoints.down("xs")]: {
      height: "15rem",
      width: "15rem",
    },
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));
  const larger = useMediaQuery(theme.breakpoints.down("lg"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  const historyJSX = (
    <Grid
      item
      align="center"
      style={{ maxWidth: smallest ? "80%" : "30em" }}
      lg
    >
      <img
        src={history}
        alt="an open book with a feather pen"
        style={{ maxWidth: smallest ? "80%" : "30em" }}
      />
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography variant="h4" align="center" className={classes.statement}>
         TekkDev, is a software development and cybersecurity company established as part of joint venture of Computer Marketing Company (CMC) and GCS Pvt Ltd. CMC and GCS are both leading companies in the field of Information & Communication Technology (ICT) in Pakistan where GCS has expanded operations internationally in Nigeria, South Africa, Turkey, UAE in the last few years. 

TekkDev, currently established operations in Pakistan, engages in designing of bespoke customized software solutions in private sector on latest technology stack. TekkDev solution design is on customers requirements to upgrade existing software through intelligent components with reduced development effort and on modular or microservices architecture. TekkDev has a range of seasoned subject matter experts  for Healthcare vertical, to design, develop implement a seamless, end to end software solution or provide a world class patient centric hospital systems. 

TekkDev Cybersecurity professionals trained locally and internationally with years of established experience of building secure infrastructure for a large size national and multinational organizations. They excel in designing of the governance framework,  performing vulnerability assessment and penetration testing, incident reporting, performing cloud assessments to design a scalable secure cloud based architecture, help client achieve ISO27001 and scalaing up the organiztion capability through inducting of NIST framework. TekkDev Cybersecurity consultants have an established track record in helping organization’s evaluate and improve on designing and implementing of security controls and policies.

        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.rowContainer}
      >
        {medium ? historyJSX : null}
        <Grid
          item
          container
          direction="column"
          alignItems={smaller ? "center" : "flex-start"}
          style={{
            marginLeft: 0,
            marginRight: medium ? 0 : larger ? "2.5em" : "5em",
          }}
          className={classes.itemContainer}
          lg
        >
          <Grid item align={smaller ? "center" : "left"}>
            <Typography variant="h4" gutterBottom>
           2.	Mission            </Typography>
          </Grid>
          <Grid item style={{ textAlign: smallest ? "center" : "justify" }}>
            <Typography variant="body1" paragraph>
TekkDev strives delivering quality security  assessment & consulting by            </Typography>
            <Typography variant="body1" paragraph>
             ✔. proactive security analysis
            </Typography>
            <Typography variant="body1" paragraph>
             ✔.	Instilling security awareness
            </Typography>
            <Typography variant="body1" paragraph>
            ✔. Recommending and developing robust  security architectures for resilient system  
            </Typography>
            
          </Grid>

        </Grid>

        
        
        {medium ? null : historyJSX}

      </Grid>
      <Grid item className={classes.heading} align="center">
        <Typography variant="h3">Team</Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        style={{ marginTop: 0 }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          className={classes.teamCardContainer}
          lg
        >
          <Grid item align="center">
            <Avatar
              src={founder2}
              className={classes.avatar}
              alt="founder's headshot"
            />
          </Grid>
          <Grid item style={{ marginTop: "2rem", textAlign: "center" }}>
            <Typography variant="h4">Umer Azhar</Typography>
            <Typography variant="caption" gutterBottom>
              HOD
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "100%",
              marginTop: "1.5rem",
              textAlign: smallest ? "center " : "justify",
            }}
          >
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.teamCardContainer}
          lg
        >
          <Grid item align="center">
            <Avatar
              src={founder}
              className={classes.avatar}
              alt="founder's headshot"
            />
          </Grid>
          <Grid item style={{ marginTop: "2rem", textAlign: "center" }}>
            <Typography variant="h4">Waleed Ijaz</Typography>
            <Typography variant="caption" gutterBottom>
              Full Stack Developer
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "100%",
              marginTop: "1.5rem",
              textAlign: smallest ? "center " : "justify",
            }}
          >
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          className={classes.teamCardContainer}
          lg
        >
          <Grid item align="center">
            <Avatar
              src={founder3}
              className={classes.avatar}
              alt="founder's headshot"
            />
          </Grid>
          <Grid item style={{ marginTop: "2rem", textAlign: "center" }}>
            <Typography variant="h4">Nofil Iqbal</Typography>
            <Typography variant="caption" gutterBottom>
              Frontend Developer
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "100%",
              marginTop: "1.5rem",
              textAlign: smallest ? "center " : "justify",
            }}
          >
            <Typography variant="body1" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body1" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* Call to Action Block */}
        {/* HINT: a background image can be set directly on the Grid Container
                as className Prop and then we dont need to set the inner container with
                absolute positioning
            */}
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Grid>
    </Grid>
  );
};

export default About;



