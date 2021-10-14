import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

import Image from "next/image"
import Axios from "axios"

const drawerWidth = 240;
const DataList = [
  {
    name: "Holotube",
    link: "/",
    icon: <YouTubeIcon />,
    blank: "",
  },
  {
    name: "Holotter (β)",
    link: "/twitter",
    icon: <TwitterIcon />,
    blank: "",
  },
  {
    name: "GitHub",
    link: "https://github.com/Arisahyper/HoloData",
    icon: <GitHubIcon />,
    blank: "_blank",
  },
];
const relationalDataList = [
  {
    name: "非公式Wiki",
    link: "https://seesaawiki.jp/hololivetv/d/%C1%E1%B8%AB%C9%BD",
    icon: <LaptopChromebookIcon />,
    blank: "_blank",
  },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [nestOpen, setNestOpen] = React.useState(false);
  const [sideList, setSideList] = useState<any | undefined>([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setNestOpen(!nestOpen);
  };

  const liveFetch = () => {
    const sideListBox: any[] = [];
    Axios.get("https://schedule.hololive.tv/api/list/7")
      .then((response) => {
        let dateGroup: number = response.data.dateGroupList.length - 1;
        for (let i = dateGroup; i >= 0; i--) {
          let data = response.data.dateGroupList[i].videoList;
          for (let j = 0; j < data.length; j++) {
            if (data[j].platformType === 1 && data[j].isLive) {
              sideListBox.push({
                name: data[j].name,
                icon: data[j].talent.iconImageUrl,
              });
            }
          }
        }
        setSideList(sideListBox);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    liveFetch();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            HoloData
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {DataList.map((data, index) => (
            <>
              <Link href={data.link} passHref>
                <a target={data.blank}>
                  <ListItem button key={index}>
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText primary={data.name} />
                  </ListItem>
                </a>
              </Link>
            </>
          ))}
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="外部リンク" />
            {nestOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={nestOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {relationalDataList.map((data, index) => (
                <div key={index} style={{ paddingLeft: "1.5rem" }}>
                  <Link href={data.link} passHref>
                    <a target={data.blank}>
                      <ListItem button key={index}>
                        <ListItemIcon>{data.icon}</ListItemIcon>
                        <ListItemText primary={data.name} />
                      </ListItem>
                    </a>
                  </Link>
                </div>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>

      <Drawer variant="permanent" anchor="right" sx={{ width: "10px" }}>
        <DrawerHeader />
        <Divider />
        <List>
          {sideList.map(({name, icon}: any, index: number) => (
            <ListItem button key={index}>
              <ListItemIcon>
                {index % 2 === 0 ? <YouTubeIcon /> : <YouTubeIcon />}
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
