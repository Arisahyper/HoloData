import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export default function SideSlide({ fetch, liveFetch }: any) {
  return (
    <div style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)" }}>
      <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                fetch;
              }}
            >
              <ListItemIcon>
                <ArrowCircleDownIcon />
              </ListItemIcon>
              <ListItemText primary="全ての動画" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                liveFetch;
              }}
            >
              <ListItemIcon>
                <ArrowCircleDownIcon />
              </ListItemIcon>
              <ListItemText primary="配信中のみ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <ArrowCircleDownIcon />
              </ListItemIcon>
              <ListItemText primary="配信予定 & ライブ中" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}
