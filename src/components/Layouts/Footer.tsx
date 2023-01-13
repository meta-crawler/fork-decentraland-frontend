import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { FaDiscord, FaRedditAlien, FaGithub, FaTwitter } from "react-icons/fa";

const left = [
  "English",
  "Home",
  "Privacy Policy",
  "Terms of Use",
  "Content Policy",
  "Code of Ethics",
];

const right = [
  <FaDiscord />,
  <FaRedditAlien />,
  <FaGithub />,
  <FaTwitter />,
  "© 2023 Decentraland",
];

const Footer = () => {
  return (
    <Box
      sx={(theme) => ({
        py: "15px",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            sx={{
              justifyContent: { xs: "center", md: "initial" },
            }}
          >
            {left.map((d, index) => (
              <Typography
                key={index.toString()}
                fontSize="14px"
                pb="8px"
                pr="16px"
                sx={(theme) => ({
                  color: theme.palette.text.footer,
                  fontWeight: 400,
                })}
              >
                {d}
              </Typography>
            ))}
          </Box>
          <Box
            display="flex"
            sx={{
              justifyContent: { xs: "center", md: "initial" },
            }}
          >
            {right.map((d, index) => (
              <Typography
                key={index.toString()}
                fontSize="14px"
                pb="8px"
                pl="16px"
                sx={(theme) => ({
                  color: theme.palette.text.footer,
                  fontWeight: 400,
                })}
              >
                {d}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
