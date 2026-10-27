import { Banner } from '@/app/home/components/news/Banner';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import AboutCardScreen, { AboutCardProps } from './AboutCardScreen';

export const aboutDefault: AboutCardProps[] = [
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '11.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/1',
    area: 'featured',
  },
  {
    title: 'На проспекте Ленина высаживают новые клены: зеленая аллея обновится к осени',
    date: '11.08.2026 • 13:10',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/2',
    area: 'second',
  },
  {
    title:
      'Движение по Коммунальному мосту частично перекроют на плановый ремонт деформационных швов.',
    date: '10.08.2026 • 09:30',
    district: 'Чаинский р-н',
    image: null,
    href: '/news/',
    area: 'third',
  },
  {
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '10.08.2026 • 08:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/4',
    area: 'fourth',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/5',
    area: 'fifth',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/6',
    area: 'sixth',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/7',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/8',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/9',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/10',
  },
];

export const AboutListScreen = () => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
          gridTemplateAreas: {
            xs: 'none',
            sm: 'none',
            lg: `
        "featured featured second"
        "featured  featured third"
        "featured featured fourth"
        "banner fifth sixth"
      `,
          },
        }}
      >
        {aboutDefault.slice(0, 6).map((item, index) => (
          <AboutCardScreen key={item.href} {...item} index={index} />
        ))}
        <Banner />
      </Box>
      <Divider sx={{ my: 5 }} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {aboutDefault.slice(7).map((item, index) => (
          <AboutCardScreen key={item.href} {...item} index={index} />
        ))}
        <Banner isArea={false} />
      </Box>
      <Button
        sx={{ backgroundColor: 'black', borderRadius: 3, px: 2, py: 1, alignSelf: 'center', mt: 8 }}
      >
        <Typography color="textSecondary" align="center">
          Показать ещё новости
        </Typography>
      </Button>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: '1fr 2fr',
          },
          mt: 10,
          gap: { xs: 2, md: 3 },
        }}
      >
        <Banner isArea={false} />
        <Banner isArea={false} />
      </Box>
    </>
  );
};
