import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VideoBackGround from './VideoBackGround';

export default function NagivationBar() {
  const navigate = useNavigate();

  return (
    <>
    <VideoBackGround>
    <AppBar position="static" sx={{ background: 'rgba(0, 0, 0, 0.5)', zIndex: 100, }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Company Name
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => navigate('/login')}>Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Product</Button>
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
    </VideoBackGround>
    </>
  );
}
