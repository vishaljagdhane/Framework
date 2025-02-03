import { Box, Typography } from '@mui/material'
import React from 'react'

export default function DashbaordComponent() {
  
const fontFamily = [
    'Arial', 'Verdana', 'Helvetica', 'Tahoma', 'Trebuchet MS', 
    'Georgia', 'Times New Roman', 'Courier New', 'Lucida Console', 'Comic Sans MS',
    'Impact', 'Palatino', 'Garamond', 'Arial Black', 'Century Gothic', 
    'Frank Ruhl Libre', 'Ubuntu', 'Roboto', 'Open Sans', 'Lato',
    'Poppins', 'Montserrat', 'Merriweather', 'Raleway', 'Source Sans Pro',
    'Fira Sans', 'Quicksand', 'Oswald', 'Noto Sans', 'PT Sans',
    'Playfair Display', 'Bebas Neue', 'Lora', 'Roboto Slab', 'Droid Sans',
    'Droid Serif', 'Muli', 'Nunito', 'Slabo 27px', 'Exo 2', 'Zilla Slab',
    'Anton', 'Lobster', 'Futura', 'Baskerville', 'Amatic SC', 'Caveat',
    'Mochi', 'Archivo', 'Inconsolata', 'Work Sans', 'Zilla Slab',
    'Cabin', 'Dosis', 'Yanone Kaffeesatz', 'Tisa', 'Varela Round'
]

  return (
    <>
      <Box sx={{width:'100%',height:'auto',padding:2}}>
    <Typography variant='h5'></Typography>

      </Box>
    </>
  )
}
