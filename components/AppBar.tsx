import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function SearchAppBar() {
  const [sideOpen, setSideOpen] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="#fff" component="div">
            HoloTube
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
