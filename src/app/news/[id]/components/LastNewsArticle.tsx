import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LastNewsArticleList from './LastNewsArticleList';

export const LastNewsArticle = () => {
  return (
    <Box component={'section'} sx={{ mt: { xs: 10, lg: '120px' } }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', mb: '20px' }}>
        <Typography sx={{ fontSize: '36px', fontWeight: 700 }}>Последние новости</Typography>
        <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>Все новости</Typography>
          <TrendingFlatIcon />
        </Button>
      </Stack>

      <Divider sx={{ mb: '52px', width: '100%', height: '1px', backgroundColor: '#0D0D0D1A' }} />

      <LastNewsArticleList />
    </Box>
  );
};
