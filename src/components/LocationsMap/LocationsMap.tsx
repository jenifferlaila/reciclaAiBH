import { IconButton, Tooltip, Typography } from '@mui/material';
import { FullScreenBtnWrapper, IFrame, MapContainer, MapWrapper, StyledFullScreen } from './LocationsMap.style';
import { useContent } from '../../content';
import { FullscreenRounded } from '@mui/icons-material';
import { useFullScreenHandle } from 'react-full-screen';

const link =
  'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d120055.14644878167!2d-44.04386029764117!3d-19.89390139021383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spontos%20de%20coleta%20de%20lixo%20recicl%C3%A1vel%20em%20belo%20horizonte!5e0!3m2!1spt-BR!2sbr!4v1701212590139!5m2!1spt-BR!2sbr';

function LocationsMap() {
  const { t } = useContent();
  const handle = useFullScreenHandle();

  return (
    <MapContainer sx={{ width: '100%' }}>
      <Typography variant="h4">{t('locations.title')}</Typography>
      <Typography variant="h6">{t('locations.subtitle')}</Typography>

      <MapWrapper>
        <StyledFullScreen handle={handle}>
          <FullScreenBtnWrapper>
            <Tooltip title={t('locations.fullscreen')}>
              <IconButton onClick={handle.enter}>
                <FullscreenRounded />
              </IconButton>
            </Tooltip>
          </FullScreenBtnWrapper>
          <IFrame
            src={link}
            loading="lazy"
            frameBorder="0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </StyledFullScreen>
      </MapWrapper>
    </MapContainer>
  );
}

export default LocationsMap;
