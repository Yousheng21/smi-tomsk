'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Box, Container, Typography } from '@mui/material';
import VideoScreenList from './components/VideoScreenList';
import { Suspense } from 'react';

export default function VideoPage() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: '32px', px: 2, pb: 5, pt: '8px' }}
        >
          <Typography align="center" sx={{ fontSize: 36, fontWeight: 700, color: '#0D0D0D' }}>
            Видео
          </Typography>
          <Typography align="center" sx={{ fontSize: '20px', fontWeight: 500 }}>
            Видео — <b>СМИ</b>.Сердце района
          </Typography>

          <VideoScreenList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
