import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Postcard({ date, user, caption, image1, profile_pic }) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // var obdate = new Date(date);
  var dateformated = new Date(date).toLocaleDateString("en-US", options);
  return (
    <Card
      style={{
        width: "800px",
        margin: "1rem auto",
        border: "1px solid grey",
      }}
      sx={{ maxWidth: 345 }}
    >
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={profile_pic} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user}
        // subheader={dateformated}
      />
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={image1}
        alt="error loading.."
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {caption}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: red[400] }} />
        </IconButton>
        <p>22 likes</p>
      </CardActions>
    </Card>
  );
}
