'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { defaultCities } from '../home/components/CityModal';
import { defaultRegions } from '../home/components/RegionModal';
import { AboutListScreen } from './components/AboutListScreen';

export default function AboutPage() {
  const [currentRegion, setCurrentRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header />
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', px: 2, pb: 5, pt: 2 }}>
          <Typography align="center" variant="h2">
            О людях
          </Typography>
          <Typography align="center" variant="body2">
            Интервью с яркими личностями и рассказы о незаслуженно забытых творцах томской истории.
            Мы возвращаем достоинство именами людей, чей вклад в общее дело был перечеркнут эпохой
            или чиновничьим равнодушием.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              }}
            >
              {['Все', ...defaultCities, ...defaultRegions]
                .slice(0, isOpen ? [...defaultCities, ...defaultRegions].length : 8)
                .map((region) => {
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
                        borderRadius: 1.5,
                        textTransform: 'none',
                        fontSize: 14,
                        fontWeight: isSelected ? 600 : 400,
                        color: isSelected ? 'text.secondary' : 'text.primary',
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
              {[...defaultCities, ...defaultRegions].length > 7 && !isOpen && (
                <Button
                  onClick={() => setIsOpen(true)}
                  sx={{
                    minWidth: 0,
                    px: 1.75,
                    py: 1,
                    borderRadius: 1.5,
                    textTransform: 'none',
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'text.primary',
                    backgroundColor: 'grey.100',
                    transition: 'background-color 0.2s, color 0.2s',
                    '&:hover': {
                      backgroundColor: 'grey.200',
                    },
                  }}
                >
                  <Typography>...</Typography>
                </Button>
              )}
            </Box>
            {isOpen && (
              <Button onClick={() => setIsOpen(false)}>
                <Typography sx={{ textDecoration: 'underline' }}>Скрыть</Typography>
              </Button>
            )}
          </Box>

          <AboutListScreen />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
