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
            top: '30%',
            left: '50%',
            zIndex: 999,
            transform: 'translate(-50%, -50%)',
            width: 109,
            height: 109,
            borderRadius: '50%',
            bgcolor: '#00000073',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <PlayArrowRoundedIcon sx={{ fontSize: 64 }} />
        </Button>
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '273px',
            flexShrink: 0,
            overflow: 'hidden',

            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '200px',
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 2,
            },
          }}
        >
          <Image
            src={image ?? ''}
            alt={title}
            height={273}
            width={200}
            className="news-card-image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.25s ease',
            }}
          />
        </Box>
        <Box sx={{ p: '20px' }}>
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
                color: 'var(--accent)',
                fontWeight: image ? 700 : 500,
                textAlign: 'right',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                minWidth: 0,
                borderRadius: 2,
                p: 0.5,
                px: 1,
                backgroundColor: '#16AD621A',
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
