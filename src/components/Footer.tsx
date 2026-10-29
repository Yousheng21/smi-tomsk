'use client';

import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { IconLogo } from './icons/Icons';
import { socialLinks } from './MobileToolsMenu';

export const Footer = () => {
  return (
    <Box component={'footer'} sx={{ backgroundColor: 'black', px: '16px', py: '60px' }}>
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Stack direction={'column'} sx={{ px: { xs: 0, xl: '16px' } }} spacing={{ xs: 3, lg: 7 }}>
          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
              <Button sx={{ p: 0 }}>
                <Stack
                  direction={'row'}
                  spacing={1}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    width: '100%',
                  }}
                >
                  <IconLogo />
                  <Typography
                    variant="body1"
                    sx={{ fontSize: { xs: 20, md: 26 } }}
                    color="textSecondary"
                  >
                    <b>СМИ.</b>Сердце Сибири
                  </Typography>
                </Stack>
              </Button>
              <Typography color="textSecondary">
                Региональные средства массовой информации{' '}
              </Typography>
            </div>

            <Stack spacing={'20px'}>
              <Typography sx={{ fontWeight: 700 }} color="textSecondary">
                Подписывайтесь на СМИ.Сердце Сибири:
              </Typography>

              <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 1.5, lg: 5 }}>
                <Stack
                  direction={'column'}
                  spacing={1.5}
                  sx={{ borderRight: { xs: 'none', lg: '1px solid #ffffff49' }, paddingRight: 2 }}
                >
                  <Typography color="textSecondary">Томские Новости</Typography>
                  <Stack direction={'row'} spacing={1} sx={{ mt: 3 }}>
                    {socialLinks?.map((link, index) => (
                      <Button
                        LinkComponent={'a'}
                        href={link.href}
                        target="_blank"
                        className="btnSocial"
                        sx={{
                          backgroundColor: '#FFFFFF33',
                          borderRadius: 1,
                          py: 1,
                          minWidth: '32px',
                          ':hover': {},
                        }}
                        key={index}
                      >
                        {link.icon}
                      </Button>
                    ))}
                  </Stack>

                  <Divider sx={{ opacity: { xs: 0.3, lg: 0 } }} />
                </Stack>

                <Stack
                  direction={'column'}
                  spacing={1.5}
                  sx={{ borderRight: { xs: 'none', lg: '1px solid #ffffff49' }, paddingRight: 2 }}
                >
                  <Typography color="textSecondary">Томское Предместье</Typography>
                  <Stack direction={'row'} spacing={1} sx={{ mt: 3 }}>
                    {socialLinks.map((link, index) => (
                      <Button
                        LinkComponent={'a'}
                        href={link.href}
                        target="_blank"
                        className="btnSocial"
                        sx={{
                          backgroundColor: '#FFFFFF33',
                          borderRadius: 1,
                          minWidth: '32px',
                          py: 1,
                          ':hover': {},
                        }}
                        key={index}
                      >
                        {link.icon}
                      </Button>
                    ))}
                  </Stack>
                  <Divider sx={{ opacity: { xs: 0.3, lg: 0 } }} />
                </Stack>

                <Stack direction={'column'} spacing={1.5}>
                  <Typography color="textSecondary">Заря Севера</Typography>
                  <Stack direction={'row'} spacing={1} sx={{ mt: 3 }}>
                    {socialLinks.map((link, index) => (
                      <Button
                        LinkComponent={'a'}
                        href={link.href}
                        target="_blank"
                        className="btnSocial"
                        sx={{
                          backgroundColor: '#FFFFFF33',
                          borderRadius: 1,
                          py: 1,
                          minWidth: '32px',
                          ':hover': {},
                        }}
                        key={index}
                      >
                        {link.icon}
                      </Button>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1, p: 1 }}>
              <Typography color="textSecondary">Телефон редакции:</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 20 }} color="textSecondary">
                8(000)00-00-000
              </Typography>
            </Box>
            <Box sx={{ flex: 1, p: 1 }}>
              <Typography color="textSecondary">Электронная почта:</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 20 }} color="textSecondary">
                info@smi.tomsk
              </Typography>
            </Box>
            <Box sx={{ flex: 1, p: 1 }}>
              <Typography color="textSecondary">Адрес:</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 20 }} color="textSecondary">
                634041 г. Томск, пр. Кирова, 36, офис 120
              </Typography>
            </Box>
          </Stack>

          <Stack direction={{ xs: 'column', lg: 'row' }} sx={{ justifyContent: 'space-between' }}>
            <Stack direction={'column'} spacing={'30px'} sx={{ p: 1, flex: 1 }}>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Название СМИ:</Typography>
                <Typography color="textSecondary">Томские Новости (Томская область)</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Учредитель:</Typography>
                <Typography color="textSecondary">{`Редакция газеты "Томские новости"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Сведения об организации:</Typography>
                <Typography color="textSecondary">
                  Использование и копирование материалов сайта допустимо только с письменного
                  разрешения редакции «Томских новостей»
                </Typography>
              </Box>
            </Stack>

            <Stack direction={'column'} spacing={'30px'} sx={{ p: 1, flex: 1 }}>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Название СМИ:</Typography>
                <Typography color="textSecondary">Томское Предместье (Томский район)</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Учредитель:</Typography>
                <Typography color="textSecondary">{`Редакция газеты "Томское Предместье"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Сведения об организации:</Typography>
                <Typography color="textSecondary">
                  Использование и копирование материалов сайта допустимо только с письменного
                  разрешения редакции «Томское Предместье»
                </Typography>
              </Box>
            </Stack>
            <Stack direction={'column'} spacing={'30px'} sx={{ p: 1, flex: 1 }}>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Название СМИ:</Typography>
                <Typography color="textSecondary">Заря Севера (Верхнекетский район)</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Учредитель:</Typography>
                <Typography color="textSecondary">{`Редакция газеты "Заря Севера"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: 'var(--grey-400)' }}>Сведения об организации:</Typography>
                <Typography color="textSecondary">
                  Использование и копирование материалов сайта допустимо только с письменного
                  разрешения редакции «Заря Севера»
                </Typography>
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ opacity: 0.3 }} />

          <Stack
            direction={{ xs: 'column', lg: 'row' }}
            sx={{ justifyContent: 'space-between' }}
            spacing={2}
          >
            <Typography sx={{ color: 'var(--grey-400)' }}>© 2026 Все права защищены.</Typography>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
              <Typography sx={{ color: 'var(--grey-400)', textDecoration: 'underline' }}>
                Договор оферты
              </Typography>
              <Typography sx={{ color: 'var(--grey-400)', textDecoration: 'underline' }}>
                Политика обработки персональных данных
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
