import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button, Checkbox, FormControlLabel } from '@mui/material';

export default function AdminPages() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    gender: '',
    password: '',
    role: '',
    permissions: []  // New state for storing component permissions
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePermissionChange = (e) => {
    const { value } = e.target;
    setFormData(prevState => {
      if (prevState.permissions.includes(value)) {
        return {
          ...prevState,
          permissions: prevState.permissions.filter(permission => permission !== value)
        };
      } else {
        return {
          ...prevState,
          permissions: [...prevState.permissions, value]
        };
      }
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic, including saving the permissions
    console.log('User Data:', formData);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', boxSizing: 'border-box', padding: 5, bgcolor: '#fff' }}>
      <Box sx={{ width: '100%', height: 'Auto', display: 'block', position: 'relative', }}>
        <h1>Create New Account</h1>
        <Box sx={{ width: '100%', height: 'auto', position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, boxShadow: 2, padding: 2 }}>
          <TextField
            name="fname"
            label="First Name"
            placeholder="Enter First Name"
            autoComplete="off"
            value={formData.fname}
            onChange={handleChange}
          />
          <TextField
            name="lname"
            label="Last Name"
            placeholder="Enter Last Name"
            autoComplete="off"
            value={formData.lname}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            placeholder="Enter Email"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="mobile"
            label="Mobile"
            placeholder="Enter Mobile Number"
            autoComplete="off"
            value={formData.mobile}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </FormControl>

          {/* Permissions Checkbox */}
          <Box>
            <h3>Assign Components:</h3>
            <FormControlLabel
              control={<Checkbox value="home" onChange={handlePermissionChange} />}
              label="Home"
            />
            <FormControlLabel
              control={<Checkbox value="admin" onChange={handlePermissionChange} />}
              label="Admin"
            />
            <FormControlLabel
              control={<Checkbox value="c1" onChange={handlePermissionChange} />}
              label="Create User"
            />
            {/* Add more components as needed */}
          </Box>

          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
