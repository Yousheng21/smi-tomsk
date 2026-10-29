import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Filters } from './components/Filters';
import NewsList from './components/news/NewsList';
import { PreviewEvents } from './components/previewEvents/PreviewEvents';
import { LastNews } from './components/LastNews';
import { Videos } from './components/videos/Videos';
import { useAppStore } from '@/store/appStore';
import { filters } from '@/constants/constants';

const headTitle: Record<number, string> = {
  1: 'Новости Томской области',
  2: 'Новости Томского района',
  3: 'Новости Верхнекетского района',
};

export const Home = () => {
  const { filter, setFilter } = useAppStore();

  return (
    <Box
      component={'main'}
      sx={{ px: 2, pb: 5, pt: 2, display: 'flex', flexDirection: 'column', gap: 6 }}
    >
      <Typography align="center" variant="h2">
        {headTitle[filter]}
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={1}
        sx={{
          backgroundColor: 'var(--grey-100)',
          borderRadius: { xs: 2, md: '50px' },
          alignSelf: { xs: 'auto', md: 'center' },
          p: 0.5,
          //   width: { xs: 'auto', md: 581 },
        }}
      >
        {filters.map((i) => (
          <Button
            key={i.id}
            onClick={() => setFilter(i.id)}
            sx={{
              backgroundColor: filter === i.id ? 'primary.main' : 'transparent',
              width: { xs: '100%', md: 197 },
              mt: 3,
              borderRadius: { xs: 2, md: '50px' },
              py: 1,
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              ':hover': {
                // boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              },
            }}
          >
            <Stack direction={'row'} sx={{ alignItems: 'flex-start' }} spacing={0.5}>
              {filter === i.id && (
                <FmdGoodOutlinedIcon
                  sx={{
                    fill: 'white',
                    width: 14,
                    height: { xs: 24, md: 20 },
                    alignSelf: 'flex-start',
                  }}
                />
              )}

              <Stack>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: { md: '13px' } }}
                  color={filter === i.id ? 'textSecondary' : 'textPrimary'}
                >
                  {i.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 400, fontSize: { md: '10px' } }}
                  color={filter === i.id ? 'textSecondary' : 'textPrimary'}
                >
                  {i.region}
                </Typography>
              </Stack>
            </Stack>
          </Button>
        ))}
      </Stack>
      <Filters />
      <NewsList />
      <PreviewEvents />
      <LastNews />
      <Videos />
    </Box>
  );
};
