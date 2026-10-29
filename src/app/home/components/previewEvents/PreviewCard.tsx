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
            p: 2,
            pb: 1.5,
            px: 1.5,
            justifySelf: 'start',
            alignSelf: 'flex-start',
            borderTopLeftRadius: 3,
            borderBottomRightRadius: 20,
          }}
        >
          <Typography sx={{ lineHeight: 0.5 }} align="center" variant="h2">
            {date.day}
          </Typography>
          <Typography sx={{ fontWeight: 800 }} align="center" variant="caption">
            {date.month}
          </Typography>
        </Box>
        <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 1.5, p: 2 }}>
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
              whiteSpace: 'nowrap',
              overflow: 'hidden',
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
              gap: 1,
            }}
          >
            <FmdGoodOutlinedIcon />
            <Typography
              variant="caption"
              sx={{
                fontSize: 12,
                color: 'textSecondary',
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
    </Box>
  );
}
