import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import a from "../asst/a.png";

export default function ApplicationsLeftSideBar({ MenuIteam }) {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "200px",
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
            <img src={a} alt="Al" style={{ height: "60px" }} />
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
        <Box
          sx={{
            width: "200px",
            height: "70vh",
            position: "relative",
            top: 80,
          
          }}
        >
          <List>
            <ListItem>
              <ListItemButton onClick={() => MenuIteam("home")}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton onClick={() => MenuIteam("Dashabord")}>
                <ListItemText primary="Dashabord" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}
