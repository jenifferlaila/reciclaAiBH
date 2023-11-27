import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';

import { Home, NotFound } from './pages';
import { theme } from './util';

import './index.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
