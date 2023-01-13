import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";

const blogData = [
  {
    img: "assets/images/2.png",
    date: "Jan 11",
    content:
      "Film Club 2023: Show the World What You Love About Decentraland and Win Big!",
  },
  {
    img: "assets/images/3.png",
    date: "Jan 08",
    content: "Genesis.City: A Dynamic Bird’s-eye View of Decentraland",
  },
  {
    img: "assets/images/4.png",
    date: "Dec 09",
    content: "Decentraland 2022 Recap",
  },
];

const contactUsData = [
  {
    title: "Contact us",
    content:
      "You'll find us at all hours on Discord. You can also reach us through the usual channels.",
    input: false,
    button: "GET IN TOUCH",
  },
  {
    title: "Get the latest updates",
    content:
      "Breaking news on events, competitions and new developments in Decentraland, delivered straight to your inbox",
    input: true,
    button: "SIGN UP",
  },
];

const BlogContactUs = () => {
  return (
    <Box
      mt="0px"
      sx={(theme) => ({
        backgroundColor: theme.palette.text.primary,
      })}
    >
      <Container>
        <Box pt="80px" pb="80px">
          <Typography
            pb="30px"
            sx={{
              color: "#16141A",
              fontSize: "48px",
              fontWeight: "600",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            From The blog
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            flexWrap="wrap"
            gap={2}
            pb="100px"
          >
            {blogData.map((d, i) => (
              <Box key={i.toString()} px="10px" width="352px" sx={{}}>
                <Gallery img={d.img} date={d.date} content={d.content} />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
            }}
          >
            {contactUsData.map((d, i) => (
              <ContactUs
                key={i.toString()}
                title={d.title}
                content={d.content}
                input={d.input}
                button={d.button}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogContactUs;
