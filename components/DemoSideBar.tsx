import * as React from "react";
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
import BurstModeIcon from '@mui/icons-material/BurstMode';

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
    name: "Holowindow (β)",
    link: "/holotube",
    icon: <BurstModeIcon />,
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

export default function DemoteSideBar({ pageTitle }: any ) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [nestOpen, setNestOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setNestOpen(!nestOpen);
  };

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
            {pageTitle}
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
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
