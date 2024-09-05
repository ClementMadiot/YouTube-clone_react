import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../index";

const Videos = ({ videos, direction, justifyContent }) => {
  if(!videos?.length) return 'Loading...'
  // console.log(videos[0]);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent={justifyContent ||{xs: 'center', md: 'space-evenly'}} alignItems="start" gap={2}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}  />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
