import { useState } from 'react';
import { Dialog, DialogContent, Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CityModalProps {
  open: boolean;
  onClose: () => void;
  cities?: string[];
  selectedCity?: string;
  onSelect?: (city: string) => void;
}

export const defaultCities = ['г. Томск', 'г. Северск (ЗАТО)', 'г. Стрежевой', 'г. Кедровый'];

export default function CityModal({
  open,
  onClose,
  cities = defaultCities,
  selectedCity,
  onSelect,
}: CityModalProps) {
  const [internalCity, setInternalCity] = useState(selectedCity ?? '');

  const currentCity = selectedCity ?? internalCity;

  const handleSelect = (city: string) => {
    setInternalCity(city);
    onSelect?.(city);
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
            Выберите свой город
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
          {cities.map((city) => {
            const isSelected = currentCity === city;

            return (
              <Button
                key={city}
                variant="text"
                onClick={() => handleSelect(city)}
                aria-pressed={isSelected}
                sx={{
                  minWidth: 0,
                  px: 1.75,
                  py: 1,
                  borderRadius: '50px',
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
                {city}
              </Button>
            );
          })}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
