'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { Suspense, useState } from 'react';
import { defaultCities } from '../home/components/CityModal';
import { defaultRegions } from '../home/components/RegionModal';
import SpareTimeList from './components/SpareTimeList';

export default function SpareTimePage() {
  const [currentRegion, setCurrentRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            alignItems: 'center',
            px: { xs: 2, xl: 0 },
            pb: 5,
            pt: 2,
          }}
        >
          <Typography align="center" sx={{ fontSize: 36, fontWeight: 700, color: '#0D0D0D' }}>
            Анонсы и события
          </Typography>
          <Typography align="center" sx={{ maxWidth: 967, fontSize: '20px', fontWeight: 500 }}>
            Здесь нет высоких материй, только наша с вами повседневность. Гид по лучшим местам для
            отдыха, честные советы по открытию своего дела без иллюзий, разговоры о деньгах на
            пальцах и кулинарные батлы с поиском идеального маринада.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
            <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '16px' }}>
              Новости по тегам:
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 1,
                mt: 2,
                maxWidth: 967,
              }}
            >
              {['Все', ...defaultCities, ...defaultRegions].map((region) => {
                const isSelected = currentRegion === region;

                return (
                  <Button
                    key={region}
                    variant="text"
                    onClick={() => setCurrentRegion(region)}
                    aria-pressed={isSelected}
                    sx={{
                      minWidth: 0,
                      px: 1.75,
                      py: 1,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: 13,
                      fontWeight: 700,
                      color: isSelected ? 'text.secondary' : '#0D0D0D99',
                      backgroundColor: isSelected ? 'primary.light' : 'grey.100',
                      transition: 'background-color 0.2s, color 0.2s',
                      '&:hover': {
                        backgroundColor: isSelected ? 'primary.light' : 'grey.200',
                      },
                    }}
                  >
                    {region}
                  </Button>
                );
              })}
              {/* {[...defaultCities, ...defaultRegions].length > 7 && !isOpen && (
                <Button
                  onClick={() => setIsOpen(true)}
                  sx={{
                    minWidth: 0,
                    px: 1.75,
                    py: 1,
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#0D0D0D99',
                    backgroundColor: 'grey.100',
                    transition: 'background-color 0.2s, color 0.2s',
                    '&:hover': {
                      backgroundColor: 'grey.200',
                    },
                  }}
                >
                  <Typography>...</Typography>
                </Button>
              )} */}
            </Box>
            {isOpen && (
              <Button onClick={() => setIsOpen(false)}>
                <Typography sx={{ textDecoration: 'underline' }}>Скрыть</Typography>
              </Button>
            )}
          </Box>

          <SpareTimeList />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
