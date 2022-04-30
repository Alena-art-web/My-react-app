import React from 'react'
import {TableContainer, Paper} from '@mui/material'
import './index.scss'

const Container = ({children, width, height}) => 
    <TableContainer component={Paper} className='container'  
        sx={{
            width: {width},
            maxHeight: {height},
            backgroundColor: '#242B35',
            marginBottom: '24px',
            border: '1px solid #3D444E',
            borderRadius: '7px',
            overflowY: 'hidden',
            color: '#B6B4C6'
        }}>
    {children}
</TableContainer>

export default Container
