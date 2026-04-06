import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await fetchFromAPI(
        `videos?part=snippet,statistics&id=${id}`,
      );
      setVideoDetail(data.items[0]);
    };

    const fetchRelated = async () => {
      const data = await fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`,
      );
      setVideos(data.items);
    };

    fetchVideo();
    fetchRelated();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh", backgroundColor: "#0f0f0f", color: "#fff" }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        {/* 🔴 Main Video */}
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: { xs: "70px", md: "86px" },
              zIndex: 1,
            }}
          >
            {/* Video Player */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                mb: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.01)" },
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width="100%"
                height="500px"
                controls
              />
            </Box>

            {/* Video Title */}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                p: 2,
                background:
                  "linear-gradient(to right, #ff0000, #ff7b00, #ffd700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>

            {/* Channel & Stats */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ px: 2, py: 1 }}
            >
              <Link
                to={`/channel/${channelId}`}
                style={{ textDecoration: "none" }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#fff",
                      fontWeight: 600,
                      transition: "color 0.3s",
                      "&:hover": { color: "#FC1503" },
                    }}
                  >
                    {channelTitle}
                  </Typography>
                  <CheckCircleIcon sx={{ fontSize: 14, color: "gray" }} />
                </Stack>
              </Link>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #FF0000 30%, #FF7B00 90%)",
                    fontSize: "12px",
                    px: 1.5,
                    py: 0.5,
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #FF4D4D 30%, #FFA500 90%)",
                    },
                  }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background:
                      "linear-gradient(45deg, #00FF7F 30%, #1E90FF 90%)",
                    fontSize: "12px",
                    px: 1.5,
                    py: 0.5,
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #32CD32 30%, #4169E1 90%)",
                    },
                  }}
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* 🔴 Related Videos */}
        <Box
          px={{ xs: 2, md: 3 }}
          py={{ xs: 5, md: 1 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
