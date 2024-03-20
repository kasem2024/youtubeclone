import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  console.log(channelDetail , videos ,id);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);
  return (
    <Box minHeight="95vh" >
      <Box>
        <div style={{
          background:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252,176,69,1) 100%)'
          , zIndex: 10, height: '300px'
        }}>
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box  p={2} display="flex"  >
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
