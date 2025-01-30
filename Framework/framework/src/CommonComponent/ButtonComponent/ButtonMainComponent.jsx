import { Box, Typography, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import AAButton from './AAButton';
import ButtonMuiContent from './ButtonMuiContent';

export default function ButtonMainComponent() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ position: 'relative', height: 'auto', padding: '10px', display: 'block' }}>
        <Box sx={{ width: '100%', height: 'auto', borderBottom: '2px solid #ccc', padding: '2px', display: 'flex', gap: 5 }}>
          <Typography variant='h6'>Button Component</Typography>
          <SmartButtonIcon sx={{ position: 'relative', fontSize: '36px', color: '#1976D2' }} />
        </Box>
        <Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <Tabs value={value} onChange={handleChange}  sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tab label="Aligned Automation Custom " value="1" sx={{textTransform:'capitalize'}} />
              <Tab label="MUI Button" value="2"  sx={{textTransform:'capitalize'}}/>
              <Tab label="Bootstrap Button" value="3" sx={{textTransform:'capitalize'}}/>
            </Tabs>
            {/* Tab content */}
            {value === '1' && <Box sx={{width:'100%',height:'auto',position:'relative',left:'10px',top:'30px',boxShadow:5}}><AAButton/></Box>}
            {value === '2' && <Box sx={{width:'100%',height:'auto',position:'relative',left:'10px',top:'30px',boxShadow:5}}><ButtonMuiContent/></Box>}
            {value === '3' && <Box sx={{width:'100%',height:'auto',position:'relative',left:'10px',top:'30px',boxShadow:5}}>Item Three</Box>}
          </Box>
        </Box>
      </Box>
    </>
  );
}
