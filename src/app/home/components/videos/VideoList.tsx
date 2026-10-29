import { Box } from '@mui/material';
import VideoCard, { type VideoCardProps } from './VideoCard';
import { Banner } from '../news/Banner';

const videos: VideoCardProps[] = [
  {
    title: 'В Томске на рельсы вышли новые низкопольные трамваи',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/videos/video1.png',
    href: '/video/1',
  },
  {
    title:
      'Завершено строительство нового пассажирского терминала в аэропорту Томск » Авиация России',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/videos/video2.png',
    href: '/video/2',
  },
  {
    title:
      'Достопримечательности Томска: незабываемая архитектурная эклектика на главной площади, сибирские рестораны с жареным',
    date: '07.08.2026 • 14:50',
    district: 'Зырянский р-н',
    image: '/images/videos/video3.png',
    href: '/video/3',
  },
];

export default function VideoList() {
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
        {videos.map((item) => (
          <VideoCard key={item.href} {...item} />
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
