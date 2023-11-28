import { Navbar, PageWrapper } from '../../components';
import { TitleCard } from './components';

function Home() {
  return (
    <>
      <Navbar isHome />
      <PageWrapper>
        <TitleCard />
      </PageWrapper>
    </>
  );
}

export default Home;
