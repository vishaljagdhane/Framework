import React, { useState } from 'react';
import { Box } from '@mui/material';
import TopBarComponent from './TopBarComponent';
import SideBar from './SideBar';
import AdminPages from './AdminPages';
import HomePages from '../pages/HomePages';
import UserRegister from '../pages/UserRegister';

export default function MainDashboard() {
  const [content, setContent] = useState('home');  // Initialize content state

  const RenderContent = () => {
    switch (content) {
      case 'home':
        return <HomePages/>;
      case 'admin':
        return <AdminPages />;
      case 'c1':
        return <h1>create Company </h1>
      case 'c2':
        return <h1>Update company</h1>
        case 'c3':
          return<h1>Show Company</h1>
          case 'c4':
            return<h1>delete comapny </h1>
            case 'cc01':
              return<h1>Add Contact</h1>
              case 'cc02':
                return<h1>Edit Contact</h1>
              case 'cc03':
                return<h1>Delete Contact</h1>
              case 'cc04':
                return<h1>Show Contact</h1>
              case 'p1':
                return<h1>Add Product</h1>
              case 'p2':
                return<h1>Update Product</h1>
              case 'p3':
                return<h1>Show Product</h1>
              case 'p4':
                return<h1>Delete Product</h1>
              case 'o1':
                return<h1>Add Order</h1>
              case 'o2':
                return<h1>Update Order</h1>
              case 'o3':
                return<h1>Show Order</h1>
              case 'o4':
                return<h1>Delete Order</h1>
            case'v1':
            return<h1>Add Vendor</h1>
            case 'v2':  
            return<h1>Update Vendor</h1>
            case 'v3':
              return<h1>Show Vendor</h1>
            case 'v4':  
          return<h1>Delete Vendor</h1>
          case 'p1':
            return<h1>Add Payment</h1>
            case 'p2':
              return<h1>Update Payment</h1>
            case 'p3':
              return<h1>Show Payment</h1>
            case 'p4':
              return<h1>Delete Payment</h1>
            case 'u1':
              return<UserRegister/>

      default:
        return <h1>Page Not Found</h1>;
    }
  };

  const hendelSearch = (SearchTeram) => {
    const menuIteam = SearchTeram.toLowerCase();
    setContent(menuIteam)
  }

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ width: '100%', height: '100%', background: '#EFF3F8' }}>
      {sidebarOpen && (
        <Box
          sx={{
            width: '18%',
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            bgcolor: 'background.paper',
            transition: 'width 0.3s ease',
            zIndex: 1200,
          }}
        >
          <SideBar onMenuItemClick={setContent} /> {/* Update content state on click */}
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          transition: 'margin-left 0.3s ease',
          marginLeft: sidebarOpen ? '18%' : '0%',
        }}
      >
        <TopBarComponent toggleSidebar={toggleSidebar} onSearch={hendelSearch} />
        <Box sx={{background: '#EFF3F8'}}>
        {RenderContent()} {/* Render the appropriate content */}
        </Box>
      </Box>
    </Box>
  );
}
