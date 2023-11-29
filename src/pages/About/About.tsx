import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Navbar, PageWrapper } from '../../components';
import { Image, DivSubTitle} from './About.styles';
import { useContent } from '../../content';

function About() {
  const {breakpoints} = useTheme();
  const islarge = useMediaQuery(breakpoints.up('md'));
  const {t} = useContent()
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Image
        style={{backgroundImage: 'url(/rectangle.png)'}}
        />
        <Typography
          variant={islarge ? 'h3' : 'h5'}
          sx={{
            marginTop: '10rem',
            textAlign: 'center'
          }}
        >
        {t('about.title')}
        </Typography>
        <DivSubTitle
          sx={{ 
          marginTop: islarge? '-4rem' : undefined,
          marginBottom: islarge? '-2rem': undefined}}
        >
          <img 
            src= '/lixo-pilha.svg'
          >
          </img>
          <Typography
            variant={islarge ? 'h5' : 'body1'}
            >
            {t('about.subTitle')}
          </Typography>
        </DivSubTitle>
        <div style={{
          padding: '0 4rem',
          width: '100%'
          }}>
          <Typography
            variant={islarge ? 'h6' : 'body2'}
            >
            {t('about.info')}
          </Typography>
          <Typography
            variant={islarge ? 'h6' : 'body2'}
            style={{fontWeight: '900'}}
            >
            {t('about.example')}
          </Typography>
          <img 
              src= '/descarte.svg'
              width= {islarge? '40%' : '90%'}
            >
            </img>
          <Typography
            variant="body2"
            style={{fontSize: islarge? '12px' : '6px'}}
          >
            {t('about.font')}
          </Typography>
        </div>
      </PageWrapper>
    </>
  );
}

export default About;
