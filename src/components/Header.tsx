'use client';

import { Box, Button, Container, List, ListItemButton, Stack, Typography } from '@mui/material';
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
    <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
      <Box component={'header'} sx={{ py: 4, mb: 5, px: { xs: '16px', md: 0 } }}>
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
          <List sx={{ display: { xs: 'none', md: 'flex' }, gap: '10px', flex: 1, m: 0 }}>
            {tools.slice(1).map((tool) => (
              <ListItemButton
                key={tool.href}
                component="a"
                href={tool.href}
                sx={{
                  mx: 0,
                  borderRadius: 2,
                  px: '10px',
                  maxWidth: 91,
                  //   mb: 0.5,
                  justifyContent: 'center',
                  backgroundColor: pathName === tool.href ? 'var(--green-50)' : 'transparent',
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    fontSize: 14,
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
              <Typography
                variant="body1"
                sx={{
                  color: '#000',
                  fontSize: { xs: 12, md: 26 },
                  whiteSpace: 'nowrap',
                  WebkitLineClamp: 1,
                  '@media (min-width: 400px)': {
                    fontSize: 20,
                  },
                }}
              >
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
                borderRadius: '50px',
                py: '12px',
                px: '16px',
                justifyContent: 'center',
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                // ':hover': {
                //   boxShadow: '0 4px 16px rgba(0,0,0,0.6)',
                // },
              }}
            >
              <Stack direction={'row'} spacing={0.5}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <FmdGoodOutlinedIcon sx={{ fill: 'white', width: 14, height: 20 }} />
                </Box>
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
    </Container>
  );
};
