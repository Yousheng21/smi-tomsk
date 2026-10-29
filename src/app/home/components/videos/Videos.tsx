import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import VideoList from './VideoList';
import Link from 'next/link';

export const Videos = () => {
  return (
    <Box component={'section'}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h2">Видео</Typography>
        <Link href={'/video'}>
          <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: 'var(--accent)', fontWeight: 600 }}>Все видео</Typography>
            <TrendingFlatIcon />
          </Button>
        </Link>
      </Stack>

      <VideoList />
    </Box>
  );
};
