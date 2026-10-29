import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import PreviewList from './PreviewList';
import Link from 'next/link';

export const PreviewEvents = () => {
  return (
    <Box component={'section'}>
      <Stack
        direction={'row'}
        sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}
      >
        <Typography sx={{ fontSize: { xs: 20, md: 36, fontWeight: 700 } }}>
          Анонсы и события
        </Typography>
        <Link href={'/spare-time'}>
          <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ color: 'var(--accent)', fontWeight: 600 }}>Все анонсы</Typography>
            <TrendingFlatIcon />
          </Button>
        </Link>
      </Stack>

      <PreviewList />
    </Box>
  );
};
