'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbs: BreadcrumbItem[] = [{ label: 'Главная', href: '/' }, ...items];

  return (
    <Box
      component="nav"
      aria-label="Хлебные крошки"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        mb: 3,
      }}
    >
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <Box
            key={`${item.label}-${index}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {index > 0 && (
              <Typography
                component="span"
                sx={{ color: 'text.primary', fontSize: { xs: '0.7rem', md: '1rem' } }}
              >
                —
              </Typography>
            )}

            {item.href && !isLast ? (
              <Typography
                component={Link}
                href={item.href}
                sx={{
                  color: 'text.primary',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  fontSize: { xs: '0.7rem', md: '1rem' },
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                component="span"
                sx={{
                  color: 'text.primary',
                  fontWeight: isLast ? 600 : 400,
                  fontSize: { xs: '0.7rem', md: '1rem' },
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>
        );
      })}
    </Box>
  );
}
