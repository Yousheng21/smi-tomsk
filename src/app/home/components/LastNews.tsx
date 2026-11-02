import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LastNewsList from './lastNews/LastNewsList';
import Link from 'next/link';

export const LastNews = () => {
  return (
    <Box component={'section'}>
      <Stack
        direction={'row'}
        sx={{ justifyContent: 'space-between', alignItems: 'center', mb: { xs: '25px', lg: 0 } }}
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

      <Divider
        sx={{
          my: '20px',
          width: '100%',
          mb: '52px',
          height: '1px',
          backgroundColor: '#0D0D0D1A',
          display: { xs: 'none', lg: 'inline-flex' },
        }}
      />

      <LastNewsList />
    </Box>
  );
};
