import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';

import { useContent } from '../../content';
import { ActionArea, ArrowDown, ImageContainer, Title, Wrapper } from './TitleCard.style';
import { Button } from '../../components';

function TitleCard() {
  const { t } = useContent();

  const { breakpoints } = useTheme();
  const isLarge = useMediaQuery(breakpoints.up('md'));

  return (
    <Wrapper sx={{ minHeight: { xs: '85vh', md: 'unset' }, width: { xs: '100%', lg: undefined } }}>
      <ImageContainer>
        <img src="/recycling-2.svg" alt="Recicle" style={{ maxWidth: 350, minWidth: 300 }} />
      </ImageContainer>

      <Title variant="h4" sx={{ justifyContent: isLarge ? undefined : 'space-evenly' }}>
        {t('home.title')}
      </Title>

      <ActionArea>
        <Link to="/mais" style={{ width: '100%' }}>
          <Button variant="contained" sx={{ boxShadow: 8, width: '100%' }}>
            {t('home.more')}
          </Button>
        </Link>
        <Link to="/coleta">
          <Button variant="contained" sx={{ boxShadow: 8 }}>
            {t('home.locations')}
          </Button>
        </Link>
      </ActionArea>

      <a href="/#noticias">
        <ArrowDown fontSize="large" />
      </a>
    </Wrapper>
  );
}

export default TitleCard;
