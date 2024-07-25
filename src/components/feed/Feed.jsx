import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="hidden md:block mt-6 text-white" variant="body2">
          Copyright © 2024 Web Design
        </Typography>
      </Box>
      <Box p={2} className="h-[90vh] overflow-y-auto flex-1">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span className="text-[#F31503]">videos</span>
        </Typography>
        <Videos videos={[]} />
      </Box>
    </Stack>
  );
};

export default Feed;
