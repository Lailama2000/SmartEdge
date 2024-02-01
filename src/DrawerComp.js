import * as React from 'react';
import Drawer from '@mui/material/Drawer';

export default function DrawerComp({ open, setOpen }) {
  return (
      <Drawer
        onClose={() => setOpen(false)}
        anchor={'right'}
        sx={{
          bgcolor: 'rgba(0, 0, 0,0.5)',
          width: '100%',
          '.MuiPaper-root': {
            bgcolor: 'rgba(0, 0, 0,0.5)',
            color: 'white',
          },
        }}
        open={open}
      >
        mnmn
      </Drawer>
  );
}