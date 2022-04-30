import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Paper, Typography, Box } from '@mui/material'
import Title from '../TableTitle'
import Container from '../TableContainer'
import './index.scss'

const array = require('../../assets/bd.json')
const rows_1 = array.timeTab_1
const rows_2 = array.timeTab_2
const rows_3 = array.timeTab_3

const nameStyle = {
    color: '#B6B4C6', 
    borderBottom: '1px solid #3D444E', 
    padding: '8px 0 8px 0',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: '21px',
    //fontWeight: row.style ? 700 : 400
}

const valueStyle = {
    color: '#B6B4C6', 
    borderBottom: '1px solid #3D444E',
    padding: '0px',
    textAlign: 'right',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    lineHeight: '21px',
    //fontWeight: 700
}

const titleStyle = {
    color: '#C7BFFF', 
    fontSize: '14px',
    fontFamily: 'Open Sans',
    lineHeight: '21px'
}

const TableItem = ({rows, title, width, margin}) => {
    return (
        <Box sx={{margin: {margin}}}>
            <Typography component='h3' sx={titleStyle}>{title}</Typography>
            <Table sx={{ width: { width } }}>
                <TableBody>
                    {rows.map(row =>
                        <TableRow key={row.id} sx={{width: row.width}}>
                            <TableCell component="th" sx={nameStyle} style={{fontWeight: row.style}}>
                                {row.name}
                            </TableCell>
                            <TableCell sx={valueStyle} style={{ fontWeight: row.style }}>
                                {row.time + 'h'}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
        
    )
}

const TableTime = () => {
    return ( 
        <Container width='648px' height='606px'>
            <Title title='Project Time'/>
            <Box sx={{ display: 'flex', padding: '0 57px 46px 62px', justifyContent: 'space-between'}}>
                <TableItem rows={rows_1} title='Total time (Hours)' width='249px'/>
                <Box>
                    <TableItem rows={rows_2} title='Time (Hours) by Current Month (Sep)' width='241px' margin='0 0 40px 0'/>
                    <TableItem rows={rows_3} title='Estimations (Hours)' width='241px'/>
                </Box> 
            </Box>           
        </Container>         
    );
}

export default TableTime
