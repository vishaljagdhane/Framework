import React, { useEffect, useState } from 'react'
import { Box, IconButton, TextField, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close';

export default function ApplicationTopBar({openSideBarComponent,appliCationTitleName}) {

  return (
    <>
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Box 
          sx={{
            width: '100%', 
            display: 'flex', 
            justifyContent: 'space-between', 
            bgcolor: '#1976d2',  // Dark blue background
            color: 'white',  // White font color for contrast
            height:'70px'
            
          }}
        >
          <Box padding={3} sx={{ display: 'flex', gap: 3, textAlign: 'center', alignItems: 'center' }}>
            <IconButton onClick={openSideBarComponent}>
            <MenuIcon sx={{color:'#fff',fontSize:20}}/>

       
            </IconButton>
            <Typography sx={{ color: 'white' }}>{appliCationTitleName}</Typography>
          </Box>
          <Box padding={3} sx={{ display: 'flex', gap: 5, textAlign: 'center', alignItems: 'center' }}>
          <TextField
            label="Search"
            variant="outlined"  // Use outlined variant for the border
            sx={{
              position: 'relative',
            //   border: '1px solid #fff',  // Border color (white here)
              color: '#fff',  // Text color inside the input field
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#fff',  // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#fff',  // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#fff',  // Border color when focused
                },
              },
              '& .MuiInputLabel-root': {
                color: '#fff',  // Label color
              },
              '& .MuiInputBase-input': {
                color: '#fff',  // Text input color
              },
            }}
            InputProps={{
              startAdornment: (
                <SearchIcon sx={{ color: 'white', fontSize: 30 }} />
              ),
            }}
          />
          <IconButton>
            <AccountCircleIcon sx={{ position: 'relative', fontSize: 31, color: 'white' }} />
          </IconButton>
        </Box>
        </Box>
      </Box>
    </>
  )
}
