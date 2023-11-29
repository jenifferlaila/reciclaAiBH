import { Paper, styled } from '@mui/material';
import { FullScreen } from 'react-full-screen';

export const MapContainer = styled(Paper)({
  padding: '1rem',
  boxShadow: 'none',
});

export const StyledFullScreen = styled(FullScreen)({
  height: '100%',
});

export const MapWrapper = styled('div')({
  width: '100%',
  height: '90vh',
  marginTop: '4rem',
  position: 'relative',
});

export const FullScreenBtnWrapper = styled(Paper)({
  right: '1%',
  top: '2%',
  position: 'absolute',
});

export const IFrame = styled('iframe')({
  border: 0,
  width: '100%',
  height: '100%',
});

export const DivSubTitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  flexDirection: 'row',
  'img': {
      width: '10%',
      minWidth: '80px'
  }
});
