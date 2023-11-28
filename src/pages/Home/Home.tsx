import { Typography } from '@mui/material';
import { Navbar, PageWrapper } from '../../components';
import { useContent } from '../../content';

function Home() {
  const { t } = useContent();

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Typography variant="h2" component="h2">
          {t('home.title')}
        </Typography>
      </PageWrapper>
    </>
  );
}

export default Home;
