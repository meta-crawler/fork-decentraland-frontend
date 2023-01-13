import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

interface styleProps {
  title: string;
  content: string;
  input: boolean;
  button: string;
}

const ContactUs: React.FC<styleProps> = ({ title, content, input, button }) => {
  return (
    <Box>
      <Typography
        sx={{
          color: "#16141A",
          fontSize: "48px",
          mt: "21px",
          mb: "14px",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: "#16141A",
          fontSize: "21px",
          mb: "21px",
          fontWeight: "300",
        }}
      >
        {content}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {input && (
          <Box width="70%" mr="20px">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
          </Box>
        )}
        <Typography
          sx={(theme) => ({
            backgroundColor: "#FF2D55",
            color: theme.palette.text.primary,
            py: "13px",
            px: "32px",
            fontSize: "13px",
            mb: "21px",
            fontWeight: "300",
            borderRadius: "6px",
          })}
        >
          {button}
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactUs;
