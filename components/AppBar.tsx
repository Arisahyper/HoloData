import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SideSlide from "./SideSlide";
import styles from "../styles/Home.module.css";

export default function SearchAppBar({ fetch, liveFetch }: any) {
  const [sideOpen, setSideOpen] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            HoloTube
          </Typography>
        </Toolbar>
      </AppBar>
      {sideOpen ? (
        <div className={styles.overlay}>
          <SideSlide
            fetch={fetch}
            liveFetch={liveFetch}
            // afterFech ={afterFetch()}
          />
        </div>
      ) : (
        <></>
      )}
    </Box>
  );
}
