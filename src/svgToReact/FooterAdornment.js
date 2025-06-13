import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";

const FooterAdornment = () => {
  const containerStyle = {
    backgroundColor: "#305694",        
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    height: "100%",
    padding: "2rem 2rem",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "bold",
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const itemStyle = {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "1rem",
    lineHeight: "1.4",
  };

  const iconStyle = {
    marginRight: "0.75rem",
    color: "white",
    fontSize: "1.4rem",
    marginTop: "0.2rem", 
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <EmailIcon style={iconStyle} />
        <span>Info@tekkdev.com</span>
      </div>
      <div style={itemStyle}>
        <LocationOnIcon style={iconStyle} />
        <span>
          Plot 22, Block E2,<br />
          Block E 2, Gulberg III,<br />
          Lahore, Pakistan
        </span>
      </div>
      <div style={itemStyle}>
        <PhoneIcon style={iconStyle} />
        <span>+92 (42) 3577-4258</span>
      </div>

    </div>
  );
};

export default FooterAdornment;
