import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(
          `channels?part=snippet,statistics&id=${id}`,
        );
        setChannelDetail(data?.items[0]);

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet,id&order=date`,
        );
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };

    fetchResults();
  }, [id]);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#0f0f0f" }}>
      <Box
        sx={{
          height: { xs: "180px", md: "280px" },
          background: "linear-gradient(135deg, #ff0000, #ff7b00, #ffd700)",
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: "-60px", md: "-100px" },
          mb: 4,
        }}
      >
        {channelDetail && <ChannelCard channelDetail={channelDetail} />}
      </Box>

      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 3,
            background: "linear-gradient(90deg, #ff0000, #ff7b00, #ffd700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Latest Videos
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          spacing={2}
          sx={{ justifyContent: "center" }}
        >
          <Videos videos={videos} />
        </Stack>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
