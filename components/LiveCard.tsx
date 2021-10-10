import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type Props = {
  name: string;
  iconLink: string;
  title: string;
  thumbnailLink: string;
  date: string;
  isLive: boolean;
};

const LiveCard = (props: Props) => {

  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardHeader
        avatar={<Avatar src={props.iconLink} />}
        action={
          <IconButton aria-label="onLive">
            {props.isLive ? <YouTubeIcon sx={{color: "#e7261c"}}  /> : <YouTubeIcon />}
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        width="486"
        image={props.thumbnailLink}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LiveCard;
