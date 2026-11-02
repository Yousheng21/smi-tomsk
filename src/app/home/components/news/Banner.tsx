'use client';

import { useElementSize } from '@/utils/utils';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Banner = ({
  isArea = true,
  areaName = 'banner',
  sx,
}: {
  isArea?: boolean;
  areaName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
}) => {
  const { ref, width, height } = useElementSize<HTMLDivElement>();
  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0D0D0D1A',
        color: '#0D0D0D99',
        borderRadius: '20px',
        height: '312px',
        width: '100%',
        p: '20px',
        gap: 7,
        gridArea: isArea ? { xs: 'auto', lg: areaName } : 'auto',
        ...sx,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '12px 12px',
          borderRadius: '13px',
          alignSelf: 'flex-start',
        }}
      >
        <Typography sx={{ letterSpacing: '14%', fontSize: '13px', fontWeight: 600 }}>
          РЕКЛАМА
        </Typography>
      </Box>
      <Stack sx={{ alignSelf: 'center', px: { xs: 2, lg: 10 } }} spacing={1}>
        <Typography align="center" sx={{ fontWeight: 700, maxWidth: 329, fontSize: 20 }}>
          Место для баннера {width}×{height + 40}
        </Typography>
        <Typography align="center" sx={{ fontWeight: 500, maxWidth: 329, fontSize: 16 }}>
          Слот принимает изображение или произвольный HTML-код из админки
        </Typography>
      </Stack>
    </Box>
  );
};
