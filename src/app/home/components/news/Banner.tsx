'use client';

import { useElementSize } from '@/utils/utils';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const Banner = ({
  isArea = true,
  areaName = 'banner',
}: {
  isArea?: boolean;
  areaName?: string;
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
        <Typography sx={{ letterSpacing: '14%' }}>РЕКЛАМА</Typography>
      </Box>
      <Stack sx={{ justifyItems: 'center', alignItems: 'center' }} spacing={1}>
        <Typography sx={{ fontWeight: 700, fontSize: 20 }}>
          Место для баннера {width}×{height}
        </Typography>
        <Typography sx={{ fontWeight: 500, fontSize: 16 }}>
          Слот принимает изображение или произвольный HTML-код из админки
        </Typography>
      </Stack>
    </Box>
  );
};
