import Breadcrumbs from '@/components/Breadcrumbs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Box, Container, Stack, Typography } from '@mui/material';
import NewsArticle from './components/NewsArticle';
import { Suspense } from 'react';

interface NewsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const news = {
  title:
    'На V региональном этапе спартакиады пенсионеров России в Томской области команда «Клуба ветеранов спорта Томского района» стала лучшей среди команд сельских районов',
  image: '/images/news4.jpg',
  desc: `Томская команда победила в региональном этапе Спартакиады пенсионеров России

В выходные в Томске, в том числе и в спортивном комплексе 'Юпитер', проходил региональный этап Спартакиады пенсионеров России.

В турнире приняли участие женщины 55 лет и старше и мужчины 60 лет и старше – более 150 участников в составе команд Томского, Бакчарского, Верхнекетского, Кривошеинского, Тегульдетского, Молчановского, Чаинского, Зырянского, Кожевниковского, Первомайского районов, Томска и Северска.

Спортсмены "серебряного" возраста состязались в настольном теннисе, легкой атлетике, плавании, пулевой стрельбе, шахматах, дартсе, комбинированной эстафете.

Победителями в общекомандном зачёте стали спортсмены из Томска. На втором месте – команда Томского района, обладатели почётной бронзы - пенсионеры Северска.`,
  source: 'Томские Новости',
  district: 'Зырянский р-н',
};

export default async function NewsPage({ params }: NewsPageProps) {
  //   const { id } = await params;
  const newsTitle = 'Томская область';

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Container style={{ padding: 0 }} maxWidth="xl" sx={{ p: 0 }}>
        <Box
          sx={{
            pb: 5,
            pt: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            px: '16px',
          }}
        >
          <NewsArticle news={news} />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
