import { Box, styled } from '@mui/material';

export const Image = styled('div')({
  position: 'absolute',
  top: '0',
  width: '100%',
  height: '17vh',
});

export const DivSubTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  img: {
    width: '40%',
    minWidth: '180px',
  },
});

export const LinkArea = styled(Box)(({ theme }) => ({
  gap: '1rem',
  width: '100%',
  display: 'flex',
  marginTop: '4rem',
  flexDirection: 'column',
  color: `${theme.palette.primary.contrastText} !important`,

  '.action-area': {
    gap: '1rem',
    display: 'flex',
    width: 'fit-content',
    flexDirection: 'column',
  },
}));
