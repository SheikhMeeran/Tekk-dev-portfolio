import React from "react";
import { Link } from "react-router-dom";
import { Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import FooterAdornment from "../../svgToReact/FooterAdornment";
import MobileFooterAdornment from "../../svgToReact/MobileFooterAdornment";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

import {
  FooterContainer,
  MainContainer,
  FooterLink,
  Adornment,
  MediaIcon,
  SocialContainer,
} from "./Footer.styles"; // <-- Path to styles

const Footer = ({ setValue, setSelected }) => {
  const theme = useTheme();
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavClick = (value, selected) => {
    setValue?.(value);
    setSelected?.(selected);
  };

  const nav = [
    {
      label: "Home",
      to: "/",
      value: 0,
      hiddenBelow: 1450,
    },
    {
      label: "Services",
      to: "/services",
      value: 1,
    },
    {
      label: "Cyber Security",
      to: "/software",
      value: 1,
      selected: 0,
    },
    {
      label: "Web Development",
      to: "/websites",
      value: 1,
      selected: 2,
    },
  ];

  return (
    <FooterContainer container>
      {!smaller && (
        <MainContainer container justifyContent="center" spacing={medium ? 5 : 10}>
          {nav.map((item, idx) => {
            const shouldHide = item.hiddenBelow && window.innerWidth < item.hiddenBelow;
            return (
              !shouldHide && (
                <Grid item key={idx}>
                  <FooterLink
                    component={Link}
                    to={item.to}
                    onClick={() => handleNavClick(item.value, item.selected)}
                  >
                    {item.label}
                  </FooterLink>
                </Grid>
              )
            );
          })}
          {/* Repeat for Revolution, About Us, Contact Us etc. as needed */}
        </MainContainer>
      )}

      {!smaller ? (
        <Adornment>
          <FooterAdornment />
        </Adornment>
      ) : (
        <Adornment>
          <MobileFooterAdornment />
        </Adornment>
      )}

      <Grid container direction="column" alignItems="center">
        <SocialContainer item container justifyContent={smaller ? "center" : "flex-end"}>
          {[facebook, instagram, twitter].map((icon, i) => (
            <Grid item key={i} component="a" href="https://example.com" target="_blank" rel="noopener noreferrer">
              <MediaIcon src={icon} alt={`${icon}-icon`} />
            </Grid>
          ))}
        </SocialContainer>

        <Grid
          item
          sx={{
            backgroundColor: "gray",
            width: "100%",
            textAlign: "center",
            py: 1,
          }}
        >
          <Typography variant="body2" color="#fff">
            © {new Date().getFullYear()} Copyrights by TEKKDEV
          </Typography>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
