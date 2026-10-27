'use client';

import { useState, type FormEvent } from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  InputBase,
  Typography,
  Button,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

interface SearchModalProps {
  onSearch?: (query: string) => void;
}

export default function SearchModal({ onSearch }: SearchModalProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleClose = () => setOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = query.trim();
    if (!value) return;

    onSearch?.(value);
    handleClose();
  };

  return (
    <>
      {/* Кнопка открытия */}
      <IconButton disableRipple aria-label="Открыть поиск" onClick={() => setOpen(true)}>
        <SearchIcon fontSize="medium" />
      </IconButton>

      {/* Модальное окно */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        slotProps={{
          paper: {
            sx: {
              borderRadius: 3,
              mx: 2,
            },
          },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 2.5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Поиск
            </Typography>

            <IconButton
              disableRipple
              aria-label="Закрыть поиск"
              onClick={handleClose}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                minWidth: 0,
                gap: 1,
                px: 1.5,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
                '&:focus-within': {
                  borderColor: 'primary.main',
                },
              }}
            >
              <SearchIcon color="action" />

              <InputBase
                autoFocus
                fullWidth
                placeholder="Введите запрос..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                inputProps={{
                  'aria-label': 'Поисковый запрос',
                }}
                sx={{
                  py: 1.25,
                  fontSize: 15,
                }}
              />

              {query && (
                <IconButton
                  disableRipple
                  size="small"
                  aria-label="Очистить поиск"
                  onClick={() => setQuery('')}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              )}
            </Box>

            <Button
              type="submit"
              variant="contained"
              disabled={!query.trim()}
              sx={{
                minWidth: 'auto',
                px: { xs: 1.5, sm: 2.5 },
                py: 1.25,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: 'none',
              }}
            >
              Найти
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
