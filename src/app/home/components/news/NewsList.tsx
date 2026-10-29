import { Box } from '@mui/material';
import NewsCard, { type NewsCardProps } from './NewsCard';
import { Banner } from './Banner';

export const newsDefault: NewsCardProps[] = [
  {
    title: 'Велопробег «Зеленый пояс» соберет любителей спорта в воскресенье у Лагерного сада.',
    date: '11.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/news1.jpg',
    href: '/news/1',
    area: 'featured',
  },
  {
    title: 'На проспекте Ленина высаживают новые клены: зеленая аллея обновится к осени',
    date: '11.08.2026 • 13:10',
    district: 'Зырянский р-н',
    image: '/images/news2.jpg',
    href: '/news/2',
    area: 'second',
  },
  {
    title:
      'Движение по Коммунальному мосту частично перекроют на плановый ремонт деформационных швов.',
    date: '10.08.2026 • 09:30',
    district: 'Чаинский р-н',
    image: '/images/news3.jpg',
    href: '/news/',
    area: 'third',
  },
  {
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '10.08.2026 • 08:50',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/4',
    area: 'fourth',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/5',
    area: 'fifth',
  },
];

export default function NewsList({ news = newsDefault }: { news?: NewsCardProps[] }) {
  return (
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
        "featured featured filters"
        "second  third   fourth"
        "second  third    fifth"
        "banner  banner   banner"
      `,
        },
        gap: { xs: 2, md: 3 },
      }}
    >
      {news.map((item, index) => (
        <NewsCard key={item.href} {...item} index={index} />
      ))}
      <Banner />
    </Box>
  );
}
