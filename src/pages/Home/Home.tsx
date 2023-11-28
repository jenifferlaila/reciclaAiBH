import { Navbar, PageWrapper, TitleCard, News } from '../../components';
import { news } from '../../content';

function Home() {
  return (
    <>
      <Navbar isHome />
      <PageWrapper>
        <TitleCard />
        <News news={news} />
      </PageWrapper>
    </>
  );
}

export default Home;
