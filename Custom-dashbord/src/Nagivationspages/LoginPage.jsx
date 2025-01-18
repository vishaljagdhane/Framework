import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import VideoBackGround from './VideoBackGround';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy role-based authentication logic
    if (email === 'admin@example.com' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (email === 'user@example.com' && password === 'user123') {
      navigate('/user-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box>
      <VideoBackGround />
      <Box
        sx={{
          position: 'relative',
          background: 'rgba(255, 255, 255, 0.8)',
          borderRadius: 2,
          p: 4,
          width: '600px',
          margin: 'auto',
          mt: 20,
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
}
