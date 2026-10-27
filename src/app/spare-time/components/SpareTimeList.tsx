import { Banner } from '@/app/home/components/news/Banner';
import PreviewCard, { PreviewCardProps } from '@/app/home/components/previewEvents/PreviewCard';
import { Box } from '@mui/material';

const events: PreviewCardProps[] = [
  {
    title: 'День города: программа на трёх площадках',
    date: { day: '12', month: 'августа' },
    district: 'Томск, пл. Новособорная',
    image: '/images/preview/preview1.png',
    href: '/preview/1',
    desc: 'Открытие в полдень на Новособорной, вечерний концерт и салют над Томью.',
  },
  {
    title: 'Ярмарка фермерских хозяйств области',
    date: { day: '18', month: 'августа' },
    district: 'Асино, площадь Ленина',
    image: '/images/preview/preview2.png',
    href: '/preview/2',
    desc: 'Разбор мер поддержки, гранты до 5 млн рублей и защита проектов перед комиссией.',
  },
  {
    title: 'Форум сельских предпринимателей «Своё дело»',
    date: { day: '22', month: 'августа' },
    district: 'Колпашево, ДК «Лесопильщик»',
    image: '/images/preview/preview3.png',
    href: '/preview/3',
    desc: 'Разбор мер поддержки, гранты до 5 млн рублей и защита проектов перед комиссией.',
  },
];

export default function SpareTimeList() {
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
        }}
      >
        {events.map((item) => (
          <PreviewCard key={item.href} {...item} />
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, minmax(0, 1fr))',
            lg: '1fr 2fr',
          },
          mt: 0,
          gap: { xs: 2, md: 3 },
        }}
      >
        <Banner isArea={false} />
        <Banner isArea={false} />
      </Box>

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
        {events.map((item) => (
          <PreviewCard key={item.href} {...item} />
        ))}
      </Box>
    </>
  );
}
