import React from "react";
import { Box, Container } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Description from "./Description";

const data = [
  {
    titles: [
      "Explore",
      "Lose yourself in an amazing, evolving world",
      "Explore LANDs owned by users to experience incredible scenes and structures. From a space adventure to a medieval dungeon maze to entire villages crafted from the minds of community members.",
    ],
    buttons: ["START EXPLORING"],
  },
  {
    titles: [
      "Create",
      "Test the limits of your imagination",
      "Create scenes, artworks, challenges and more, using the simple Builder tool, then take part in events to win prizes. For more experienced creators, the SDK provides the tools to fill the world with social games and applications.",
    ],
    buttons: ["START BUILDING", "START DEVELOPING"],
  },
  {
    titles: [
      "Trade",
      "The virtual destination for digital assets",
      "Buy and sell LAND, Estates, Avatar wearables and names in the Decentraland Marketplace: stocking the very best digital goods and paraphernalia backed by the ethereum blockchain.",
    ],
    buttons: ["START BROWSING"],
  },
];

const RoadMap = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
      })}
    >
      <Container>
        <Box
          display="flex"
          pt="80px"
          pb="80px"
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        >
          <Description titles={data[0].titles} buttons={data[0].buttons} />
          <CardMedia
            component="video"
            className={"ddd"}
            image={"assets/body1.mp4"}
            autoPlay
            loop
            muted
            width="516px"
            height="516px"
            sx={{
              display: { xs: "none", md: "initial" },
            }}
          />
        </Box>
        <Box
          display="flex"
          pt="80px"
          pb="80px"
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        >
          <CardMedia
            component="video"
            className={"ddd"}
            image={"assets/body2.mp4"}
            autoPlay
            loop
            muted
            width="516px"
            height="516px"
            sx={{
              display: { xs: "none", md: "initial" },
            }}
          />
          <Description titles={data[1].titles} buttons={data[1].buttons} />
        </Box>
        <Box
          display="flex"
          pt="80px"
          pb="80px"
          sx={{ justifyContent: { xs: "center", md: "space-between" } }}
        >
          <Description titles={data[2].titles} buttons={data[2].buttons} />
          <CardMedia
            component="video"
            className={"ddd"}
            image={"assets/body3.mp4"}
            autoPlay
            loop
            muted
            width="516px"
            height="516px"
            sx={{
              display: { xs: "none", md: "initial" },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default RoadMap;
