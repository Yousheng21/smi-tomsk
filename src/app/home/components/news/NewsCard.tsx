'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import { defaultCities } from '../CityModal';
import { defaultRegions } from '../RegionModal';
import { useState } from 'react';

export interface NewsCardProps {
  title: string;
  date: string;
  district: string;
  image?: string | null;
  href?: string;
  index?: number;
  area?: string;
}

export default function NewsCard({
  title,
  date,
  district,
  image,
  href,
  index,
  area,
}: NewsCardProps) {
  const isDesktop1200 = useMediaQuery('(min-width: 1200px)');
  const [currentRegion, setCurrentRegion] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filters = ['Все', ...defaultCities, ...defaultRegions];

  return (
    <>
      {isDesktop1200 && index === 1 && (
        <Box>
          <Typography variant="h6">Новости по тегам:</Typography>
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' },
              flexWrap: 'wrap',
              gap: 1,
              gridArea: 'filters',
              mt: 2,
            }}
          >
            {filters.slice(0, isOpen ? filters.length : 15).map((region) => {
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
            {filters.length > 14 && !isOpen && (
              <Button
                onClick={() => setIsOpen(true)}
                sx={{
                  minWidth: 0,
                  px: 1.75,
                  py: 1,
                  borderRadius: '50px',
                  textTransform: 'none',
                  fontSize: 13,
                  fontWeight: 400,
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
            )}
          </Box>
          {isOpen && (
            <Button onClick={() => setIsOpen(false)}>
              <Typography sx={{ textDecoration: 'underline' }}>Скрыть</Typography>
            </Button>
          )}
        </Box>
      )}
      <Box
        component={Link}
        href={href ?? '#'}
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          width: '100%',
          minWidth: 0,
          height: image ? '312px' : '140px',
          overflow: 'hidden',
          borderRadius: 3,
          // height: 'auto',
          textDecoration: 'none',
          color: '#fff',
          backgroundColor: '#F3F3F3',
          backgroundImage: image
            ? `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.15) 65%, transparent 100%), url("${image}")`
            : '#F3F3F3',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'transform 0.25s ease',

          '@media (hover: hover)': {
            '&:hover': {
              transform: 'translateY(-3px)',
            },

            '&:hover .news-card-image': {
              transform: 'scale(1.05)',
            },
          },
          gridArea: {
            xs: 'auto',
            lg: area,
          },
        }}
      >
        {/* Контент поверх изображения */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            p: { xs: 1.5, sm: 2 },
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 1.5,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              overflowWrap: 'anywhere',
              color: image ? 'white' : 'text.primary',
            }}
          >
            {title}
          </Typography>

          {/* Дата слева, район справа */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1,
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: 12,
                color: image ? 'white' : 'text.primary',
                flexShrink: 0,
                fontWeight: 400,
              }}
            >
              {date}
            </Typography>

            <Typography
              variant="caption"
              sx={{
                fontSize: 12,
                color: image ? 'var(--primary)' : 'var(--accent)',
                fontWeight: image ? 700 : 500,
                textAlign: 'right',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                minWidth: 0,
                borderRadius: 2,
                p: 0.5,
                px: 1,
                backgroundColor: !image ? '#16AD621A' : 'transparent',
              }}
            >
              {district}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
