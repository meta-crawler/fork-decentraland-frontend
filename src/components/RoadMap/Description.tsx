import React from "react";
import { Box, Typography } from "@mui/material";
import { ColorButton, AlphaButton } from "components/common/Buttons";

interface ContentProps {
  titles: Array<string>;
  buttons: Array<string>;
}

const Description: React.FC<ContentProps> = ({ titles, buttons }) => {
  return (
    <Box
      my="44px"
      maxWidth="532px"
      sx={{
        display: { xs: "flex", md: "initial" },
        flexDirection: "column",
        alignItems: { xs: "center", md: "normal" },
      }}
    >
      <Typography
        variant="h2"
        fontSize="48px"
        mb="14px"
        sx={(theme) => ({
          textAlign: { xs: "center", md: "initial" },
          color: theme.palette.text.secondary,
          fontSretch: "normal",
          fontStyle: "normal",
          fontWeight: "600",
          letterSpacing: "normal",
          lineHeight: 1.17,
        })}
      >
        {titles[0]}
      </Typography>
      <Typography
        variant="h3"
        fontSize="48px"
        mt="22px"
        sx={(theme) => ({
          textAlign: { xs: "center", md: "initial" },
          color: theme.palette.text.primary,
          fontStretch: "normal",
          fontStyle: "normal",
          fontWeight: "600",
          letterSpacing: ".3px",
          lineHeight: 1.21,
        })}
      >
        {titles[1]}
      </Typography>
      <Typography
        fontSize="17px"
        fontWeight="300"
        sx={(theme) => ({
          textAlign: { xs: "center", md: "initial" },
          color: theme.palette.text.primary,
          letterSpacing: "0.3px",
          lineHeight: "1.81",
        })}
      >
        {titles[2]}
      </Typography>
      <Box
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="felx-start"
        gap="12px"
        width="100%"
        mt="30px"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        {buttons.map((button: string, index: number) =>
          !index ? (
            <ColorButton key={index.toString()} label={button} _width="240px" />
          ) : (
            <AlphaButton
              key={index.toString()}
              label={button}
              _width="240px"
              _border={true}
            />
          )
        )}
      </Box>
    </Box>
  );
};

export default Description;
