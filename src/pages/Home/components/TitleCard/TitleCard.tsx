import { useMediaQuery, useTheme } from '@mui/material';
import { useContent } from '../../../../content';
import { ActionArea, ImageContainer, Title, Wrapper } from './TitleCard.style';
import { Button } from '../../../../components';

function TitleCard() {
  const { t } = useContent();

  const { breakpoints } = useTheme();
  const isLarge = useMediaQuery(breakpoints.up('md'));

  return (
    <Wrapper sx={{ minHeight: { xs: '85vh', md: 'unset' }, width: { xs: '100%', lg: undefined } }}>
      <ImageContainer>
        <img src="/recycle.svg" alt="Recicle" style={{ maxWidth: 550, minWidth: 300 }} />
      </ImageContainer>

      <Title variant={isLarge ? 'h2' : 'h4'} sx={{ justifyContent: isLarge ? undefined : 'space-evenly' }}>
        {t('home.title')}
      </Title>

      <ActionArea>
        <Button href="/" variant="contained" sx={{ boxShadow: 8, width: '100%' }}>
          {t('home.more')}
        </Button>
        <Button href="/" variant="contained" sx={{ boxShadow: 8 }}>
          {t('home.locations')}
        </Button>
      </ActionArea>
    </Wrapper>
  );
}

export default TitleCard;
