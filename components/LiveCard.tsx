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
  name: string
  iconLink: string
  title: string
  thumbnailLink: string
  date: string
}

const LiveCard = (props: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* TODO: アイコン */}
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} src={ props.iconLink } />}
        // ハンバーガー >> いらんかも
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        // TODO: 動画タイトル
        title={ props.name }
        // TODO: 日付 時間
        subheader={ props.date }
      />
      {/* サムネ */}
      <CardMedia
        component="img"
        height="194"
        // TODO: サムネリンク
        image={ props.thumbnailLink }
        // TODO: タイトル入れればOK
        alt={ props.title }
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
