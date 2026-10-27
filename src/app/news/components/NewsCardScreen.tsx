'use client';

import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
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

export default function NewsCardScreen({
  title,
  date,
  district,
  image,
  href,
  index,
  area,
}: NewsCardProps) {
  return (
    <>
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
          minHeight: image ? '312px' : '140px',
          //   aspectRatio: { xs: image ? '4 / 3' : 'auto', lg: image ? '2 / 1' : 'auto' },
          overflow: 'hidden',
          borderRadius: 3,
          height: 'auto',
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
                color: 'var(--primary)',
                textAlign: 'right',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                minWidth: 0,
                borderRadius: 2,
                p: 0.5,
                px: 1,
                backgroundColor: !image ? 'var(--green-50)' : 'transparent',
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
