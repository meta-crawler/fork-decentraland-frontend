import React from "react";
import { Box, Typography } from "@mui/material";

interface styleProps {
  title: string;
  content: string;
  number: number;
  img: string;
  width: string;
}

const Carousel: React.FC<styleProps> = ({
  title,
  content,
  number,
  img,
  width,
}) => {
  return (
    <Box position="relative" width={width} height="250px" px="15px">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          backgroundImage: `url(${img})`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <Box
          position="relative"
          width="100%"
          height="100%"
          sx={{
            borderRadius: "15px",
            backgroundColor: "rgba(0,0,0,0.6)",
            "&:hover": {
              ".active": {
                transform: "translateY(0%)",
              },
            },
          }}
        >
          <Box
            position="absolute"
            sx={{
              top: "10px",
              right: "10px",
            }}
          >
            <Typography
              fontSize="14px"
              fontWeight="600"
              sx={(theme) => ({
                height: "20px",
                lineHeight: "20px",
                minWidth: "20px",
                padding: "0 0.4em",
                borderRadius: "10px",
                boxSizing: "content-box",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.third,
              })}
            >
              + {number}
            </Typography>
          </Box>
          <Box
            px="15px"
            py="15px"
            className="active"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              position: "absolute",
              transform: "translateY(65%)",
              transition: "transform .3s ease",
              zIndex: "5",
            }}
          >
            <Typography
              variant="h3"
              fontSize="18px"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                fontStretch: "normal",
                fontStyle: "normal",
                fontWeight: "600",
                letterSpacing: ".3px",
                lineHeight: "1.21",
              })}
            >
              {title}
            </Typography>
            <Typography
              fontSize="14px"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                fontStretch: "normal",
                fontStyle: "normal",
                fontWeight: "300",
                letterSpacing: ".3px",
                lineHeight: "1.81",
              })}
            >
              {content}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column-reverse",
              }}
            >
              <Typography
                sx={(theme) => ({
                  backgroundColor: theme.palette.background.main,
                  color: theme.palette.text.primary,
                  fontSize: "13px",
                  lineHeight: "18px",
                  minWidth: "128px",
                  borderRadius: "5px",
                  padding: "7px 20px",
                  boxShadow: "inset 0 0 0 0 rgb(34 36 38 / 15%)",
                  textAlign: "center",
                })}
              >
                JUMP IN
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
