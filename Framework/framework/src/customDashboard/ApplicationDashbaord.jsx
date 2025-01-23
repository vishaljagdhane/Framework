import { Box } from '@mui/material'
import React, { useState } from 'react'
import ApplicationsLeftSideBar from './ApplicationsLeftSideBar'
import ApplicationTopBar from './ApplicationTopBar'
import context from 'react-bootstrap/esm/AccordionContext'

export default function ApplicationDashbaord() {
  const [sideBarComponent ,setSideBarComponent]=useState(false)
  const [appliCationTitleName,setApplicationTitleName] =useState('Custom Applications')
  const [menuContent,SetMenuContent]=useState('home')
  const openSideBarComponent =()=>{
    setSideBarComponent(!sideBarComponent)
    setApplicationTitleName('Dashbaord ')
   
  }
  const renderContent =()=>{
switch(menuContent){
  case 'home':
  return <h1>Welcome to Home Page</h1>;  
  case 'Dashabord':
  return <h1>Dashabord to Home Page</h1>;  
}

  }

  return (
    <>
   <Box sx={{ width: '100%', height: '100%', background: '#EFF3F8'}}>
   {
    sideBarComponent &&(
    <Box sx={{
      width: '16%',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      bgcolor: 'background.paper',
      transition: 'width 0.3s ease',
    
    }}>
    <ApplicationsLeftSideBar MenuIteam ={SetMenuContent}/>
    </Box>
    )}
    <Box
    sx={{
      flex: 1,
      transition: 'margin-left 0.3s ease',
      marginLeft: sideBarComponent ? '16%' : '0%',
    }}>

<ApplicationTopBar  openSideBarComponent={openSideBarComponent} appliCationTitleName={appliCationTitleName}/>    
   <Box sx={{background: '#EFF3F8',position:'relative:',}}>
    <Box sx={{position:'relative',padding:2}}>
    {renderContent()}
    </Box>


   </Box>
    </Box>
   </Box>
    </>
  )
}
