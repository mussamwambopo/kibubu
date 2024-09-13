import React from 'react';
import { Fab, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function FloatingActionButton() {
  return (
    <Box className="floating-btn">
      <SpeedDial
        ariaLabel="Actions"
        icon={<SpeedDialIcon openIcon={<AddIcon />} />}
        direction="up"
      >
        <SpeedDialAction icon={<SendIcon />} tooltipTitle="Send" />
        <SpeedDialAction icon={<CameraAltIcon />} tooltipTitle="Scan" />
      </SpeedDial>
    </Box>
  );
}

export default FloatingActionButton;
