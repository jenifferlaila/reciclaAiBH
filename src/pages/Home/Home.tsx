import { Navbar } from '../../components';
import { useContent } from '../../content';

function Home() {
  const { t } = useContent();

  return (
    <>
      <Navbar />
      <h2>{t('home.title')}</h2>
    </>
  );
}

export default Home;
