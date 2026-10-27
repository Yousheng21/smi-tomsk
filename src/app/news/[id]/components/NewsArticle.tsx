import { LastNews } from '@/app/home/components/LastNews';
import { IconSocialMax, IconSocialVK, IconSocialOK, IconSocialTg } from '@/components/icons/Icons';
import { Box, Button, Stack, Typography } from '@mui/material';
import { LastNewsArticle } from './LastNewsArticle';

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
  return (
    <Box
      component="article"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Заголовок */}
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontWeight: 700,
          lineHeight: 1.3,
          mb: 3,
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
            mb: 2,
          },
        }}
      >
        {news.title}
      </Typography>

      {/* Изображение */}
      <Box
        component="img"
        src={news.image}
        alt={news.title}
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          maxHeight: 520,
          objectFit: 'cover',
          borderRadius: '16px',
        }}
      />

      {/* Источник */}
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          color: 'var(--grey-500)',
          mt: 1,
          mb: 3,
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
          '& p': {
            mb: 2,
          },
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
          mt: 3,
          p: 1,
          px: 2,
          backgroundColor: 'var(--grey-100)',
        }}
      >
        {news.district}
      </Typography>

      <Stack direction={'row'} spacing={1} sx={{ mt: 3 }}>
        {socialLinks.map((link, index) => (
          <Button
            LinkComponent={'a'}
            href={link.href}
            target="_blank"
            className="btnSocial"
            sx={{ py: 1, px: 0, ':hover': {}, minWidth: '40px', backgroundColor: 'var(--primary)' }}
            key={index}
          >
            {link.icon}
          </Button>
        ))}
      </Stack>

      <LastNewsArticle />
    </Box>
  );
}
