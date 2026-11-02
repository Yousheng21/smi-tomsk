'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export interface PreviewCardProps {
  title: string;
  date: { day: string; month: string };
  district: string;
  image?: string | null;
  href?: string;
  desc: string;
}

export default function PreviewCard({
  title,
  date,
  district,
  image,
  href,
  desc,
}: PreviewCardProps) {
  return (
    <Box
      component={Link}
      href={href ?? '#'}
      sx={{
        position: 'relative',
        // width: '100%',
        // minWidth: 0,
        height: { xs: 312, lg: 525 },
        // aspectRatio: image ? '4 / 3' : 'auto',
        overflow: 'hidden',
        borderRadius: 3,
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
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: { xs: 70, lg: 100 },
            height: { xs: 70, lg: 100 },
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 22,
            borderBottomRightRadius: 22,
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: '32px', lg: '48px' },
              lineHeight: { xs: 0.7, lg: 0.8 },
            }}
            align="center"
            variant="h2"
          >
            {date.day}
          </Typography>
          <Typography
            sx={{ fontWeight: 800, fontSize: { xs: '10px', lg: '16px' } }}
            align="center"
            variant="caption"
          >
            {date.month}
          </Typography>
        </Box>
        <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: '10px', p: '20px' }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              fontWeight: 700,
              lineHeight: 1.3,
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

          <Typography
            sx={{
              fontWeight: 500,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: { xs: 1, lg: 2 },
              fontSize: '16px',
              textOverflow: 'ellipsis',
            }}
          >
            {desc}
          </Typography>

          {/* Дата слева, район справа */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              mt: '10px',
            }}
          >
            <FmdGoodOutlinedIcon />
            <Typography
              variant="caption"
              sx={{
                fontSize: 13,
                color: 'textSecondary',
                fontWeight: 500,
                textAlign: 'right',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                minWidth: 0,
                borderRadius: 2,
                backgroundColor: !image ? '#16AD621A' : 'transparent',
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
