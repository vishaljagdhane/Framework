import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function DashbaordPages() {
  const dashboardComponents = [
    { sr: 1, label: 'Home' },
    { sr: 2, label: 'Settings' },
    { sr: 3, label: 'Welcome to the Dashboard!' },
    { sr: 4, label: 'User Data' },
    { sr: 5, label: 'Featured Items' },
    { sr: 6, label: 'Logout' },
    { sr: 7, label: 'Notifications' },
    { sr: 8, label: 'Activity Log' },
    { sr: 9, label: 'Recent Updates' }
  ];
  
  return (
    <>
<Box sx={{width:'100%',height:'auto',bgcolor:'#EFF3F8'}}>
  <h1>Arrray Testing</h1>

  {
    dashboardComponents.map((data)=>(
      <h1 key={data.sr}>{data.label}</h1>
    ))
  }
<Grid container spacing={2} sx={{ padding: 2 }}>
</Grid>


</Box>
    </>
  )
}
