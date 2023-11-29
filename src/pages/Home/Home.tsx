import { Typography } from '@mui/material';
import { Navbar, PageWrapper, TitleCard, News } from '../../components';
import { news, useContent } from '../../content';
import { NewsContainer } from './Home.style';

function Home() {
  const { t } = useContent();

  return (
    <>
      <Navbar isHome />
      <PageWrapper>
        <TitleCard />

        <Typography variant="h4" sx={{ mt: '10rem' }}>
          {t('home.news.title')}
        </Typography>
        <Typography variant="h6">{t('home.news.subtitle')}</Typography>
        <NewsContainer id="noticias">
          <News news={news} />
        </NewsContainer>
      </PageWrapper>
    </>
  );
}

export default Home;
