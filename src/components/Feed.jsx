import { useState, useEffect } from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

// import {useState , useEffect} from 'React'
const Feed = () => {
  const [videos , setVideos] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('New')
    useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
  return (
    <Stack
    sx={{flexDirection: { sx: 'column', md: 'row'}}}
    >
      <Box
        sx={{height:{sx:'auto' , md:'92vh'} , borderRight:'1px solid #3d3d3d', px:{sx:0 , md:2}}}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory = {setSelectedCategory}
        />
        <Typography className='copyright'
          variant='body2' sx={{ mt: 1.5, color: '#fff' }}> Copyright 2023 Mohareb
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: '#ff0000'}}>
          {selectedCategory}
          <span
            style={{color:'wheat' , marginLeft: '10px'}} >
            Videos
          </span>
        </Typography>
        <Videos videos ={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
