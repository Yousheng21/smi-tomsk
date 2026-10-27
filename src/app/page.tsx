'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Container } from '@mui/material';
import { Home } from './home/Home';

export default function HomePage() {
  return (
    <>
      <Header />
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Home />
      </Container>
      <Footer />
    </>
  );
}
