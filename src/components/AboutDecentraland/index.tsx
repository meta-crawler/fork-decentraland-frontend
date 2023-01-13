import React from "react";
import { Box, Container } from "@mui/material";
import Description from "components/RoadMap/Description";

const data = {
  titles: [
    "About Decentraland",
    "Determine the future of the virtual world",
    "The first fully decentralized world, Decentraland is controlled via the DAO, which owns the most important smart contracts and assets of Decentraland. Via the DAO, you decide and vote on how the world works.",
  ],
  buttons: ["LEARN MORE"],
};

const AboutDecentraland = () => {
  return (
    <Box
      width="auto"
      sx={{
        backgroundImage: "url(./assets/images/1.png)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="row"
          pt="80px"
          pb="80px"
          sx={{
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Description titles={data.titles} buttons={data.buttons} />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutDecentraland;
