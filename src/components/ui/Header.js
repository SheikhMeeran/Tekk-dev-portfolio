import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
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
}));

const Logo = styled("img")(() => ({
  height: "3.5em",
  width: "auto",
}));

const TabStyled = styled(Tab)(() => ({
  minWidth: 10,
  textTransform: "none",
  fontSize: "0.7rem",
  fontWeight: 800,
  color: "#000",
  padding: "0.5rem 1rem",
  "&:hover": {
    color: "#000080",
  },
  "&.Mui-selected": {
    color: "#1976d2",
    fontWeight: 600,
  },
}));

const EstimateButton = styled(Button)(() => ({
  borderRadius: "10px",
  padding: "0.4em 1em",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "0.9rem",
  backgroundColor: "#1976d2",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#115293",
  },
}));

const AppBarStyled = styled(AppBar)(() => ({
  zIndex: 1301,
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  padding: "0 16px",
}));

const ElevationScroll = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  return React.cloneElement(children, { elevation: trigger ? 4 : 0 });
};

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const location = useLocation();

  const [value, setValue] = useState(0);
  const [homeAnchor, setHomeAnchor] = useState(null);
  const [openHomeMenu, setOpenHomeMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleHomeHover = useCallback((e) => {
    setHomeAnchor(e.currentTarget);
    setOpenHomeMenu(true);
  }, []);

  const handleMenuClose = () => {
    setOpenHomeMenu(false);
  };

  const routes = useMemo(
    () => [
      {
        label: "Home",
        link: "/",
        activeTabIndex: 0,
        mouseover: handleHomeHover,
      },
      { label: "Services", link: "/services", activeTabIndex: 1 },
      { label: "Cyber Security", link: "/software", activeTabIndex: 2 },
      { label: "Software Development", link: "/websites", activeTabIndex: 3 },
      { label: "Contact Us", link: "/contact", activeTabIndex: 4 },
    ],
    [handleHomeHover]
  );

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, "");
    const matchedRoute = routes.find((route) => route.link === path);
    if (matchedRoute) {
      setValue(matchedRoute.activeTabIndex);
    } else if (path === "/estimate") {
      setValue(6);
    } else if (
      path === "/about" ||
      path === "/evolution" || 
      path === "/testimonials"
    ) {
      setValue(0);
    }
  }, [location.pathname, routes]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

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
          <ListItem
            button
            component={Link}
            to="/"
            selected={value === 0}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about"
            selected={location.pathname === "/about"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/evolution" // updated from /revolution
            selected={location.pathname === "/evolution"}
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
          >
            <ListItemText primary="Evolution" />
          </ListItem>
          <ListItem
  button
  component={Link}
  to="/testimonials"
  selected={location.pathname === "/testimonials"}
  onClick={() => {
    setOpenDrawer(false);
    setValue(0);
  }}
>
  <ListItemText primary="Partner" />
</ListItem>


          {routes
            .filter((route) => route.label !== "Home")
            .map((route) => (
              <ListItem
                key={route.activeTabIndex}
                button
                component={Link}
                to={route.link}
                selected={value === route.activeTabIndex}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeTabIndex);
                }}
              >
                <ListItemText primary={route.label} />
              </ListItem>
            ))}

          <ListItem
            button
            component={Link}
            to="/estimate"
            selected={value === 6}
            onClick={() => {
              setOpenDrawer(false);
              setValue(6);
            }}
          >
            <ListItemText primary="Get Estimate" />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <Box sx={{ ml: "auto", display: { xs: "block", md: "none" } }}>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );

  const TabsMenu = (
    <Box sx={{ display: "flex", alignItems: "center", ml: "auto", gap: 2 }}>
      <Tabs
        value={value <= routes.length - 1 ? value : undefined}
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
            onMouseOver={!isMobile ? route.mouseover : undefined}
            value={route.activeTabIndex}
          />
        ))}
      </Tabs>
      <EstimateButton
        onClick={() => setValue(6)}
        component={Link}
        to="/estimate"
        variant="contained"
      >
        Get Estimate
      </EstimateButton>

      <Popper open={openHomeMenu} anchorEl={homeAnchor} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps} style={{ transformOrigin: "center top" }}>
            <Paper sx={{ minWidth: 180 }}>
              <ClickAwayListener onClickAway={handleMenuClose}>
                <MenuList
                  onMouseOver={() => setOpenHomeMenu(true)}
                  onMouseLeave={handleMenuClose}
                  sx={{ p: 0 }}
                >
                  <MenuItem
                    component={Link}
                    to="/about"
                    onClick={handleMenuClose}
                    sx={{
                      fontSize: "0.7rem",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        fontWeight: 500,
                      },
                    }}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/evolution" // updated from /revolution
                    onClick={handleMenuClose}
                    sx={{
                      fontSize: "0.7rem",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        fontWeight: 600,
                      },
                    }}
                  >
                    Evolution
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/testimonials"

                    onClick={handleMenuClose}
                    sx={{
                      fontSize: "0.7rem",
                      px: 2,
                      "&:hover": {
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        fontWeight: 500,
                      },
                    }}
                  >
                    Partners
                  </MenuItem>
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
          <Toolbar disableGutters sx={{ px: 2 }}>
            <Button onClick={() => setValue(0)} component={Link} to="/">
              <Logo src={logo} alt="logo" />
            </Button>
            {isMobile ? DrawerMenu : TabsMenu}
          </Toolbar>
        </AppBarStyled>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
};

export default Header;
