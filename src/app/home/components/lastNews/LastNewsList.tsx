import { Box, Button, Divider, Typography } from '@mui/material';
import LastNewsCard, { type LastNewsCardProps } from './LastNewsCard';
import { Banner } from '../news/Banner';

const lastNews: LastNewsCardProps[] = [
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/news5.png',
    href: '/news/4',
    area: 'first',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/news5.png',
    href: '/news/5',
    area: 'second',
  },
  {
    title: 'Левобережную дорогу достроят до конца 2027 года',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/6',
    area: 'third',
  },
  {
    title: 'Левобережную дорогу достроят до конца 2027 года',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/7',
    area: 'fourth',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/news4.jpg',
    href: '/news/8',
    area: 'fifth',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/news5.png',
    href: '/news/9',
    area: 'sixth',
  },
  {
    title:
      'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/news5.png',
    href: '/news/10',
    area: 'seventh',
  },
  {
    title: 'Левобережную дорогу достроят до конца 2027 года',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/11',
    area: 'eitgh',
  },
];

export default function LastNewsList() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: 'repeat(3, minmax(0, 1fr))',
          },
          gap: { xs: 2, md: 2 },
          gridTemplateAreas: {
            xs: 'none',
            sm: 'none',
            lg: `
        "first second third"
        "first second fourth"
        "fifth sixth seventh"
        "fifth eitgh banner"
      `,
          },
        }}
      >
        {lastNews.map((item) => (
          <LastNewsCard key={item.href} {...item} />
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
          gridTemplateAreas: 'none',
          gap: { xs: 2, md: 2 },
        }}
      >
        {lastNews.slice(0, 6).map((item) => (
          <LastNewsCard key={item.href} {...item} area={''} />
        ))}
      </Box>
      <Button
        sx={{ backgroundColor: 'black', borderRadius: 3, px: 2, py: 1, alignSelf: 'center', mt: 8 }}
      >
        <Typography color="textSecondary" align="center">
          Показать ещё новости
        </Typography>
      </Button>
    </Box>
  );
}
