import { Banner } from '@/app/home/components/news/Banner';
import VideoCard, { VideoCardProps } from '@/app/home/components/videos/VideoCard';
import { Box, Button, Typography } from '@mui/material';

const videos: VideoCardProps[] = [
  {
    title: 'В Томске на рельсы вышли новые низкопольные трамваи',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/1',
  },
  {
    title:
      'Завершено строительство нового пассажирского терминала в аэропорту Томск » Авиация России',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/2',
  },
  {
    title:
      'Достопримечательности Томска: незабываемая архитектурная эклектика на главной площади, сибирские рестораны с жареным',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/3',
  },
  {
    title: 'В Томске на рельсы вышли новые низкопольные трамваи',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/4',
  },
  {
    title:
      'Завершено строительство нового пассажирского терминала в аэропорту Томск » Авиация России',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/5',
  },
  {
    title:
      'Достопримечательности Томска: незабываемая архитектурная эклектика на главной площади, сибирские рестораны с жареным',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/6',
  },
  {
    title: 'В Томске на рельсы вышли новые низкопольные трамваи',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/7',
  },
  {
    title:
      'Завершено строительство нового пассажирского терминала в аэропорту Томск » Авиация России',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/8',
  },
  {
    title:
      'Достопримечательности Томска: незабываемая архитектурная эклектика на главной площади, сибирские рестораны с жареным',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/about/about1.png',
    href: '/video/9',
  },
];

export default function VideoScreenList() {
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
          mt: 8,
          gap: { xs: 2, md: 3 },
        }}
      >
        {videos.map((item) => (
          <VideoCard key={item.href} {...item} />
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
          Показать ещё
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
}
