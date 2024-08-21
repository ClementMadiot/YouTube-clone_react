import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { Videos } from "../index";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
    .then((data) => setVideos(data.items)
    );
  }, []);

  return (
    <Box p={2} className="h-[90vh] overflow-y-auto flex-1">
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Search Result for: <span className="text-[#F31503]">videos</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
