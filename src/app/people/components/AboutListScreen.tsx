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
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/7',
    area: 'seven',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/8',
    area: 'eight',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/9',
    area: 'nine',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/10',
    area: 'ten',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/11',
    area: 'eleven',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/about/about1.jpg',
    href: '/news/12',
    area: 'twelwe',
  },
  {
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/13',
    area: 'thirteen',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/14',
    area: 'fourteen',
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
      <Divider sx={{ my: 5, width: '100%', height: '1px', backgroundColor: '#0D0D0D1A' }} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          gridTemplateAreas: {
            xs: 'none',
            sm: 'none',
            lg: `
        "seven nine ten"
        "eight nine ten"
        "eleven twelwe thirteen"
        "eleven twelwe fourteen"
      `,
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {aboutDefault.slice(6).map((item, index) => (
          <AboutCardScreen key={item.href} {...item} index={index} />
        ))}
      </Box>
      <Button
        sx={{
          backgroundColor: 'black',
          borderRadius: 3,
          px: 2,
          py: 1,
          alignSelf: 'center',
        }}
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
