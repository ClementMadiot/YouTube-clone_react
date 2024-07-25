import React, { useEffect, useState } from "react";
// @mui import
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./navbar/Sidebar";
const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography className="hidden md:block mt-6 text-white" variant="body2">
          Copyright © 2024 Web Design
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
