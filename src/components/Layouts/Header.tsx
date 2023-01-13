import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "components/Logo";
import { ColorButton, AlphaButton } from "components/common/Buttons";

const pages = [
  "MARKETPLACE",
  "BUILDER",
  "DOCS",
  "PLACES",
  "EVENTS",
  "DAO",
  "BLOG",
];

function Header() {
  const [appColor, setAppcolor] = useState<boolean>(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 100) setAppcolor(true);
    else setAppcolor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [anchorElNav, setAnchorElNav] = useState<Boolean>(false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };

  return (
    <AppBar
      position="fixed"
      sx={(theme) => ({
        backgroundColor: appColor
          ? theme.palette.background.default
          : theme.palette.background.transparent,
        backgroundImage: "none",
        boxShadow: "none",
        zIndex: "20",
      })}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Logo />

              <Box
                flexDirection="row"
                sx={{ display: { xs: "none", md: "flex" }, ml: "20px" }}
              >
                {pages.map((page: string, index: number) => (
                  <Button
                    key={index.toString()}
                    sx={(theme) => ({
                      color: appColor
                        ? theme.palette.text.third
                        : theme.palette.text.primary,
                      ml: "20px",
                      px: "10px",
                      py: "5px",
                      fontSize: "13px",
                    })}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box
                sx={(theme) => ({
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: "-20px",
                  left: "-60px",
                  backgroundColor: theme.palette.background.default,
                  width: "1028px",
                  zIndex: -10,
                  opacity: anchorElNav ? 1 : 0,
                  transition:
                    "opacity .25s ease,transform .25s ease,box-shadow .25s ease",
                })}
              >
                <Box mt="70px" ml="10px">
                  {pages.map((page: string, index: number) => (
                    <Typography
                      key={index.toString()}
                      px="65px"
                      py="20px"
                      fontSize="13px"
                      sx={(theme) => ({
                        color: theme.palette.text.third,
                      })}
                    >
                      {page}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  ml: "20px",
                  zIndex: 100,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <MenuIcon
                  sx={(theme) => ({
                    color:
                      anchorElNav || appColor
                        ? theme.palette.background.paper
                        : theme.palette.background.default,
                    zIndex: 100,
                  })}
                />
              </IconButton>
            </Box>

            <Box
              gap={4}
              flexDirection="row"
              alignItems="flex-center"
              sx={{
                display: { xs: "none", lg: "flex" },
              }}
            >
              <AlphaButton
                label="JOIN OUR DISCORD"
                _width="160px"
                _color={anchorElNav || appColor}
                _border={appColor}
              />
              <ColorButton label="START EXPLORING" _width="160px" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
