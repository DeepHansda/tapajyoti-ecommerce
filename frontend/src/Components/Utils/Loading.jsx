
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <Box sx={{ 
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex:'100',
        'background':'rgba(0, 0, 0, 0.2)',
        backdropFilter:'blur(10px)',
        position: 'absolute'
    }}>
        <CircularProgress/>
    </Box>
  )
}

export default Loading