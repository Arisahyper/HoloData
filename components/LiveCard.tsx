import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import YouTubeIcon from "@mui/icons-material/YouTube";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Props = {
  name: string;
  iconLink: string;
  title: string;
  thumbnailLink: string;
  date: string;
  isLive: boolean;
};

const LiveCard = (props: Props) => {
  // const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar src={props.iconLink} />}
        // ハンバーガー >> いらんかも
        action={
          <IconButton aria-label="settings">
            {/* あとでやる */}
            {props.isLive ? <YouTubeIcon color="primary" /> : <YouTubeIcon />}
          </IconButton>
        }
        title={props.name}
        subheader={props.date}
      />
      {/* サムネ */}
      <CardMedia
        component="img"
        width="486"
        image={props.thumbnailLink}
        alt={props.title}
      />
      <CardContent>
        {/* TODO: 動画説明 */}
        <Typography variant="body2" color="text.secondary">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default LiveCard;
