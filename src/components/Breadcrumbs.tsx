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
              <Typography component="span" sx={{ color: '#0D0D0D', fontSize: 14 }}>
                —
              </Typography>
            )}

            {item.href && !isLast ? (
              <Typography
                component={Link}
                href={item.href}
                sx={{
                  color: '#0D0D0D',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'primary.main',
                  },
                  fontSize: 14,
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                component="span"
                sx={{
                  color: '#0D0D0D',
                  fontWeight: 400,
                  fontSize: 14,
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
