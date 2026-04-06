import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos"; // ensure default export

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setVideos(null);
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data?.items);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchVideos();
  }, [searchTerm]);

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        minHeight: "95vh",
        backgroundColor: "#0f0f0f",
        transition: "all 0.3s ease",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        fontWeight={700}
        color="white"
        mb={4}
        sx={{
          fontSize: { xs: "20px", sm: "26px", md: "32px" },
          textAlign: { xs: "center", sm: "left" },
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        Search Results for{" "}
        <span
          style={{
            color: "#FC1503",
            background:
              "linear-gradient(45deg, #ff0000, #ff7b00, #ffd700, #ff0000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 3s linear infinite",
          }}
        >
          {searchTerm}
        </span>{" "}
        videos
      </Typography>

      {/* Videos Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: { xs: 2, sm: 3, md: 4 },
          justifyItems: "center",
        }}
      >
        {videos && videos.length > 0 ? (
          <Videos videos={videos} />
        ) : (
          <Typography
            color="#aaa"
            fontSize={{ xs: "14px", sm: "16px", md: "18px" }}
            textAlign="center"
            sx={{ mt: 8 }}
          >
            No results found for{" "}
            <span style={{ color: "#FC1503" }}>{searchTerm}</span>.
          </Typography>
        )}
      </Box>

      {/* Animation for gradient */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </Box>
  );
};

export default SearchFeed;
