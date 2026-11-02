'use client';

import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { IconLogo } from './icons/Icons';
import { socialLinks } from './MobileToolsMenu';

export const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{ backgroundColor: 'black', px: '16px', py: '60px', mt: { xs: '10px', lg: '48px' } }}
    >
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
                    sx={{ fontSize: { xs: 20, md: 26 }, fontWeight: 500 }}
                    color="textSecondary"
                  >
                    <b style={{ fontWeight: 800 }}>СМИ.</b>Сердце Сибири
                  </Typography>
                </Stack>
              </Button>
              <Typography color="textSecondary" sx={{ fontWeight: 500, fontSize: '16px' }}>
                Региональные средства массовой информации{' '}
              </Typography>
            </div>

            <Stack spacing={'20px'}>
              <Typography sx={{ fontWeight: 700, fontSize: '18px' }} color="textSecondary">
                Подписывайтесь на СМИ.Сердце Сибири:
              </Typography>

              <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 1.5, lg: 5 }}>
                <Stack
                  direction={'column'}
                  spacing={1.5}
                  sx={{ borderRight: { xs: 'none', lg: '1px solid #ffffff49' }, paddingRight: 2 }}
                >
                  <Typography color="textSecondary" sx={{ fontWeight: 500, fontSize: '16px' }}>
                    Томские Новости
                  </Typography>
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
                  <Typography color="textSecondary" sx={{ fontWeight: 500, fontSize: '16px' }}>
                    Томское Предместье
                  </Typography>
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
                  <Typography color="textSecondary" sx={{ fontWeight: 500, fontSize: '16px' }}>
                    Заря Севера
                  </Typography>
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
              <Typography sx={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF99' }}>
                Телефон редакции:
              </Typography>
              <Typography
                component="a"
                href="tel:+70000000000"
                sx={{ fontWeight: 700, fontSize: 20 }}
                color="textSecondary"
              >
                8(000)00-00-000
              </Typography>
            </Box>
            <Box sx={{ flex: 1, p: 1 }}>
              <Typography color="textSecondary">Электронная почта:</Typography>
              <Typography
                component="a"
                href="mailto:info@smi.tomsk"
                sx={{ fontWeight: 700, fontSize: 20 }}
                color="textSecondary"
              >
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
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Название СМИ:
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="textSecondary">
                  Томские Новости (Томская область)
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Учредитель:
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  color="textSecondary"
                >{`Редакция газеты "Томские новости"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Сведения об организации:
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="textSecondary">
                  Использование и копирование материалов сайта допустимо только с письменного
                  разрешения редакции «Томских новостей»
                </Typography>
              </Box>
            </Stack>

            <Stack direction={'column'} spacing={'30px'} sx={{ p: 1, flex: 1 }}>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Название СМИ:
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="textSecondary">
                  Томское Предместье (Томский район)
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Учредитель:
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 500 }}
                  color="textSecondary"
                >{`Редакция газеты "Томское Предместье"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Сведения об организации:
                </Typography>
                <Typography sx={{ fontSize: 16, fontWeight: 500 }} color="textSecondary">
                  Использование и копирование материалов сайта допустимо только с письменного
                  разрешения редакции «Томское Предместье»
                </Typography>
              </Box>
            </Stack>
            <Stack direction={'column'} spacing={'30px'} sx={{ p: 1, flex: 1 }}>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 16, fontWeight: 500 }}>
                  Название СМИ:
                </Typography>
                <Typography color="textSecondary" sx={{ fontSize: 16, fontWeight: 500 }}>
                  Заря Севера (Верхнекетский район)
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
                  Учредитель:
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ fontSize: 16, fontWeight: 500 }}
                >{`Редакция газеты "Заря Севера"`}</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF99' }}>Сведения об организации:</Typography>
                <Typography color="textSecondary" sx={{ fontSize: 16, fontWeight: 500 }}>
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
            <Typography sx={{ color: '#FFFFFF99', fontSize: 14, fontWeight: 500 }}>
              © 2026 Все права защищены.
            </Typography>
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={2}>
              <Typography
                component={'a'}
                href=""
                target="_blank"
                sx={{
                  color: '#FFFFFF99',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'underline',
                }}
              >
                Договор оферты
              </Typography>
              <Typography
                component={'a'}
                href=""
                target="_blank"
                sx={{
                  color: '#FFFFFF99',
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'underline',
                }}
              >
                Политика обработки персональных данных
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
