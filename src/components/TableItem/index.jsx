import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import { Paper, Typography, Box } from '@mui/material'
import Title from '../TableTitle'
import './index.scss'

const array = require('../../assets/bd.json')
const rows_1 = array.efficiencyTab_1
const rows_2 = array.efficiencyTab_2


const TableItem = ({ rows, title }) => {
    return (
        <Table>
            <Typography component='h3' className='table__subtitle'>{title}</Typography>
            <TableBody>
                {rows.map(row =>
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row" sx={{ color: '#B6B4C6', borderBottom: '1px solid #3D444E' }}>
                            {row.name}
                        </TableCell>
                        <TableCell sx={{ color: '#B6B4C6', borderBottom: '1px solid #3D444E' }}>
                            {row.time}
                        </TableCell>
                        <TableCell sx={{ color: '#B6B4C6', borderBottom: '1px solid #3D444E' }}>
                            {row.efficiency}
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default TableItem