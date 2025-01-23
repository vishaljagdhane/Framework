import { Box, Typography } from '@mui/material'
import React from 'react'
import a from '../asst/a.png'

export default function ApplicationsLeftSideBar() {
  return (
    <>
      <Box sx={{position:'relative',width:'200px',height:'100vh',bgcolor:'orange',top:0,display:'block',boxShadow:5}}>
        <Box sx={{position:'fixed',display:'block',width:'200px',height:'67px',bgcolor:'#fff'}}>
       <Box sx={{position:'relative',width:'200px',height:'67px',display:'flex',cursor:'pointer'}}>
        <img src={a} alt="Al" style={{height:'60px'}}/>
        <Typography sx={{position:'relative',top:6,right:0,textAlign:'center'}}>Your Company Name</Typography>
        </Box>
        </Box>
        <Box sx={{width:'200px',height:'70vh',position:'relative',top:80,bgcolor:'red'}}>
          <h1>Menu Iteam</h1>


        </Box>
      
      </Box>
    </>
  )
}
