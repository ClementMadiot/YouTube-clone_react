import { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Sidebar, Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]) 

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", sm: "row" } }}>
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
      </Box>
      <Box p={2} className="h-[90vh] overflow-y-auto flex-1">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          {selectedCategory} <span className="text-[#F31503]">videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
