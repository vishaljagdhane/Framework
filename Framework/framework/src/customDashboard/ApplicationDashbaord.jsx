import { Box } from '@mui/material'
import React, { useState } from 'react'
import ApplicationsLeftSideBar from './ApplicationsLeftSideBar'
import ApplicationTopBar from './ApplicationTopBar'

export default function ApplicationDashbaord() {
  const [sideBarComponent ,setSideBarComponent]=useState(false)
  const [appliCationTitleName,setApplicationTitleName] =useState('Custom Applications')
  
  
  const openSideBarComponent =()=>{
    setSideBarComponent(!sideBarComponent)
    setApplicationTitleName('Dashbaord ')
   
  }
  const TitleApplicationBar =()=>{

  }
  return (
    <>
   <Box sx={{ width: '100%', height: '100%', background: '#EFF3F8'}}>
   {
    sideBarComponent &&(
    <Box sx={{
      width: '15%',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      bgcolor: 'background.paper',
      transition: 'width 0.3s ease',
    
    }}>
    <ApplicationsLeftSideBar/>
    </Box>
    )}
    <Box
    sx={{
      flex: 1,
      transition: 'margin-left 0.3s ease',
      marginLeft: sideBarComponent ? '16%' : '0%',
    }}>

<ApplicationTopBar  openSideBarComponent={openSideBarComponent} appliCationTitleName={appliCationTitleName}/>    
    </Box>
   </Box>
    </>
  )
}
