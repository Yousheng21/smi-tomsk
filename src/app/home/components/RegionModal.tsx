import { useState } from 'react';
import { Dialog, DialogContent, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface RegionModalProps {
  open: boolean;
  onClose: () => void;
  regions?: string[];
  selectedRegion?: string;
  onSelect?: (region: string) => void;
}

export const defaultRegions = [
  'Александровский р-н',
  'Асиновский р-н',
  'Бакчарский р-н',
  'Зырянский р-н',
  'Каргасокский р-н',
  'Кожевниковский р-н',
  'Колпашевский р-н',
  'Кривошеинский р-н',
  'Молчановский р-н',
  'Парабельский р-н',
  'Первомайский р-н',
  'Тегульдетский р-н',
  'Чаинский р-н',
  'Шегарский р-н',
];

export default function RegionModal({
  open,
  onClose,
  regions = defaultRegions,
  selectedRegion,
  onSelect,
}: RegionModalProps) {
  const [internalRegion, setInternalRegion] = useState(selectedRegion ?? '');

  const currentRegion = selectedRegion ?? internalRegion;

  const handleSelect = (region: string) => {
    setInternalRegion(region);
    onSelect?.(region);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            m: 2,
            width: '100%',
          },
        },
      }}
    >
      <DialogContent sx={{ p: { xs: 2.5, sm: 3.5 } }}>
        {/* Заголовок */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Выберите свой район
          </Typography>

          <IconButton
            onClick={onClose}
            aria-label="Закрыть"
            size="small"
            sx={{ color: 'text.primary' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Список городов */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {regions.map((region) => {
            const isSelected = currentRegion === region;

            return (
              <Button
                key={region}
                variant="text"
                onClick={() => handleSelect(region)}
                aria-pressed={isSelected}
                sx={{
                  minWidth: 0,
                  px: 1.75,
                  py: 1,
                  borderRadius: 1.5,
                  textTransform: 'none',
                  fontSize: 14,
                  fontWeight: isSelected ? 600 : 400,
                  color: isSelected ? 'text.secondary' : 'text.primary',
                  backgroundColor: isSelected ? 'primary.light' : 'grey.100',
                  transition: 'background-color 0.2s, color 0.2s',
                  '&:hover': {
                    backgroundColor: isSelected ? 'primary.light' : 'grey.200',
                  },
                }}
              >
                {region}
              </Button>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
