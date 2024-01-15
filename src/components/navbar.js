import React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from "@mui/material";
import logo from "..//image//logo.png";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: "#e6e6fa" }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "80px", marginRight: "10px" }}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Button href="#device">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "black" }}
            >
              ABOUT DEVICE
            </Typography>
          </Button>
          <Button href="#demo">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "black" }}
            >
              DEMO
            </Typography>
          </Button>
          <Button href="#contact">
            <Typography
              variant="h6"
              sx={{ fontSize: { xs: "16px", md: "20px" }, color: "black" }}
            >
              CONTACT US
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
