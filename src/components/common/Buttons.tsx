import React from "react";
import { Button } from "@mui/material";

export const ColorButton = ({
  label,
  _width,
  _icon,
}: {
  label: string;
  _width: string;
  _icon?: React.ReactNode;
}) => {
  return (
    <Button
      sx={(theme) => ({
        boxSizing: "border-box",
        width: _width,
        py: "10px",
        fontSize: "13px",
        textAlign: "center",
        color: theme.palette.text.primary,
        background: theme.palette.background.main,
        "&:hover": {
          backgroundColor: theme.palette.background.main,
          borderColor: theme.palette.background.transparent,
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: theme.palette.background.main,
          borderColor: theme.palette.background.transparent,
        },
        "&:focus": {
          boxShadow: theme.palette.background.transparent,
        },
      })}
    >
      {_icon && _icon}
      {label}
    </Button>
  );
};

export const AlphaButton = ({
  label,
  _width,
  _color,
  _border,
}: {
  label: string;
  _width: string;
  _color?: Boolean;
  _border?: boolean | boolean | undefined;
}) => {
  return (
    <Button
      sx={(theme) => ({
        boxSizing: "border-box",
        width: _width,
        fontSize: "13px",
        py: "10px",
        textAlign: "center",
        color: _color ? theme.palette.text.third : theme.palette.text.primary,
        background: theme.palette.background.transparent,
        border: _border ? "solid" : null,
        borderWidth: _border ? "1px" : null,
        borderColor: _border ? theme.palette.background.default : null,
      })}
    >
      {label}
    </Button>
  );
};
