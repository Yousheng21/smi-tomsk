'use client';

import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export interface VideoCardProps {
  title: string;
  date: string;
  district: string;
  image?: string | null;
  href?: string;
}

export default function VideoCard({ title, date, district, image, href }: VideoCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minWidth: 0,
        maxHeight: '426px',
        // aspectRatio: image ? '4 / 4' : 'auto',
        overflow: 'hidden',
        borderRadius: 3,
        height: 'auto',
        textDecoration: 'none',
        color: 'text.primary',
        backgroundColor: '#F3F3F3',
        transition: 'transform 0.25s ease',

        '@media (hover: hover)': {
          '&:hover': {
            transform: 'translateY(-3px)',
          },

          '&:hover .news-card-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      {/* Контент поверх изображения */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Button
          sx={{
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 64,
            height: 64,
            borderRadius: '50%',
            bgcolor: 'rgba(0, 0, 0, 0.65)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <PlayArrowRoundedIcon sx={{ fontSize: 42, ml: 0.4 }} />
        </Button>
        <Image
          src={image ?? ''}
          alt={title}
          height={273}
          width={200}
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: '100%',
            height: '60%',
          }}
        />
        <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
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
              WebkitLineClamp: 2,
              overflow: 'hidden',
              overflowWrap: 'anywhere',
              color: 'text.primary',
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
                backgroundColor: 'var(--green-50)',
              }}
            >
              {district}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
