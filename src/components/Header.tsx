'use client';

import { Box, Button, List, ListItemButton, Stack, Typography } from '@mui/material';
import { IconLogo } from './icons/Icons';
import MobileToolsMenu, { socialLinks, tools } from './MobileToolsMenu';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchModal from './SearchModal';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

export const Header = () => {
  const pathName = usePathname();

  return (
    <Box component={'header'} sx={{ py: 4, px: 2 }}>
      <Stack
        direction={'row'}
        spacing={2}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Suspense fallback={null}>
          <MobileToolsMenu />
        </Suspense>
        <List sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flex: 1 }}>
          {tools.slice(1).map((tool) => (
            <ListItemButton
              key={tool.href}
              component="a"
              href={tool.href}
              sx={{
                mx: 0,
                borderRadius: 2,
                mb: 0.5,
                justifyContent: 'center',
                backgroundColor: pathName === tool.href ? 'var(--green-50)' : 'transparent',
              }}
            >
              <Typography
                align="center"
                sx={{
                  fontSize: { md: '0.7rem', lg: '1rem' },
                  color: pathName === tool.href ? 'var(--green-700)' : 'black',
                }}
              >
                {tool.title}
              </Typography>
            </ListItemButton>
          ))}
        </List>
        <Link style={{ flex: 1 }} href="/">
          <Stack
            direction={'row'}
            spacing={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconLogo />
            <Typography variant="body1" sx={{ color: '#000' }}>
              <b>СМИ.</b>Сердце Сибири
            </Typography>
          </Stack>
        </Link>
        <Stack direction={'row'} spacing={1} sx={{ flex: 1, justifyContent: 'flex-end' }}>
          <Stack
            direction={'row'}
            spacing={0.1}
            sx={{
              display: { xs: 'none', lg: 'flex' },
              borderRight: '0.3px solid grey',
              mr: 2,
              pr: 2,
            }}
          >
            {socialLinks.map((link, index) => (
              <Button
                LinkComponent={'a'}
                href={link.href}
                target="_blank"
                className="btnSocialHeader"
                sx={{ py: 1, px: 0, ':hover': {}, minWidth: '50px' }}
                key={index}
              >
                {link.icon}
              </Button>
            ))}
          </Stack>

          <SearchModal
            onSearch={(query) => {
              console.log('Поисковый запрос:', query);
            }}
          />

          <Button
            sx={{
              backgroundColor: 'primary.main',
              borderRadius: 3,
              py: 1,
              justifyContent: 'center',
              display: { xs: 'none', lg: 'flex' },
              flexDirection: 'column',
              ':hover': {
                boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
              },
            }}
          >
            <Stack direction={'row'} spacing={0.5}>
              <FmdGoodOutlinedIcon sx={{ fill: 'white', width: 14 }} />
              <Stack>
                <Typography sx={{ fontSize: '0.8rem' }} color="textSecondary">
                  Томские Новости
                </Typography>
                <Typography sx={{ fontSize: '0.6rem' }} color="textSecondary">
                  Томская область
                </Typography>
              </Stack>
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
