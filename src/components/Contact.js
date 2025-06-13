import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles"; // if you still need legacy styling
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import CallToAction from "../components/ui/CallToAction.js";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import paperAirplane from "../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingLeft: "2em",
    paddingRight: "2em",
    marginBottom: "2em",
    marginTop: "2em",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  confirmationModalHeading: {
    paddingLeft: "2em",
    paddingRight: "2em",
    marginTop: "2em",
    paddingTop: 0,
    paddingBottom: 0,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginLeft: "2em",
      marginRight: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0,
      marginRight: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  sendMessageButton: {
    ...theme.typography.learnButton,
    backgroundColor: theme.palette.common.orange,
    height: "45px",
    borderRadius: "5px",
    marginTop: "1em",
  },
  message: {
    border: "1px solid black",
    marginTop: "2em",
    borderRadius: "5px",
  },
  confirmationButton: {
    verticalAlign: "bottom",
  },
  input: {
    border: "1px solid black",
    borderRadius: 4,
    padding: "10px",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallest = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [nameHelperText, setNameHelperText] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelperText, setEmailHelperText] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelperText, setPhoneHelperText] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });
  const [open, setOpen] = useState(false);

  const onFieldInputChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        if (event.target.value !== "") {
          valid = /^[a-z ,.'-]+$/i.test(event.target.value);
          setNameHelperText(valid ? "" : "Cannot include numbers or symbols");
        } else {
          setNameHelperText("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (event.target.value !== "") {
          valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
          setEmailHelperText(valid ? "" : "Invalid email.");
        } else {
          setEmailHelperText("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        if (event.target.value !== "") {
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
          setPhoneHelperText(valid ? "" : "Invalid phone number");
        } else {
          setPhoneHelperText("");
        }
        break;
      default:
        break;
    }
  };

  const sendButtonJSX = (text) => (
    <>
      {text}
      <img
        style={{ marginLeft: 7.5 }}
        src={paperAirplane}
        alt="paper airplane icon"
      />
    </>
  );

  const onConfirm = () => {
    setLoading(true);
    axios
      .get("https://us-central1-beri-tech.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
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
          message: "Something went wrong! Please try again.",
          backgroundColor: "#FF3232",
        });
      });
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" alignItems="center" lg={4}>
        <Grid item className={classes.heading}>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="subtitle1">
            Thank you for contacting us. We’ll reach out shortly.
          </Typography>
        </Grid>

        {/* Phone and Email Centered */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          style={{ marginTop: "1em", gap: "1em" }}
        >
          <Grid item container justifyContent="center" alignItems="center" style={{ width: "auto" }}>
            <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
            <Typography variant="body1">
              <a
                href="tel:+924235774258"
                style={{ color: "inherit", textDecoration: "none" }}
                onMouseOver={(e) => (e.target.style.color = "#1976d2")}
                onMouseOut={(e) => (e.target.style.color = "inherit")}
              >
                +92 (42) 3577-4258
              </a>
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" alignItems="center" style={{ width: "auto" }}>
            <img src={emailIcon} alt="email" style={{ marginRight: "0.5em" }} />
            <Typography variant="body1">
              <a
                href="mailto:Info@tekkdev.com"
                style={{ color: "inherit", textDecoration: "none" }}
                onMouseOver={(e) => (e.target.style.color = "#1976d2")}
                onMouseOut={(e) => (e.target.style.color = "inherit")}
              >
                Info@tekkdev.com
              </a>
            </Typography>
          </Grid>
        </Grid>

        {/* Contact Form */}
        <Grid item container direction="column" alignItems="center" style={{ maxWidth: "25em", marginTop: "2em" }}>
          <TextField
            label="Name"
            id="name"
            error={nameHelperText.length !== 0}
            helperText={nameHelperText}
            value={name}
            onChange={onFieldInputChange}
            fullWidth
            InputProps={{ className: classes.input }}
            style={{ marginBottom: "1em" }}
          />
          <TextField
            label="Email"
            id="email"
            error={emailHelperText.length !== 0}
            helperText={emailHelperText}
            value={email}
            onChange={onFieldInputChange}
            fullWidth
            InputProps={{ className: classes.input }}
            style={{ marginBottom: "1em" }}
          />
          <TextField
            label="Phone"
            id="phone"
            error={phoneHelperText.length !== 0}
            helperText={phoneHelperText}
            value={phone}
            onChange={onFieldInputChange}
            fullWidth
            InputProps={{ className: classes.input }}
            style={{ marginBottom: "1em" }}
          />
          <TextField
            id="message"
            placeholder="Tell us about your project..."
            multiline
            rows={6}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.message}
            InputProps={{ disableUnderline: true }}
          />
          <Button
            className={classes.sendMessageButton}
            variant="contained"
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              phone.length === 0 ||
              message.length === 0 ||
              nameHelperText ||
              emailHelperText ||
              phoneHelperText
            }
            onClick={() => setOpen(true)}
          >
            {sendButtonJSX("Send Message")}
          </Button>
        </Grid>
      </Grid>

      {/* Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} fullScreen={smallest} style={{ zIndex: 1302 }}>
        <DialogTitle className={classes.confirmationModalHeading} disableTypography>
          <Typography variant="h4">Confirm Message</Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column" style={{ padding: "2rem", width: "100%" }}>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={onFieldInputChange}
              fullWidth
              InputProps={{ className: classes.input }}
              style={{ marginBottom: "1em" }}
            />
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={onFieldInputChange}
              fullWidth
              InputProps={{ className: classes.input }}
              style={{ marginBottom: "1em" }}
            />
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={onFieldInputChange}
              fullWidth
              InputProps={{ className: classes.input }}
              style={{ marginBottom: "1em" }}
            />
            <TextField
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
              multiline
              rows={6}
              className={classes.message}
              InputProps={{ disableUnderline: true }}
            />
            <Grid item container justifyContent="flex-end" style={{ marginTop: "1em" }}>
              <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
              <Button onClick={onConfirm} color="primary" variant="contained" style={{ marginLeft: "1em" }}>
                {loading ? <CircularProgress size={20} /> : sendButtonJSX("Send")}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={7000}
      />

      {/* CTA */}
      <Grid item container direction="column" lg={8}>
        <CallToAction setValue={props.setValue} setSelected={props.setSelected} grid={{ size: "lg", noc: 8 }} />
      </Grid>
    </Grid>
  );
};

export default Contact;
