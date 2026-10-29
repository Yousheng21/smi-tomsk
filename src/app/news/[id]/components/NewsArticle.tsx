import { LastNews } from '@/app/home/components/LastNews';
import { IconSocialMax, IconSocialVK, IconSocialOK, IconSocialTg } from '@/components/icons/Icons';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LastNewsArticle } from './LastNewsArticle';
import Breadcrumbs from '@/components/Breadcrumbs';

export interface News {
  title: string;
  image: string;
  desc: string;
  source: string;
  district: string;
}

interface NewsArticleProps {
  news: News;
}

const socialLinks = [
  {
    icon: <IconSocialMax fill="white" />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialVK fill="white" />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialOK fill="white" />,
    href: 'https://telegram.ru',
  },
  {
    icon: <IconSocialTg fill="white" />,
    href: 'https://telegram.ru',
  },
];

export default function NewsArticle({ news }: NewsArticleProps) {
  const newsTitle = 'Томская область';

  return (
    <Box
      component="article"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          maxWidth: 967,
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          gap: '20px',
        }}
      >
        <Stack direction={'row'} spacing={'20px'}>
          <Breadcrumbs items={[{ label: 'Новости', href: '/news' }, { label: newsTitle }]} />
          <Typography sx={{ color: '#0D0D0D99' }}>15.08.2026, 10:00</Typography>
        </Stack>
        {/* Заголовок */}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            '@media (max-width:600px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          {news.title}
        </Typography>

        {/* Изображение */}
        <Box
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '300px',
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 2,
              borderRadius: '16px',
            },
          }}
        >
          <Box
            component="img"
            src={news.image}
            alt={news.title}
            sx={{
              display: 'block',
              width: '100%',
              height: 'auto',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: '16px',
            }}
          />
        </Box>

        {/* Источник */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            color: 'var(--grey-500)',
            fontSize: '0.8rem',
          }}
        >
          Источник: {news.source}
        </Typography>

        {/* Описание */}
        <Typography
          component="div"
          sx={{
            fontSize: '1rem',
            lineHeight: 1.8,
            whiteSpace: 'pre-line',
            overflowWrap: 'anywhere',
            '& p': {},
          }}
        >
          {news.desc}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            fontSize: 12,
            color: 'text.primary',
            alignSelf: 'flex-start',
            minWidth: 0,
            borderRadius: 2,
            p: 1,
            px: 2,
            backgroundColor: 'var(--grey-100)',
          }}
        >
          {news.district}
        </Typography>

        <Stack direction={'row'} spacing={1} sx={{}}>
          {socialLinks.map((link, index) => (
            <Button
              LinkComponent={'a'}
              href={link.href}
              target="_blank"
              className="btnSocial"
              sx={{
                py: 1,
                px: 0,
                ':hover': {},
                minWidth: '40px',
                backgroundColor: 'var(--primary)',
              }}
              key={index}
            >
              {link.icon}
            </Button>
          ))}
        </Stack>
      </Box>

      <LastNewsArticle />
    </Box>
  );
}
