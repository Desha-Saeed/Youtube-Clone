import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <Stack
      direction='row'
      alignItems='center'
      p={2}
      justifyContent='space-between'
      sx={{ position: 'sticky', background: '#000', top: 0, zIndex: '10' }}
    >
      <Link
        to='/'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src={logo}
          alt='logo'
          height={50}
        />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
