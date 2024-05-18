import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants';


const Sidebar = ({selectedCategory , setSelectedCategory}) => (
    <Stack
        direction='row'
        sx={{
            overflowY: 'auto',
            height: { sx: 'auto ', md: '95%' },
            flexDirection: {md: 'column'},
        }}
    >
        {categories.map((category) => (
            <button
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory && '#ff0000', color: 'white'
                }}
                key={category.name}
                    onClick={()=>{setSelectedCategory(category.name)}}
                >
                <span style={{color: category.name === selectedCategory ? 'black' : 'white' , marginRight: '10px'}}> {category.icon}</span>
                <span 
                style={{
                    color: category.name === selectedCategory ? 'black' : 'white'  , opacity:category.name === selectedCategory ? '1' : '0.8'}} > {category.name} </span>
            </button>
        ))}
    </Stack>
)

export default Sidebar
