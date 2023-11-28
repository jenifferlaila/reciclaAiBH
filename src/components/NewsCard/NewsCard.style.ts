import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Content = styled(Paper)({
  width: '100%',
  minHeight: '600px',
  position: 'relative',
});

export const TitleArea = styled('div')({
  zIndex: 20,
  bottom: 0,
});
