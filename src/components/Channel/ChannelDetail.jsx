import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  // console.log(videos);

  useEffect(() => {
    // url -> channels.part === snippet and id === id from videos
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    // url -> search. channelId === id from videos and snippet and order === date
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh" >
      <Box>
        <div className="linear-gradient h-[150px] md:h-[300px] z-10" />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box sx={{margin: '0 0.5rem'}}>
          <Videos videos={videos} justifyContent="space-evenly" />

      </Box>
    </Box>
  );
};

export default ChannelDetail;
