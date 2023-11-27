import { AppBar, Container, Toolbar } from '@mui/material';
import { AdbOutlined } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbOutlined sx={{ mr: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
