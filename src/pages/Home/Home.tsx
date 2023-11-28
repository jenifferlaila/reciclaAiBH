import { Navbar, PageWrapper, TitleCard, News } from '../../components';
import { news } from '../../content';
import { NewsContainer } from './Home.style';

function Home() {
  return (
    <>
      <Navbar isHome />
      <PageWrapper>
        <TitleCard />

        <NewsContainer id="noticias">
          <News news={news} />
        </NewsContainer>
      </PageWrapper>
    </>
  );
}

export default Home;
