import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LastNewsList from './lastNews/LastNewsList';
import Link from 'next/link';

export const LastNews = () => {
  return (
    <Box component={'section'}>
      <Stack
        direction={'row'}
        sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
      >
        <Typography sx={{ fontSize: { xs: 20, md: 36, fontWeight: 700 } }}>
          Последние новости
        </Typography>
        <Link href={'/news'}>
          <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: 'var(--accent)', fontWeight: 600 }}>Все новости</Typography>
            <TrendingFlatIcon />
          </Button>
        </Link>
      </Stack>

      <LastNewsList />
    </Box>
  );
};
