import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)({
  gap: '2rem',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const ImageContainer = styled('div')({
  width: '98%',
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Title = styled(Typography)({
  textAlign: 'center',
});

export const ActionArea = styled(Box)({
  gap: '1rem',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});
