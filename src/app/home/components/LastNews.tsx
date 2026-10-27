import { Box, Stack, Typography, Button } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LastNewsList from './lastNews/LastNewsList';
import Link from 'next/link';

export const LastNews = () => {
  return (
    <Box component={'section'}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h2">Последние новости</Typography>
        <Link href={'/news'}>
          <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>Все новости</Typography>
            <TrendingFlatIcon />
          </Button>
        </Link>
      </Stack>

      <LastNewsList />
    </Box>
  );
};
