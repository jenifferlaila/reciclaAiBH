import { AppBar, Container, Toolbar, IconButton, useTheme, Typography } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useContent } from '../../content';

export interface NavbarProps {
  isHome?: boolean;
}

function Navbar({ isHome = false }: NavbarProps) {
  const { palette } = useTheme();

  const { t } = useContent();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {!isHome && (
            <IconButton aria-label="back" href="/" sx={{ color: palette.text.primary }}>
              <ArrowBackIosNew />
            </IconButton>
          )}

          <Typography variant="h5" component="p" sx={{ fontWeight: 'normal', ml: 'auto', pr: '1rem' }}>
            {t('navbar.title')}
          </Typography>

          <p style={{ marginLeft: 'auto' }}></p>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
