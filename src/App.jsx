import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Navbar,
  Feed,
  SearchFeed,
  VideoDetails,
  ChannelDetails
} from './components';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route
            path='/Youtube-Clone/'
            element={<Feed />}
          />
          <Route
            path='/'
            element={<Feed />}
          />
          <Route
            path='/video/:id'
            exact
            element={<VideoDetails />}
          />
          <Route
            path='/channel/:id'
            exact
            element={<ChannelDetails />}
          />
          <Route
            path='/search/:searchTerm'
            exact
            element={<SearchFeed />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
