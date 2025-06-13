
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  useTheme,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

import logo from "../../assets/logo.jpg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.75em",
    [theme.breakpoints.down("md")]: { marginBottom: "0.2em" },
    [theme.breakpoints.down("xs")]: { marginBottom: "0.2em" },
  },
  logoContainer: {
    padding: 0,
    marginLeft: "4em",
    marginTop: "1em",
  },
  logo: {
    height: "6.5em",
    [theme.breakpoints.down("md")]: { height: "4.9em" },
    [theme.breakpoints.down("xs")]: { height: "4em" },
  },
  tabContainer: { marginLeft: "auto" },
  tab: {
    minWidth: 9,
    marginLeft: "15px",
    color: "inherit",
    textTransform: "none",
    transition: "color 0.3s ease",
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25em",
      marginLeft: "30px",
    },
    "&:hover": {
      color: "#166ee9",
    },
  },
  button: {
    borderRadius: "10px",
    marginLeft: "12px",
    marginRight: "15px",
    padding: "0.4em",
    [theme.breakpoints.up("lg")]: {
      marginLeft: "30px",
      marginRight: "20px",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.orange,
    marginTop: "7px",
  },
  menuItem: {
    color: "black",
    opacity: 0.9,
    "&:hover": {
      backgroundColor: "#166ee9",
      color: "#fff",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    padding: 0,
    marginRight: "0.75em",
    "&:hover": { backgroundColor: "transparent" },
    [theme.breakpoints.down("xs")]: { marginRight: "0.5em" },
  },
  drawerIcon: {
    height: "1.75em",
    width: "1.75em",
    [theme.breakpoints.down("xs")]: {
      height: "1.5em",
      width: "1.5em",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItem: {
    opacity: 0.7,
    "&:hover": { opacity: 1 },
  },
  drawerItemSelected: { opacity: 1 },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  drawerItemEstimateSelected: {
    backgroundColor: theme.palette.secondary.dark,
    opacity: 1,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  accordian: {
    backgroundColor: theme.palette.common.orange,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": { margin: 0, borderBottom: 0 },
    "&::before": { backgroundColor: "rgba(0, 0, 0, 0)" },
  },
  accordianMenuDetail: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
  accordianSerivcesLink: {
    color: "inherit",
    textDecoration: "none",
  },
  accordianSummary: {
    backgroundColor: theme.palette.common.blue,
    "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
  },
  accordianSummarySelected: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
}));

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
};

const menuOptions = [
  { name: "Cyber Security", link: "/software", activeTabIndex: 1, activeMenuIndex: 0 },
  { name: "Software Development", link: "/websites", activeTabIndex: 1, activeMenuIndex: 2 },
];

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDrawerMenu, setOpenDrawerMenu] = useState(false);

  const handleMouseOver = useCallback((e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
    if (window.location.pathname === "/services") props.setSelected(null);
  }, [props]);

  const handleClose = () => setOpenMenu(false);
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenMenu(false);
    }
  };

  const handleMouseOverMenu = () => setOpenMenu(true);
  const handleClickMenu = (e, i) => props.setSelected(i);
  const handleCompanyLogo = () => props.setValue(0);
  const handleChange = (e, newValue) => props.setValue(newValue);
  const closeDrawerAll = () => {
    setOpenDrawer(false);
    setOpenDrawerMenu(false);
  };

  const routes = useMemo(() => [
    { label: "Home", link: "/", activeTabIndex: 0 },
    {
      label: "Services",
      link: "/services",
      activeTabIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariahaspopup: anchorEl ? "true" : undefined,
      mouseover: (event) => handleMouseOver(event),
      mouseleave: (event) => handleClose(event),
    },
    { label: "Revolution", link: "/revolution", activeTabIndex: 2 },
    { label: "About Us", link: "/about", activeTabIndex: 3 },
    { label: "Contact Us", link: "/contact", activeTabIndex: 4 },
  ], [anchorEl, handleMouseOver]);

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) =>
            route.label === "Services" ? (
              <Accordion
                key={route.activeTabIndex}
                classes={{ root: classes.accordian }}
                elevation={0}
                expanded={openDrawerMenu}
                onChange={() => setOpenDrawerMenu(!openDrawerMenu)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                  className={
                    props.value === 1
                      ? classes.accordianSummarySelected
                      : classes.accordianSummary
                  }
                >
                  <ListItemText
                    disableTypography
                    className={
                      route.activeTabIndex === props.value
                        ? classes.drawerItemSelected
                        : classes.drawerItem
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDrawerAll();
                      props.setSelected(null);
                      props.setValue(route.activeTabIndex);
                    }}
                  >
                    <Link to={route.link} className={classes.accordianSerivcesLink}>
                      {route.label}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails className={classes.accordianMenuDetail}>
                  <List disablePadding>
                    {menuOptions.map((route) => (
                      <ListItem
                        key={route.activeMenuIndex}
                        classes={{ selected: classes.drawerItemSelected, root: classes.drawerItem }}
                        divider
                        button
                        onClick={() => {
                          closeDrawerAll();
                          props.setSelected(route.activeMenuIndex);
                          props.setValue(route.activeTabIndex);
                        }}
                        component={Link}
                        to={route.link}
                        selected={
                          props.selected === route.activeMenuIndex &&
                          props.value === route.activeTabIndex
                        }
                      >
                        <ListItemText disableTypography>{route.name}</ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={route.activeTabIndex}
                classes={{ selected: classes.drawerItemSelected, root: classes.drawerItem }}
                divider
                button
                onClick={() => {
                  closeDrawerAll();
                  props.setValue(route.activeTabIndex);
                  props.setSelected(null);
                }}
                component={Link}
                to={route.link}
                selected={props.value === route.activeTabIndex}
              >
                <ListItemText disableTypography>{route.label}</ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            classes={{ root: classes.drawerItemEstimate }}
            className={
              props.value === routes.length
                ? classes.drawerItemEstimateSelected
                : classes.drawerItemEstimate
            }
            divider
            button
            onClick={() => {
              closeDrawerAll();
              props.setSelected(null);
              props.setValue(routes.length);
            }}
            component={Link}
            to="/estimate"
          >
            <ListItemText disableTypography>Get Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
          setOpenDrawerMenu(false);
        }}
        className={classes.drawerIconContainer}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={props.value <= routes.length - 1 ? props.value : false}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route) => (
          <Tab
            key={route.activeTabIndex}
            label={route.label}
            className={classes.tab}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariahaspopup}
            onMouseOver={route.mouseover}
            onMouseLeave={route.mouseleave}
          />
        ))}
      </Tabs>
      <Button
        onClick={() => props.setValue(5)}
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Get Estimate
      </Button>
      <Popper open={openMenu} anchorEl={anchorEl} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
            <Paper elevation={0} classes={{ root: classes.menu }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseLeave={handleClose}
                  onMouseOver={handleMouseOverMenu}
                  autoFocusItem={false}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {menuOptions.map((option, i) => (
                    <MenuItem
                      key={i}
                      classes={{ root: classes.menuItem, selected: classes.drawerItemSelected }}
                      component={Link}
                      to={option.link}
                      onClick={(e) => {
                        handleClickMenu(e, i);
                        handleClose();
                        props.setValue(1);
                      }}
                      selected={i === props.selected && props.value === 1}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      if (window.location.pathname === route.link) {
        if (props.value !== route.activeTabIndex) {
          props.setValue(route.activeTabIndex);
          if (
            route.activeMenuIndex >= 0 &&
            props.selected !== route.activeMenuIndex
          ) {
            props.setSelected(route.activeMenuIndex);
          } else {
            props.setSelected(null);
          }
        }
      }
    });
    if (window.location.pathname === "/estimate") props.setValue(5);
  }, [props.value, props.selected, routes, props]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={handleCompanyLogo}
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {smaller ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
