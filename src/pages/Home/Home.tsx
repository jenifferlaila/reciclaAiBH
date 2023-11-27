import { useContent } from '../../content';

function Home() {
  const { t } = useContent();

  return <h2>{t('home.title')}</h2>;
}

export default Home;
