import { Box } from '@mui/material'
import React, { useState } from 'react'
import ApplicationsLeftSideBar from './ApplicationsLeftSideBar'
import ApplicationTopBar from './ApplicationTopBar'
import DashbaordPages from '../CommonComponent/DashbordComponent/DashbaordPages'
import ButtonMainComponent from '../CommonComponent/ButtonComponent/ButtonMainComponent'
import DashbaordComponent from '../CommonComponent/Dashbaord/DashbaordComponent'

export default function ApplicationDashbaord() {
  const [sideBarComponent, setSideBarComponent] = useState(false)
  const [appliCationTitleName, setApplicationTitleName] = useState('Aligned Automation')
  const [menuContent, setMenuContent] = useState('home')

  const openSideBarComponent = () => {
    setSideBarComponent(!sideBarComponent)
    setApplicationTitleName(sideBarComponent ? '' : 'Dashboard') // Toggle the title based on sidebar state
  }

  const handleMenuChange = (item) => {
    setMenuContent(item)
    setApplicationTitleName(item === 'home' ? '' : 'Dashboard') // Set appropriate title based on selection
  }

  const renderContent = () => {
    switch (menuContent) {
      case 'home':
        return <DashbaordComponent />
      case 'Dashabord':
        return <h1>Dashboard Page</h1>
        case 'Button':
          return <ButtonMainComponent/>
      default:
        return <h1>Welcome!</h1>
    }
  }

  return (
    <Box sx={{ width: '100%', height: 'auto', background: '#EFF3F8' }}>
      {sideBarComponent && (
        <Box
          sx={{
            width: '16%',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            bgcolor: 'background.paper',
            transition: 'width 0.3s ease',
          }}
        >
          <ApplicationsLeftSideBar MenuIteam={handleMenuChange} />
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          transition: 'margin-left 0.3s ease',
          marginLeft: sideBarComponent ? '16%' : '0%',
        }}
      >
        <ApplicationTopBar
          openSideBarComponent={openSideBarComponent}
          appliCationTitleName={appliCationTitleName}
        />
        <Box sx={{ background: '#EFF3F8', position: 'relative', pl: 0 }}>
          <Box sx={{ position: 'relative', pt:2 ,pb:5,pl:1,pr:2,height:'auto' }}>
            {renderContent()}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
