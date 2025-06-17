import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  MenuItem,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuList,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  Box,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.jpg";

const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "1.75em",
  [theme.breakpoints.down("md")]: { marginBottom: "0.2em" },
}));

const Logo = styled("img")(({ theme }) => ({
  height: "6.5em",
  [theme.breakpoints.down("md")]: { height: "4.9em" },
  [theme.breakpoints.down("sm")]: { height: "4em" },
}));

const TabStyled = styled(Tab)(({ theme }) => ({
  minWidth: 9,
  textTransform: "none",
  fontWeight: 600,
  fontSize: "1rem",
  color: "#000",
  "&:hover": {
    color: theme.palette.primary.main,
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: 700,
  },
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  borderRadius: "10px",
  padding: "0.4em 1em",
  textTransform: "none",
  fontWeight: 600,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
  backgroundColor: theme.palette.common.white,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
}));

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
};

const menuOptions = [
  {
    name: "Cyber Security",
    link: "/software",
    activeTabIndex: 1,
    activeMenuIndex: 0,
  },
  {
    name: "Software Development",
    link: "/websites",
    activeTabIndex: 1,
    activeMenuIndex: 1,
  },
];

const Header = ({ value, setValue, selected, setSelected }) => {
  const theme = useTheme();
  const smaller = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMouseOver = useCallback(
    (e) => {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
      if (window.location.pathname === "/services") setSelected(null);
    },
    [setSelected]
  );

  const handleClose = () => setOpenMenu(false);

  const routes = useMemo(
    () => [
      { label: "Home", link: "/", activeTabIndex: 0 },
      {
        label: "Services",
        link: "/services",
        activeTabIndex: 1,
        mouseover: handleMouseOver,
      },
      { label: "Revolution", link: "/revolution", activeTabIndex: 2 },
      { label: "About Us", link: "/about", activeTabIndex: 3 },
      { label: "Contact Us", link: "/contact", activeTabIndex: 4 },
    ],
    [handleMouseOver]
  );

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      if (
        window.location.pathname === route.link &&
        value !== route.activeTabIndex
      ) {
        setValue(route.activeTabIndex);
        if (typeof route.activeMenuIndex === "number") {
          setSelected(route.activeMenuIndex);
        } else {
          setSelected(null);
        }
      }
    });
    if (window.location.pathname === "/estimate") setValue(5);
  }, [value, selected, routes, setValue, setSelected]);

  const handleCompanyLogo = () => setValue(0);
  const handleChange = (e, newValue) => setValue(newValue);

  const DrawerMenu = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        anchor="right"
      >
        <ToolbarMargin />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.activeTabIndex}
              button
              component={Link}
              to={route.link}
              selected={value === route.activeTabIndex}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeTabIndex);
                setSelected(null);
              }}
            >
              <ListItemText primary={route.label} />
            </ListItem>
          ))}
          <ListItem
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            onClick={() => {
              setOpenDrawer(false);
              setSelected(null);
              setValue(5);
            }}
          >
            <ListItemText primary="Get Estimate" />
          </ListItem>
        </List>
      </SwipeableDrawer>

      <Box sx={{ ml: "auto", display: { xs: "block", md: "none" } }}>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );

  const TabsMenu = (
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 2 }}>
      <Tabs
        value={value <= routes.length - 1 ? value : false}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {routes.map((route) => (
          <TabStyled
            key={route.activeTabIndex}
            label={route.label}
            component={Link}
            to={route.link}
            onMouseOver={route.mouseover}
            value={route.activeTabIndex}
          />
        ))}
      </Tabs>

      <EstimateButton
        onClick={() => setValue(5)}
        component={Link}
        to="/estimate"
        variant="contained"
      >
        Get Estimate
      </EstimateButton>

      <Popper open={openMenu} anchorEl={anchorEl} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                >
                  {menuOptions.map((option, i) => {
                    const isSelected =
                      selected === i && value === option.activeTabIndex;
                    return (
                      <MenuItem
                        key={i}
                        component={Link}
                        to={option.link}
                        selected={isSelected}
                        onClick={() => {
                          setSelected(i);
                          setValue(option.activeTabIndex);
                          handleClose();
                        }}
                        sx={{
                          fontWeight: 600,
                          fontSize: "0.9rem",
                          backgroundColor: isSelected
                            ? theme.palette.primary.main
                            : "inherit",
                          color: isSelected
                            ? "#ffffff"
                            : theme.palette.text.primary,
                          "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            color: "#ffffff",
                            fontWeight: 600,
                          },
                        }}
                      >
                        {option.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <AppBarStyled position="fixed" elevation={0}>
          <Toolbar disableGutters sx={{ px: { xs: 1, sm: 2, md: 4 } }}>
            <Button onClick={handleCompanyLogo} component={Link} to="/">
              <Logo src={logo} alt="logo" />
            </Button>
            {smaller ? DrawerMenu : TabsMenu}
          </Toolbar>
        </AppBarStyled>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;
