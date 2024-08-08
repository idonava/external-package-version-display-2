import { Box } from "@mui/material";
import React from "react";

export const packageVersion = "1.0.0";

export const VersionDisplay = () => {
  return (
    <Box>external-package-version-display-2 Version: {packageVersion}</Box>
  );
};
