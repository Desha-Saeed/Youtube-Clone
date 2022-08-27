import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '95%' },
      flexDirection: { md: 'column' }
    }}>
    {categories.map((category, index) => (
      <button
        className='category-btn'
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && '#FC1503',
          color: '#FFFFFF'
        }}
        key={index}>
        <span
          style={{
            color: category.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px'
          }}>
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? '1' : '0.83'
          }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
