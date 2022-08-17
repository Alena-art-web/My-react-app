import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@mui/material'
import { Paper, Typography, Box } from '@mui/material'
import Title from '../TableTitle'
import Container from '../TableContainer'
import { useTable } from '../Provider'
//import './index.scss'

const array = require('../../assets/bd.json')
const rows_1 = array.efficiencyTab_1
const rows_2 = array.efficiencyTab_2

const rowRightStyle = {
    color: '#B6B4C6',
    borderBottom: '1px solid #3D444E',
    textAlign: 'right',
    padding: '8px 0 8px 0',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    fontSize: '14px'
}

const rowStyle = {
    color: '#B6B4C6',
    borderBottom: '1px solid #3D444E',
    padding: '8px 0 8px 0',
    fontWeight: 700,
    fontFamily: 'Open Sans',
    fontSize: '14px'
}

const titleStyle = {
    color: '#C7BFFF',
    marginBottom: '4px',
    fontFamily: 'Open Sans',
    fontSize: '14px'
}

const name = [{ name: 1 }, { name: 2 }, { name: 3}]

const TableItem = ({ rows, title }) => {
    return (
        <Box>
            <Typography component='h3' sx={titleStyle}>
                {title}
            </Typography>
            <Table sx={{width: '580px'}}>
                <TableBody>
                    {rows.map(row =>
                        <TableRow key={row.id} sx={{fontFamily: 'Open Sans'}}>                             
                            <TableCell component="th" sx={rowStyle}>
                                {row.name}
                            </TableCell>                          
                            <TableCell sx={rowRightStyle}>
                                {row.time === '' ? row.time : row.time + 'h'}
                            </TableCell>
                            <TableCell sx={rowRightStyle}>
                                {row.efficiency === '' ? row.efficiency : row.efficiency  + '%'}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>  
    )
}


const TableEfficiency = () => {
    const alert = useTable()
    if (!alert) return null
    
    return (
        <Container width='100%'>
            <Title title='Efficiency'/>
            <Box 
                sx={{ display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: '0 64px 40px 64px'
                }}>
                <TableItem rows={rows_1} title='Total Efficiency' />
                <TableItem rows={rows_2} title='Efficiency by Current Month (Sep)' />
            </Box>
        </Container>
    );
}

export default TableEfficiency





