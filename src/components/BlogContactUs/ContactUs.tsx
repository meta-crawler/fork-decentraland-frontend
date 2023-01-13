import React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ColorButton } from "components/common/Buttons";

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
          textAlign: { xs: "center", md: "left" },
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
          px: "20px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {input && (
          <Box flexGrow={1} width="100%" mr="20px">
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
          <ColorButton label={button} _width="240px" />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
