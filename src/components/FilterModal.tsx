'use client';

import { useState } from 'react';
import { Dialog, DialogContent, IconButton, Typography, Box, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { filters } from '@/constants/constants';
import { useAppStore } from '@/store/appStore';

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function FilterModal({ open, onClose }: FilterModalProps) {
  const { filter, setFilter } = useAppStore();

  const handleSelect = (id: number) => {
    setFilter(id);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      sx={{
        borderRadius: '16px',
        p: { xs: 1, sm: 1.5 },
      }}
    >
      <DialogContent sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}
        >
          <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Выберите фильтр</Typography>

          <IconButton onClick={onClose} aria-label="Закрыть">
            <CloseIcon />
          </IconButton>
        </Stack>

        <Stack spacing={1.5}>
          {filters.map((i) => {
            const isSelected = filter === i.id;

            return (
              <Box
                key={i.title}
                onClick={() => handleSelect(i.id)}
                sx={{
                  p: 2,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: isSelected ? 'primary.main' : 'transparent',
                  bgcolor: isSelected ? 'action.selected' : '#F3F4F6',
                  transition: 'background-color 0.2s, border-color 0.2s',
                  '&:hover': {
                    bgcolor: '#E5E7EB',
                  },
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>{i.title}</Typography>

                <Typography sx={{ fontSize: 14, mt: 0.5 }} color="text.secondary">
                  {i.region}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
