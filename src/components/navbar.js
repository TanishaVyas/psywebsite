import React from "react";
import { AppBar, Box, Toolbar, Stack, Button } from "@mui/material";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ backgroundColor: "#e6e6fa" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            flexGrow={1}
          >
            <Button sx={{ color: "black" }}>HOME</Button>
            <Button sx={{ color: "black" }}>DEVICE</Button>
            <Button sx={{ color: "black" }}>CONTACTS</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
