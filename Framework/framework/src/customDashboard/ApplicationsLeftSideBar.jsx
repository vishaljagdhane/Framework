import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon
} from "@mui/material";
import React ,{useState}from "react";
import a from "../asst/a.png";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ButtonIcon from '@mui/icons-material/Build';
import TableChartIcon from '@mui/icons-material/TableChart';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextFieldsIcon from '@mui/icons-material/TextFields';

export default function ApplicationsLeftSideBar({ MenuIteam }) {
  const ListData = [
    { label: "Home", action: "home", onClick: () => MenuIteam("home"), icon: <HomeIcon /> },
    { label: "Dashboard", action: "dashboard", onClick: () => MenuIteam("Dashabord"), icon: <DashboardIcon /> },
    { label: "Button Component", action: "button", onClick: () => MenuIteam("Button"), icon: <ButtonIcon /> },
    { label: "Table Component", action: "table", onClick: () => MenuIteam("Table"), icon: <TableChartIcon /> },
    { label: "Card Component", action: "card", onClick: () => MenuIteam("card"), icon: <CardMembershipIcon /> },
    { label: "Alert & Box Component", action: "alert", onClick: () => MenuIteam("AlertWithBox"), icon: <NotificationsIcon /> },
    { label: "Text Component", action: "text", onClick: () => MenuIteam("TextFild"), icon: <TextFieldsIcon /> },
  ]
  const [activeItem, setActiveItem] = useState(null);
  
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "230px",
          height: "100vh",
          top: 0,
          display: "block",
          boxShadow: 5,
        }}
      >
        <Box
          sx={{
            position: "fixed",
            display: "block",
            width: "200px",
            height: "67px",
            bgcolor: "#fff",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "200px",
              height: "67px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                position: "relative",
                top: 6,
                right: 0,
                textAlign: "center",
              }}
            >
              Your Company Name
            </Typography>
          </Box>
        </Box>
  
        {/* Scrollable list container */}
        <Box
          sx={{
            width: "230px",
            height: "calc(100vh - 150px)", // Adjust height based on the other content above
            position: "relative",
            top: 80,
            overflowY: "auto", // Enable vertical scrolling
          }}
        >
          <List>
            {ListData.map((item) => (
              <ListItem
                key={item.action}
                sx={{
                  borderRadius: "10px",
                  bgcolor: activeItem === item.action ? "#C2E8F6" : "transparent",
                  "&:hover": {
                    bgcolor: "lightSkyBlue",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => {
                    item.onClick();
                    setActiveItem(item.action); // Set active item on click
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} sx={{ fontSize: '12px' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
  
  
}
