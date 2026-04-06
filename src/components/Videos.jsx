import { Box, Grid } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  if (!videos) return null;

  return (
    <Box sx={{ width: "100%", maxWidth: "100vw", overflowX: "hidden" }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ justifyContent: "center" }}
      >
        {videos.map((video, index) => (
          <Grid
            item
            key={video?.id?.videoId || index}
            xs={12} // 1 column on mobile
            sm={12} // still 1 column
            md={6} // 2 columns
            lg={4} // 3 columns
            xl={3} // 4 columns
          >
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
