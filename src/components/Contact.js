import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
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
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import paperAirplane from "../assets/send.svg";
import background from "../assets/background.jpg";
import background1 from "../assets/background1.jpeg";

const backgroundImages = [background, background1];

const Contact = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [bgIndex, setBgIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
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

    const templateParams = {
      name,
      email,
      phone,
      message,
    };

    emailjs
      .send(
        // "service_k396mqw",
        "service_gtxju0u",
        // "template_6j9gsog",
        "template_627092p",
        templateParams,
        // "cfvRGxo-iqc-r3cVg"
        "AaS_If9vy77wGqVZO"
      )
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
      <img src={paperAirplane} alt="send icon" style={{ marginLeft: 8 }} />
    </>
  );

  const focusRedSx = {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CD5C5C",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black",
    },
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 160px)",
        pt: { xs: 12, sm: 14 },
        pb: { xs: 6, sm: 8 },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
          zIndex: -1,
          backgroundImage: `url(${backgroundImages[bgIndex]})`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: "relative",
          background: "rgba(255, 255, 255, 0.9)",
          padding: isSmall ? "1.5em" : "3em",
          borderRadius: "12px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.3)",
          maxWidth: "500px",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Typography variant={isSmall ? "h5" : "h4"} align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontSize: isSmall ? "0.9rem" : "1rem" }}
        >
          Thank you for contacting us. Our authorized representative will contact you shortly.
        </Typography>

        <Grid container spacing={2} direction="column" sx={{ mt: 2 }}>
          <Grid item>
            <TextField
              fullWidth
              label="Name"
              value={name}
              required
              onChange={handleChange(setName)}
              variant="outlined"
              size={isSmall ? "small" : "medium"}
              sx={focusRedSx}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              label="Email"
              value={email}
              required
              onChange={handleChange(setEmail)}
              variant="outlined"
              type="email"
              error={email.length > 0 && !isEmailValid}
              helperText={
                email.length > 0 && !isEmailValid ? "Enter a valid email (e.g., example@mail.com)" : ""
              }
              size={isSmall ? "small" : "medium"}
              sx={focusRedSx}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              label="Phone"
              value={phone}
              required
              onChange={(e) => {
                const val = e.target.value;
                if (/^\d*$/.test(val)) setPhone(val);
              }}
              variant="outlined"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              size={isSmall ? "small" : "medium"}
              sx={focusRedSx}
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              label="Message"
              multiline
              required
              rows={7}
              value={message}
              onChange={handleChange(setMessage)}
              variant="outlined"
              size={isSmall ? "small" : "medium"}
              sx={focusRedSx}
            />
          </Grid>

          <Grid item>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
              onClick={() => setOpen(true)}
              disabled={!name || !email || !isEmailValid || !phone || !message}
            >
              {sendButtonJSX("Send Message")}
            </Button>
          </Grid>
        </Grid>
      </motion.div>

      <Dialog open={open} onClose={() => setOpen(false)} fullScreen={isSmall}>
        <DialogTitle
          sx={{
            fontSize: isSmall ? "1.2rem" : "1.5rem",
            paddingX: isSmall ? 2 : 3,
            paddingTop: isSmall ? 2 : 6,
          }}
        >
          Confirm Message
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            maxHeight: "80vh",
            overflowY: "auto",
            paddingBottom: 2,
            paddingTop: 1,
            [theme.breakpoints.down("sm")]: {
              paddingX: 1,
            },
          }}
        >
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={handleChange(setName)}
                variant="outlined"
                sx={focusRedSx}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={handleChange(setEmail)}
                variant="outlined"
                type="email"
                error={email.length > 0 && !isEmailValid}
                helperText={
                  email.length > 0 && !isEmailValid ? "Enter a valid email (e.g., example@mail.com)" : ""
                }
                sx={focusRedSx}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Phone"
                fullWidth
                value={phone}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d*$/.test(val)) setPhone(val);
                }}
                variant="outlined"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                sx={focusRedSx}
              />
            </Grid>

            <Grid item>
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={handleChange(setMessage)}
                variant="outlined"
                sx={focusRedSx}
              />
            </Grid>

            <Grid item container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSend}
                  variant="contained"
                  color="primary"
                  disabled={!name || !email || !isEmailValid || !phone || !message}
                >
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
    </Box>
  );
};

export default Contact;
