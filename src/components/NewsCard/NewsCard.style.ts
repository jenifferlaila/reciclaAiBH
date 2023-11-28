import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Content = styled(Paper)({
  width: '100%',
  overflow: 'hidden',
  minHeight: '400px',
  borderRadius: '4px',
  position: 'relative',
  transitionProperty: 'all',
  transitionDuration: '500ms',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1),',

  '&:hover': {
    opacity: 0.8,
  },
});

export const TitleArea = styled('div')(({ theme }) => ({
  bottom: 0,
  width: '100%',
  zIndex: 20,
  padding: '1rem',
  position: 'absolute',
  backgroundColor: `${theme.palette.primary.dark}EE`,
}));
