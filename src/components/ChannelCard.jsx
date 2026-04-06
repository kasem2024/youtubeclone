import { Box, CardContent, Typography, Avatar } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId;
  const snippet = channelDetail?.snippet;

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "320px" },
        mx: "auto",
        mt: marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            borderRadius: "20px",
            p: 3,
            backgroundColor: "#181818",
            transition: "all 0.3s ease",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              backgroundColor: "#202020",
            },
          }}
        >
          <Box
            sx={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              margin: "0 auto 16px",
              padding: "3px",
              background:
                "conic-gradient(from 0deg, #ff0000, #ff7b00, #ffd700, #ff0000)",
              animation: "rotate 4s linear infinite",
              "@keyframes rotate": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          >
            <Avatar
              src={snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt={snippet?.title}
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid #181818",
              }}
            />
          </Box>

          <CardContent sx={{ p: 0 }}>
            {/* Channel Title */}
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                textAlign: "center",
              }}
            >
              {snippet?.title || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 16, color: "#aaa" }} />
            </Typography>

            {/* Subscriber Count */}
            {channelDetail?.statistics?.subscriberCount && (
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#aaa",
                  mt: 1,
                  textAlign: "center",
                }}
              >
                {parseInt(
                  channelDetail.statistics.subscriberCount,
                ).toLocaleString()}{" "}
                subscribers
              </Typography>
            )}
          </CardContent>
        </Box>
      </Link>
    </Box>
  );
};

export default ChannelCard;
