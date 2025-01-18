import { Box, Drawer, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar({onMenuItemClick}) {
  return (
    <>
      <Box sx={{ width: '200px', height: '100vh', display: 'flex', flexDirection: 'column',  padding: 2, overflowY: 'auto', position: 'relative' }}>
        <Box sx={{ padding: 2, zIndex: 10, position: 'fixed', width: '200px', backgroundColor: '#fff', display: 'flex', top: 0, gap: 2, left: 0 }}>
          <Typography sx={{ textAlign: 'center', position: 'relative', padding: 2 }}>Aligned Automation</Typography>
        </Box>
        <Box sx={{ overflowY: 'auto', flexGrow: 1, padding: 2, marginTop: 8 }}>
          <List>
            <ListItem>
              <ListItemButton  onClick={()=> onMenuItemClick('home')}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton  onClick={()=> onMenuItemClick('admin')} >
                <ListItemText primary="Admin" />
              </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemButton  onClick={()=> onMenuItemClick('c1')} >
              <ListItemText primary="Create user" />
            </ListItemButton>
          </ListItem>
      
          </List>
        </Box>
      </Box>
    </>
  );
}
