import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

function MainActions() {
  return (
    <Box className="main-actions">
      <Button variant="contained" color="primary" fullWidth startIcon={<SearchIcon />}>
        Secure your funds!
      </Button>
      <Button variant="outlined" fullWidth startIcon={<AddIcon />}>
        Receive your first sats
      </Button>
      <Button variant="outlined" fullWidth startIcon={<SearchIcon />}>
        Find your friends on nostr
      </Button>
    </Box>
  );
}

export default MainActions;
