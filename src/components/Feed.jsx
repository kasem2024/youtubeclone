import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [videos, setVideos] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setVideos(null);
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`,
        );
        setVideos(data?.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        overflowX: "hidden", // prevent horizontal scroll
        width: "100vw",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: { xs: "100%", md: "240px" },
          borderRight: { md: "1px solid #2f2f2f" },
          py: { xs: 1, md: 2 },
          px: { xs: 1, md: 2 },
          backgroundColor: "#0f0f0f",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            color: "#aaa",
            textAlign: "center",
            fontSize: { xs: "12px", sm: "14px" },
          }}
        >
          © 2026 Mohamed Mousa
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          minHeight: { xs: "auto", md: "92vh" },
          overflowY: "auto",
          px: { xs: 1.5, sm: 2, md: 4 },
          py: { xs: 2, md: 0 },
          maxWidth: "100vw", // ✅ prevent horizontal overflow
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
          sx={{
            color: "#fff",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
            fontSize: { xs: "18px", sm: "22px", md: "28px" },
            textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
          }}
        >
          {selectedCategory}
          <span
            style={{
              color: "#ff0000",
              background:
                "linear-gradient(45deg, #ff0000, #ff7b00, #ffd700, #ff0000)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "glow 3s linear infinite",
            }}
          >
            Videos
          </span>
        </Typography>

        <Videos videos={videos} />

        <style>{`
          @keyframes glow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </Box>
    </Stack>
  );
};

export default Feed;
