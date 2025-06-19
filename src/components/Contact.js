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
      <img src={paperAirplane} alt="send icon" style={{ marginLeft: 8 }} />
    </>
  );

  // ✅ Focus style
  const focusRedSx = {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CD5C5C	",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "black",
    },
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "calc(100vh - 160px)",
        pt: { xs: 8, sm: 10 },
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
          {[{ label: "Name", val: name, fn: setName },
            { label: "Email", val: email, fn: setEmail },
            { label: "Phone", val: phone, fn: setPhone },
          ].map((field, i) => (
            <Grid item key={i}>
              <TextField
                fullWidth
                label={field.label}
                value={field.val}
                required
                onChange={handleChange(field.fn)}
                variant="outlined"
                size={isSmall ? "small" : "medium"}
                sx={focusRedSx}
              />
            </Grid>
          ))}

          <Grid item>
            <TextField
              fullWidth
              label="Message"
              multiline
              required
              rows={5}
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
              disabled={!name || !email || !phone || !message}
            >
              {sendButtonJSX("Send Message")}
            </Button>
          </Grid>
        </Grid>
      </motion.div>

      <Dialog open={open} onClose={() => setOpen(false)} fullScreen={isSmall}>
        <DialogTitle>Confirm Message</DialogTitle>
        <DialogContent>
          <Grid container direction="column" spacing={2}>
            {[{ label: "Name", val: name, fn: setName },
              { label: "Email", val: email, fn: setEmail },
              { label: "Phone", val: phone, fn: setPhone },
              { label: "Message", val: message, fn: setMessage, multiline: true, rows: 4 },
            ].map((field, i) => (
              <Grid item key={i}>
                <TextField
                  label={field.label}
                  fullWidth
                  value={field.val}
                  onChange={handleChange(field.fn)}
                  variant="outlined"
                  multiline={field.multiline}
                  rows={field.rows}
                  sx={focusRedSx}
                />
              </Grid>
            ))}

            <Grid item container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleSend}
                  variant="contained"
                  color="primary"
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




