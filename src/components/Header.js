//Prabesh Bhattarai = 104085535


import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./HeaderStyles.css"; // Import the CSS file
import SecurityIcon from '@mui/icons-material/Security';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Handle menu click for mobile view
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Define the content of the mobile menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"Turquoise"} /* Change font color to white */
        fontFamily={ "'Courier New', Courier, monospace"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        {/* Logo */}
        <SecurityIcon/>
        Hackon
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/audit"}>Audit</NavLink>
        </li>
        <li>
          <NavLink to={"/Report"}>Report</NavLink>
        </li>
        <li>
          <NavLink to={"/signin"}>Signin</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
         
            <Typography
              color={"Turquoise"} /* Change font color to white */
              variant="h6"
              fontFamily={ "'Courier New', Courier, monospace"}
              component="div"
              sx={{ flexGrow: 1 }}
            >   
              <SecurityIcon/>
              {/* Header Title */}
              Hackon
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* Navigation Menu for larger screens */}
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/audit"}>Audit</NavLink>
                </li>
                <li>
                  <NavLink to={"/Report"}>Report</NavLink>
                </li>
                <li>
                  <NavLink to={"/Signin"}>Signin</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
