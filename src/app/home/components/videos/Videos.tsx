import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import VideoList from './VideoList';
import Link from 'next/link';

export const Videos = () => {
  return (
    <Box component={'section'}>
      <Stack
        direction={'row'}
        sx={{ justifyContent: 'space-between', py: { xs: '15.5px', lg: '20px' } }}
      >
        <Typography variant="h2">Видео</Typography>
        <Link href={'/video'}>
          <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: 'var(--accent)', fontWeight: 600 }}>Все видео</Typography>
            <TrendingFlatIcon />
          </Button>
        </Link>
      </Stack>

      <Divider
        sx={{
          mt: 0,
          width: '100%',
          mb: '52px',
          height: '1px',
          backgroundColor: '#0D0D0D1A',
          display: { xs: 'none', lg: 'inline-flex' },
        }}
      />

      <VideoList />
    </Box>
  );
};
