import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Grid,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  CircularProgress,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import paperAirplane from "../assets/send.svg";
import background from "../assets/background.jpg";
import background1 from "../assets/background1.jpeg";

const backgroundImages = [background, background1];

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: "calc(100vh - 160px)", // Adjust for fixed header + footer
    paddingTop: "100px", // Same as header height
    paddingBottom: "60px", // Same as footer height
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
    zIndex: -1,
  },
  content: {
    position: "relative",
    background: "rgba(255, 255, 255, 0.9)",
    padding: "3em",
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
    maxWidth: "500px",
    width: "90%",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "1em",
  },
  input: {
    border: "1px solid black",
    borderRadius: 4,
    padding: "10px",
  },
  message: {
    border: "1px solid black",
    marginTop: "1em",
    borderRadius: 4,
  },
  sendMessageButton: {
    marginTop: "1em",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));

  const [bgIndex, setBgIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleSend = () => {
    setLoading(true);
    axios
      .get("https://us-central1-beri-tech.cloudfunctions.net/sendMail", {
        params: { name, email, phone, message },
      })
      .then(() => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch(() => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong!",
          backgroundColor: "#FF3232",
        });
      });
  };

  const sendButtonJSX = (text) => (
    <>
      {text}
      <img src={paperAirplane} alt="paper airplane icon" style={{ marginLeft: 8 }} />
    </>
  );

  return (
    <div className={classes.root}>
      <div
        className={classes.background}
        style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
      />

      {/* Slide-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={classes.content}
      >
        <Typography variant="h4" className={classes.heading}>Contact Us</Typography>
        <Typography variant="subtitle1" align="center">
          Thank you for contacting us. Our authorized representative will contact you shortly.
        </Typography>

        <Grid container spacing={2} direction="column" style={{ marginTop: "1em" }}>
          <Grid item>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={handleChange(setName)}
              InputProps={{ className: classes.input }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={handleChange(setEmail)}
              InputProps={{ className: classes.input }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              fullWidth
              value={phone}
              onChange={handleChange(setPhone)}
              InputProps={{ className: classes.input }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Message"
              multiline
              rows={5}
              fullWidth
              value={message}
              onChange={handleChange(setMessage)}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              variant="contained"
              className={classes.sendMessageButton}
              onClick={() => setOpen(true)}
              disabled={!name || !email || !phone || !message}
            >
              {sendButtonJSX("Send Message")}
            </Button>
          </Grid>
        </Grid>
      </motion.div>

      <Dialog open={open} onClose={() => setOpen(false)} fullScreen={smallest}>
        <DialogTitle>Confirm Message</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            <Grid item><TextField label="Name" value={name} fullWidth onChange={handleChange(setName)} /></Grid>
            <Grid item><TextField label="Email" value={email} fullWidth onChange={handleChange(setEmail)} /></Grid>
            <Grid item><TextField label="Phone" value={phone} fullWidth onChange={handleChange(setPhone)} /></Grid>
            <Grid item><TextField label="Message" value={message} multiline rows={4} fullWidth onChange={handleChange(setMessage)} /></Grid>
            <Grid item container justifyContent="flex-end" spacing={2}>
              <Grid item><Button onClick={() => setOpen(false)}>Cancel</Button></Grid>
              <Grid item>
                <Button onClick={handleSend} variant="contained" color="primary">
                  {loading ? <CircularProgress size={20} /> : sendButtonJSX("Send")}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={7000}
      />
    </div>
  );
};

export default Contact;
