'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Box, Container, Typography } from '@mui/material';
import VideoScreenList from './components/VideoScreenList';

export default function VideoPage() {
  return (
    <>
      <Header />
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', px: 2, pb: 5, pt: 2 }}>
          <Typography align="center" variant="h2">
            Видео
          </Typography>
          <Typography align="center" variant="body2">
            Видео — СМИ.Сердце района
          </Typography>

          <VideoScreenList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
