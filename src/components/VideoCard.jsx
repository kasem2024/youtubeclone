import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId } = {}, snippet } = {} }) => (
  <Box
    sx={{
      width: { xs: "90%", sm: "100%", md: "100%" }, // narrower on mobile
      mx: { xs: "auto", sm: 0, md: 0 }, // center on mobile
    }}
  >
    <Card
      sx={{
        width: "100%",
        boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        borderRadius: 2,
        backgroundColor: "#1E1E1E",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px) scale(1.01)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        },
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title || "Video thumbnail"}
          sx={{
            width: "100%",
            height: { xs: 140, sm: 160, md: 180 },
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Link>

      <CardContent sx={{ p: 1 }}>
        <Link
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#fff"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontSize: { xs: "12px", sm: "14px", md: "15px" },
            }}
          >
            {snippet?.title || demoVideoTitle}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="subtitle2"
            color="gray"
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 0.3,
              fontSize: { xs: "10px", sm: "12px", md: "13px" },
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 12, color: "gray", ml: 0.5 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  </Box>
);

export default VideoCard;
