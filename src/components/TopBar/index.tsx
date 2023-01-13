import React from "react";
import { CardMedia } from "@mui/material";
import Content from "./Content";
import { Box } from "@mui/system";

const TopBar = () => {
  return (
    <Box
      className="top-bar"
      width="100%"
      height="100vh"
      position="relative"
      sx={{ minHeight: "790px" }}
    >
      <Box
        position="absolute"
        left={0}
        top={0}
        width="100%"
        height="100%"
        overflow="hidden"
      >
        <CardMedia
          component="video"
          className="top-bar-video"
          image="assets/main.mp4"
          autoPlay
          loop
          muted
          sx={{
            width: "auto",
            height: "100%",
          }}
        />
      </Box>
      <Box position="absolute" width="100%" top={0} sx={{ zIndex: 3 }}>
        <Content />
      </Box>
    </Box>
  );
};

export default TopBar;
