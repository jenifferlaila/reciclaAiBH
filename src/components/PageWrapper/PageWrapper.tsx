import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

function PageWrapper({ children }: PropsWithChildren) {
  return <Box sx={{ padding: '0.75rem' }}>{children}</Box>;
}

export default PageWrapper;
