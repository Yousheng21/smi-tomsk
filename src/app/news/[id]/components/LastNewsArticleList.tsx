import { Box } from '@mui/material';
import LastNewsArticleCard, { type LastNewsArticleCardProps } from './LastNewsArticleCard';
import { Banner } from '@/app/home/components/news/Banner';

const lastNews: LastNewsArticleCardProps[] = [
  {
    title:
      'Сотрудники МЧС по Томской области предупреждают велосипедистов о сокращении светового дня и призывают использовать светоотражающие элементы в осенний период.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article2.jpg',
    href: '/news/4',
    area: 'first',
  },
  {
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article3.jpg',
    href: '/news/5',
    area: 'second',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article5.jpg',
    href: '/news/6',
    area: 'third',
  },
  {
    title:
      'В Томской области стартовал сезон «тихой охоты», грибники возвращаются с полными корзинами лисичек.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article7.jpg',
    href: '/news/7',
    area: 'featured',
  },
  {
    title:
      'Жители Томска все чаще выбирают собак породы корги, сообщают в Томском клубе служебного собаководства.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/article/article1.jpg',
    href: '/news/8',
    area: 'fourth',
  },
  {
    title:
      'Жители Томского района принимают участие в конкурсе «Семейные рецепты» и готовят традиционные блюда сибирской кухни.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article8.jpg',
    href: '/news/9',
    area: 'fifth',
  },
  {
    title:
      'В Томской области началась реализация нового инвестиционного проекта в сфере промышленного строительства.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article4.jpg',
    href: '/news/10',
    area: 'sixth',
  },
  {
    title:
      'В Бакчарском районе Томской области зафиксированы случаи выхода диких животных на дорогу, водителей призывают быть внимательными.',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/article/article6.jpg',
    href: '/news/11',
    area: 'seventh',
  },
];

export default function LastNewsArticleList() {
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
          gridTemplateAreas: {
            xs: 'none',
            sm: 'none',
            lg: `
        "first second third"
        "featured fourth fifth"
        "featured sixth seventh"
        "banner banner banner"
      `,
          },
          gap: { xs: 2, md: 2 },
        }}
      >
        {lastNews.map((item) => (
          <LastNewsArticleCard key={item.href} {...item} />
        ))}
        <Banner />
      </Box>
    </Box>
  );
}
