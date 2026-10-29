'use client';

import { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Stack,
  Divider,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import {
  IconBurgerMenu,
  IconLogo,
  IconSocialMax,
  IconSocialOK,
  IconSocialTg,
  IconSocialVK,
} from './icons/Icons';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/store/appStore';
import { filters } from '@/constants/constants';
import FilterModal from './FilterModal';

export const tools = [
  {
    title: 'Главная',
    href: '/',
  },
  {
    title: 'Новости',
    href: '/news',
  },
  {
    title: 'О людях',
    href: '/people',
  },
  {
    title: 'Анонсы и события',
    href: '/spare-time',
  },
  {
    title: 'Видео',
    href: '/video',
  },
];

export const socialLinks = [
  {
    icon: <IconSocialMax />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialVK />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialOK />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialTg />,
    href: 'https://telegram.ru',
  },
];

export default function MobileToolsMenu() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const { filter } = useAppStore();

  const closeMenu = () => setOpen(false);

  const currentFilter = filters.filter((i) => i.id === filter)[0];

  return (
    <Box sx={{ justifySelf: 'flex-start', flex: 1, display: { xs: 'inline-flex', md: 'none' } }}>
      <IconButton aria-label="Открыть меню" sx={{ pl: '16px' }} onClick={() => setOpen(true)}>
        <IconBurgerMenu />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={closeMenu}
        variant="temporary"
        slotProps={{
          paper: {
            sx: {
              width: '98%',
              marginLeft: 0.5,
              marginTop: 0.5,
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 2,
              boxSizing: 'border-box',
              bgcolor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
          }}
        >
          <Button>
            <Stack
              direction={'row'}
              spacing={1}
              sx={{
                alignItems: 'center',
              }}
            >
              <IconLogo />
              <Typography variant="body1" sx={{ color: '#000' }}>
                <b>СМИ.</b>Сердце Сибири
              </Typography>
            </Stack>
          </Button>

          <IconButton aria-label="Закрыть меню" onClick={closeMenu}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ overflowY: 'auto', flex: 1, py: 1, px: 3 }}>
          <List>
            {tools.map((tool) => (
              <ListItemButton
                key={tool.href}
                component="a"
                href={tool.href}
                onClick={closeMenu}
                sx={{
                  mx: 0,
                  borderRadius: 2,
                  mb: 0.5,
                  justifySelf: 'flex-start',
                  backgroundColor: pathName === tool.href ? 'var(--green-50)' : 'transparent',
                }}
              >
                <ListItemText
                  sx={{ color: pathName === tool.href ? 'var(--green-700)' : 'black' }}
                  primary={tool.title}
                />
              </ListItemButton>
            ))}
          </List>

          <Button
            onClick={() => setOpenFilter(true)}
            sx={{
              backgroundColor: 'primary.main',
              width: '100%',
              mt: 3,
              borderRadius: 4,
              py: 2,
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              ':hover': {
                boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              },
            }}
          >
            <Stack direction={'row'} spacing={1}>
              <FmdGoodOutlinedIcon sx={{ fill: 'white' }} />
              <Typography variant="body1" color="textSecondary">
                {currentFilter.title}
              </Typography>
            </Stack>
            <Typography variant="caption" color="textSecondary">
              {currentFilter.region}
            </Typography>
          </Button>

          <Divider sx={{ background: 'red', my: 4 }} />

          <Typography>Томские Новости соц. сети:</Typography>

          <Stack direction={'row'} spacing={1} sx={{ mt: 3 }}>
            {socialLinks.map((link, index) => (
              <Button
                LinkComponent={'a'}
                href={link.href}
                target="_blank"
                className="btnSocial"
                sx={{ backgroundColor: 'var(--grey-200)', borderRadius: 1, py: 1, ':hover': {} }}
                key={index}
              >
                {link.icon}
              </Button>
            ))}
          </Stack>
        </Box>

        <FilterModal open={openFilter} onClose={() => setOpenFilter(false)} />
      </Drawer>
    </Box>
  );
}
