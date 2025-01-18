import { Box, Typography ,search,alpha,styled, TextField} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserData_Deatils from './UserData_Deatils';
export default function TopBarComponent({toggleSidebar,onSearch}) {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handelserach=(event)=>{
    if(event.key=== 'Enter'){
      onSearch(searchTerm)
      setSearchTerm('')
    }

  }
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const [isUserInfo,setIsUserInfo] =useState(false)

const HnadelClick=()=>{
  setIsUserInfo(!isUserInfo)
}
  return (
    <>
      <Box sx={{width:'100%',position:'relative',}}>
      <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',bgcolor:'#ornge'}}>
      <Box padding={3} sx={{display:'flex',gap:10,textAlign:'center',alignItems:'center'}}>
      <IconButton onClick={toggleSidebar}>
      <MenuIcon />
      </IconButton>
      <Typography>Aligend Automation</Typography>
      </Box>
      <Box padding={3} sx={{display:'flex',gap:5,textAlign:'center',alignItems:'center'}}>

      <SearchIconWrapper>
      <SearchIcon sx={{position:'absolute',left:180,top:40,fontSize:30,color:'blue'}} />
    </SearchIconWrapper>
  <TextField
  label="Search"
  value={searchTerm}
  onChange={(e)=>setSearchTerm(e.target.value)}
  onKeyDown={handelserach}
  sx={{position:'relative',}}
  />
      <IconButton onClick={HnadelClick}>
      <AccountCircleIcon 
      sx={{position:'relative',fontSize:31}}
       />
      </IconButton>
      </Box>
      </Box>

      </Box>
      <UserData_Deatils open={isUserInfo} onClose={HnadelClick}/>
    </>
  )
}
