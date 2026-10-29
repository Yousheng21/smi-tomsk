import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CityModal from './CityModal';
import RegionModal from './RegionModal';

export const Filters = () => {
  const [filter, setFilter] = useState('all');
  const [openCity, setOpenCity] = useState(false);
  const [city, setCity] = useState('');
  const [openRegion, setOpenRegion] = useState(false);
  const [region, setRegion] = useState('');

  const resetFilter = () => {
    setCity('');
    setRegion('');
  };

  return (
    <Box
      component={'section'}
      sx={{ display: { xs: 'flex', lg: 'none' }, gap: 1, justifyContent: 'center' }}
    >
      <Button
        onClick={() => {
          setFilter('all');
          resetFilter();
        }}
        sx={{
          backgroundColor: filter === 'all' ? 'primary.main' : 'var(--grey-200)',
          borderRadius: '10px',

          py: 1.5,
          px: '20px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '13px',
            color: filter === 'all' ? 'white' : 'var(--grey-500)',
          }}
        >
          Вся область
        </Typography>
      </Button>
      <Button
        onClick={() => setOpenCity(true)}
        sx={{
          display: 'flex',
          gap: 1,
          borderRadius: '10px',

          py: 1.5,

          px: '12px',
          backgroundColor: filter === 'city' ? 'primary.main' : 'var(--grey-200)',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '13px',
            color: filter === 'city' ? 'white' : 'var(--grey-500)',
          }}
        >
          {city ? city : 'Мой город'}
        </Typography>
        <ExpandMoreIcon
          sx={{ width: 18, height: 18, fill: filter === 'city' ? 'white' : 'var(--grey-500)' }}
        />
      </Button>
      <Button
        onClick={() => setOpenRegion(true)}
        sx={{
          display: 'flex',
          gap: 1,
          borderRadius: '10px',
          py: 1.5,

          px: '12px',
          backgroundColor: filter === 'region' ? 'primary.main' : 'var(--grey-200)',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '13px',
            color: filter === 'region' ? 'white' : 'var(--grey-500)',
          }}
        >
          {region ? region : 'Мой район'}
        </Typography>
        <ExpandMoreIcon
          sx={{ width: 18, height: 18, fill: filter === 'region' ? 'white' : 'var(--grey-500)' }}
        />
      </Button>

      <CityModal
        open={openCity}
        onClose={() => setOpenCity(false)}
        selectedCity={city}
        onSelect={(c) => {
          setCity(c);
          setFilter('city');
          setOpenCity(false);
        }}
      />

      <RegionModal
        open={openRegion}
        onClose={() => setOpenRegion(false)}
        selectedRegion={region}
        onSelect={(c) => {
          setRegion(c);
          setFilter('region');
          setOpenRegion(false);
        }}
      />
    </Box>
  );
};
