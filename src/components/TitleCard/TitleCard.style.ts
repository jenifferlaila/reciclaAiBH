import { ArrowDownwardRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

export const Wrapper = styled(Box)({
  gap: '1rem',
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

const arrowAnimation = keyframes`
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
`;

export const ArrowDown = styled(ArrowDownwardRounded)({
  animation: `${arrowAnimation} 1s infinite ease`,
});
