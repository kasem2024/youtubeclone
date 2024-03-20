import React from 'react'
import { Box, CardContent, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoChannelTitle, demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ channelDetail, marginTop }) => {
  console.log(channelDetail?.snippet?.thumbnails?.high?.url)
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        height: '326px',
        margin: 'auto',
        marginTop,}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', color:'wheat'}}
        >
          <img
          src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          style={{ borderRadius: '50%', height: '180%', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
          <Typography variant="h6">
            {channelDetail?.snippet?.title || demoChannelTitle }
            <CheckCircle  sx={{fontSize:14 , color:'gray' , ml:'5px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistcs?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard


//https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo