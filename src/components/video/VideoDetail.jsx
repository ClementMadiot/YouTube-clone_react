import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

// local import
import { Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  // if(!VideoDetail?.snippet) return 'Loading...'

  // const {  snippet: { title, channelTitle channelTitle }, statistics: { viewCount, likeCount } }
  
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        {/* main video  */}
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="!h-[77vh] !w-full"
              controls
            />
            {videoDetail && (
              <>
              {/* Title */}
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {videoDetail.snippet.title}
                </Typography>
                {/* Channel  */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ color: "#fff" }}
                  py={1}
                  px={2}
                >
                  <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                  <Typography variant={{sm: 'subtitle1', md: 'h6 '}} color={'#fff'}>
                    {videoDetail.snippet.channelTitle}
                    <CheckCircle sx={{ fontSize: '12px ', color: 'gray', ml:'5px' }} />
                  </Typography>
                  </Link>
                {/* View  */}
                <Stack direction={'row'} gap={'20px'} alignItems={'center'}>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity:'0.7'}}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
                </Stack>
              </>
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
