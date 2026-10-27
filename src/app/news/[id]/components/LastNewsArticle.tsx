import { Box, Stack, Typography, Button } from '@mui/material';
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

      <LastNewsArticleList />
    </Box>
  );
};
