import React from 'react'
import {Table, TableBody, TableCell, TableRow, Box} from '@mui/material'
import TableTime from '../TableTime'
import Title from '../TableTitle'
import Container from '../TableContainer'
import { Scrollbars } from 'react-custom-scrollbars'
import { makeStyles } from '@mui/styles'
import './index.scss'
import styled from 'styled-components'
import TableReactContainer from '../TableReactInformation/index'

const array = require('../../assets/bd.json')
const rows = array.timeTab
console.log(rows.map(i => {
    if (i.className === 'time') return 'green'
    else if (i.className === 'status') return 'red'
    else return '#B6B4C6'
}));
const headStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: 14,
    width: '70px', 
    border: 0,
    color: '#C7BFFF',
    padding: '0px',
    verticalAlign: 'top'
}

const valueStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: 14,
    width: 160,
    border: 0,
    color: 'white' ,
    padding: '0px 0px 16px 0',
    lineHeight: '21px'
}

// const useStyle = makeStyles({
//     time: {
//         color: 'green'
//     }
// })

// const Style = styled.div`
//     .MuiTableCell-root, .MuiTableCell-body, .MuiTableCell-sizeMedium, .css-1bxg4h0-MuiTableCell-root {
//         color: white;
//     }
// `


const TableInformation = () => {
    //const classes = useStyle()
    return (
        <Box sx={{display:'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
            <Container width='648px' height='606px'>               
                <Title title='Project Information'/>    
                <Box sx={{padding: '0 0px 0px 64px', height: '480px', overflow: 'hidden' }}>                    
                    <Scrollbars style={{ height: '480px' }}>
                        <Box sx={{paddingRight: '64px' }}>
                            <TableReactContainer />
                            {/* <Table >
                                <TableBody >
                                    {rows.map(row =>
                                        <TableRow key={row.id}>
                                            <TableCell component="th" sx={headStyle}>
                                                {row.name}
                                            </TableCell>                                           
                                            <TableCell sx={valueStyle} >
                                                {Array.isArray(row.value)
                                                    ? (row.value).map(i => <span key={row.id}>{i + ', '}</span>) :
                                                    row.value}
                                            </TableCell>                                                                                     
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table> */}
                        </Box>     
                    </Scrollbars>                
                </Box>                               
            </Container>
            <TableTime/>
            
        </Box>        
    );
}

export default TableInformation
