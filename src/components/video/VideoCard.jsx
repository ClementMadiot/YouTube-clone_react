import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants"

const VideoCard = ({ video: { id: {videoId}, snippet } }) => {
  // console.log(videoId, snippet)
  return (
    <Card className="shadow-none max-w-80 sm:w-[358px] w-full lg:w-80" sx={{ borderRadius: 0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
      image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      className="w-80 sm:w-[358px] h-[180px]"
      />
      </Link>
      <CardContent className=" bg-cardContent h-[106px]">
      <Link to={videoId 
        ? `/video/${videoId}` 
        : demoVideoUrl}
        >
        <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
          {snippet?.title?.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle1" fontWeight="bold" color="#a0a0a0">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle className="ml-6" sx={{fontSize: 12}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard