import { Banner } from '@/app/home/components/news/Banner';
import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import NewsCardScreen, { NewsCardProps } from './NewsCardScreen';

export const newsDefaultScreen: NewsCardProps[] = [
  {
    title:
      'Сотрудники МЧС по Томской области предупреждают велосипедистов о сокращении светового дня и призывают использовать светоотражающие элементы в осенний период.',
    date: '08.09.2026 • 08:15',
    district: 'Зырянский р-н',
    image: '/images/article/article2.jpg',
    href: '/news/1',
    area: 'featured',
  },
  {
    title: 'Томский художник представил арт-объект «Эхо Университетской рощи» в центре города.',
    date: '07.08.2026 • 13:10',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/2',
    area: 'second',
  },
  {
    title: 'В новом ЖК на Иркутском тракте тестируют «умные» лифты с голосовым управлением.',
    date: '10.08.2026 • 09:30',
    district: 'Чаинский р-н',
    image: null,
    href: '/news/',
    area: 'third',
  },
  {
    title:
      'В Томской области стартовал сезон «тихой охоты», грибники возвращаются с полными корзинами лисичек.',
    date: '10.08.2026 • 08:50',
    district: 'Зырянский р-н',
    image: '/images/article/article7.jpg',
    href: '/news/4',
    area: 'fourth',
  },
  {
    title:
      'Жители Томска все чаще выбирают собак породы корги, сообщают в Томском клубе служебного собаководства.',
    date: '07.09.2026 • 14:12',
    district: 'Зырянский р-н',
    image: '/images/article/article1.jpg',
    href: '/news/5',
    area: 'fifth',
  },
  {
    title:
      'Жители Томского района принимают участие в конкурсе «Семейные рецепты» и готовят традиционные блюда сибирской кухни.',
    date: '07.09.2026 • 13:12',
    district: 'Зырянский р-н',
    image: '/images/article/article8.jpg',
    href: '/news/6',
    area: 'sixth',
  },
  {
    title:
      'Глава Томска провел выездное совещание на объектах благоустройства, где проверил ход выполнения работ по муниципальным контрактам.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/7',
    area: 'seven',
  },
  {
    title:
      'В администрации Томской области состоялось очередное заседание оперативного штаба по мониторингу цен на социально значимые продукты питания.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/8',
    area: 'eight',
  },
  {
    title:
      'В Томской области началась реализация нового инвестиционного проекта в сфере промышленного строительства.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/article/article4.jpg',
    href: '/news/9',
    area: 'nine',
  },
  {
    title:
      'В Бакчарском районе Томской области зафиксированы случаи выхода диких животных на дорогу, водителей призывают быть внимательными.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/article/article7.jpg',
    href: '/news/10',
    area: 'ten',
  },
  {
    title:
      'В Томской области подвели итоги лесовосстановительной кампании, площадь высаженных деревьев превысила показатели прошлого года.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/article/article9.jpg',
    href: '/news/11',
    area: 'eleven',
  },
  {
    title:
      'В библиотеке имени А.С. Пушкина в Томске прошла презентация новых краеведческих изданий о истории региона.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: '/images/article/article10.jpg',
    href: '/news/12',
    area: 'twelwe',
  },
  {
    title:
      'Сотрудники ГИБДД по Томской области за прошедшую неделю зафиксировали снижение количества дорожно-транспортных происшествий в сравнении с аналогичным периодом прошлого года.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/13',
    area: 'thirteen',
  },
  {
    title:
      'В Томском государственном университете стартовала научно-практическая конференция с участием представителей ведущих образовательных учреждений Сибирского федерального округа.',
    date: '10.08.2026 • 09:30',
    district: 'Зырянский р-н',
    image: null,
    href: '/news/14',
    area: 'fourteen',
  },
];

export const NewsListScreen = () => {
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
        "featured  featured fourth"
        "banner fifth sixth"
      `,
          },
        }}
      >
        {newsDefaultScreen.slice(0, 6).map((item, index) => (
          <NewsCardScreen key={item.href} {...item} index={index} />
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
        {newsDefaultScreen.slice(6).map((item, index) => (
          <NewsCardScreen key={item.href} {...item} index={index} />
        ))}
      </Box>
      <Button
        sx={{
          backgroundColor: 'black',
          borderRadius: 3,
          px: 2,
          py: 1,
          alignSelf: 'center',
          mt: '32px',
        }}
      >
        <Typography color="textSecondary" align="center">
          Показать ещё новости
        </Typography>
      </Button>
    </>
  );
};
