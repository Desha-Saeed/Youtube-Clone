import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Typography, Stack, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
//local imports
import { fetchFromAPI } from '../api/axiosFetch';
import { Videos } from './';

function VideoDetails() {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return 'Loading...';

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount }
  } = videoDetail;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`htttps://www.youtube.com/watch?v=${id}`}
              controls
              className='react-player'
            />
            <Typography
              variant='h5'
              color='#FFFFFF'
              fontWeight='bold'
              p={2}
            >
              {videoDetail && title}
            </Typography>
            <Stack
              direction='row'
              justifyContent='space-between'
              py={1}
              px={2}
              sx={{ color: '#FFFFFF' }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color='#FFFFFF'
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: 'gray', ml: '6px' }}
                  />
                </Typography>
              </Link>
              <Stack
                direction='row'
                gap='20px'
                alignItems='center'
              >
                <Typography
                  variant='body1'
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ opacity: 0.7 }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={3}
          py={{ md: 1, xs: 5 }}
          justifyContent='center'
          alignItems='center'
        >
          {videos && (
            <Videos
              videos={videos}
              direction='column'
            />
          )}
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetails;
