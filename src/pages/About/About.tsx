import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button, Navbar, PageWrapper } from '../../components';
import { Image, DivSubTitle, LinkArea } from './About.styles';
import { useContent } from '../../content';
import { MeetingRoomRounded, QueryBuilderRounded } from '@mui/icons-material';

function About() {
  const { breakpoints } = useTheme();
  const isLarge = useMediaQuery(breakpoints.up('md'));
  const { t } = useContent();
  return (
    <>
      <Navbar />
      <PageWrapper>
        <Image style={{ backgroundImage: 'url(/rectangle.png)' }} />
        <Typography
          variant={isLarge ? 'h3' : 'h5'}
          sx={{
            marginTop: '10rem',
            textAlign: 'center',
          }}
        >
          {t('about.title')}
        </Typography>
        <DivSubTitle
          sx={{
            marginTop: isLarge ? '-4rem' : undefined,
            marginBottom: isLarge ? '-2rem' : undefined,
          }}
        >
          <img src="/lixo-pilha.svg" alt="Pilha de lixo" />
          <Typography variant={isLarge ? 'h5' : 'body1'}>{t('about.subTitle')}</Typography>
        </DivSubTitle>
        <div
          style={{
            padding: '0 4rem',
            width: '100%',
          }}
        >
          <Typography variant={isLarge ? 'h6' : 'body2'}>{t('about.info')}</Typography>

          <Typography variant={isLarge ? 'h6' : 'body2'} style={{ fontWeight: '900' }}>
            {t('about.example')}
          </Typography>

          <img src="/descarte.svg" width={isLarge ? '40%' : '90%'} alt="Descarte" />

          <Typography variant="body2" style={{ fontSize: isLarge ? '12px' : '6px' }}>
            {t('about.font')}
          </Typography>

          <LinkArea>
            <Typography variant={isLarge ? 'h6' : 'body2'}>{t('about.retrieval.label')}</Typography>

            <div className="action-area">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://prefeitura.pbh.gov.br/slu/informacoes/servicos/porta-a-porta#BARREIRO"
              >
                <Button variant="contained" sx={{ boxShadow: 8 }} startIcon={<MeetingRoomRounded />}>
                  {t('about.retrieval.door')}
                </Button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://prefeitura.pbh.gov.br/slu/informacoes/servicos/coleta-domiciliar"
              >
                <Button variant="contained" sx={{ boxShadow: 8, width: '100%' }} startIcon={<QueryBuilderRounded />}>
                  {t('about.retrieval.schedule')}
                </Button>
              </a>
            </div>
          </LinkArea>
        </div>
      </PageWrapper>
    </>
  );
}

export default About;
