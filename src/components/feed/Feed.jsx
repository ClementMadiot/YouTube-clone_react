// import { useEffect, useState } from "react";
// @mui import
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar, Videos} from "../index";
// import Videos from "./video/Videos";
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
      <Box p={2} className='h-[90vh] overflow-y-auto flex-1'>
        <Typography variant="h4" fontWeight="bold" mb={2 }>
        New  <span className="text-[#F31503]">videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  );
};

export default Feed;
