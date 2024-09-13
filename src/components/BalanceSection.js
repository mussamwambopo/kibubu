import React from 'react';
import { Typography, Box } from '@mui/material';

function BalanceSection() {
  return (
    <Box className="balance-section">
      <Typography variant="h5" className="balance-text">
        0 SATS
      </Typography>
    </Box>
  );
}

export default BalanceSection;
