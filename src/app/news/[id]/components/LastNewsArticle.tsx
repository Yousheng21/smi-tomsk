import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import LastNewsArticleList from './LastNewsArticleList';

export const LastNewsArticle = () => {
  return (
    <Box component={'section'} sx={{ mt: 10 }}>
      <Stack direction={'row'} sx={{ justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h2">Последние новости</Typography>
        <Button sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography>Все новости</Typography>
          <TrendingFlatIcon />
        </Button>
      </Stack>

      <Divider sx={{ my: 5, width: '100%', height: '1px', backgroundColor: '#0D0D0D1A' }} />

      <LastNewsArticleList />
    </Box>
  );
};
