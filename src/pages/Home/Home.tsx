import { Paper } from '@mui/material';
import { Navbar, PageWrapper, TitleCard, News } from '../../components';
import { news } from '../../content';

function Home() {
  return (
    <>
      <Navbar isHome />
      <PageWrapper>
        <TitleCard />

        <Paper id="noticias" sx={{ width: '90%', mt: '10rem', p: '2rem', boxShadow: 0 }}>
          <News news={news} />
        </Paper>
      </PageWrapper>
    </>
  );
}

export default Home;
