import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { Scrollbars } from 'react-custom-scrollbars'
import './index.scss'

const columns = [
    {
        id: 'name',
        label: 'Task Name',
        width: 125,
        colorTask: '#8F7FFF',
        padding: '30px 0 30px 30px'
    },
    {
        id: 'developer',
        label: 'Developer',
        width: 125,
    },
    {
        id: 'type',
        label: 'Work Type',
        width: 125
    },
    {
        id: 'status',
        label: 'Status',
        width: 125,
        color: (value) => value === 'Non completed' ? '#EB5757' : '#27AE60',
    },
    {
        id: 'estimation',
        label: 'Estimation (h)',
        width: 125,
        align: 'right',
        colorStyle: '#B6B4C6',
        format: (value) => value.toFixed(2),

    },
    {
        id: 'totalTime',
        label: 'Total time spent by All',
        width: 125,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'myTime',
        label: 'My Time spent by Period (h)',
        width: 125,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'efficiency',
        label: 'Efficiency',
        width: 125,
        align: 'right',
        padding: '30px 30px 30px 0',
        format: (value) => value === 100 ? value + '%' : '-',
    },
];


const StickyHeadTable = ({ items }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const rows = items
    const totalTime = Math.floor(rows.map(row => row.totalTime).reduce((a, b) => a + b))
    const myTime = rows.map(row => row.myTime).reduce((a, b) => a + b)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const headStyle = {
        backgroundColor: '#2D333D',
        color: '#fff',
        fontSize: '12px',
        fontWeight: 600,
        fontFamily: "Open Sans",
        borderBottom: '8px solid #171E28',
    }

    const tableStyle = {
        width: '100%',
        overflow: 'hidden',
        color: '#B6B4C6',
        border: 0,
        backgroundColor: '#171e28',
        boxShadow: 'none'
    }

    return (
        <Paper sx={tableStyle}>
            <TableContainer sx={{ maxHeight: 810 }}>
                <Scrollbars style={{ height: 810 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        className='table__head'
                                        key={column.id}
                                        align={column.align}
                                        style={{ width: column.width, padding: column.padding }}
                                        sx={headStyle}
                                    >
                                        {column.label}
                                    </TableCell> //th
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow tabIndex={-1} key={row.code} sx={{ borderRadius: 7 }}>
                                            {columns.map((column) => {
                                                const value = row[column.id]

                                                return (
                                                    <TableCell

                                                        key={column.id}
                                                        align={column.align}
                                                        sx={{
                                                            color: column.colorTask || column.color && column.color(value) || '#B6B4C6',
                                                            borderBottom: '8px solid #171E28',
                                                            backgroundColor: '#242B35',
                                                            fontFamily: "Open Sans",
                                                            padding: column.padding
                                                        }}
                                                    >
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : Array.isArray(value) ? value.map(i => <p>{i}</p>) : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </Scrollbars>
            </TableContainer>
            <div className="general__item item">
                <div className="item__container">
                    <div className="item__sum">Sum</div>
                    <div className="item__number">{totalTime}h</div>
                    <div className="item__number">{myTime}h</div>
                    <div className="item__number">100% ({myTime}h)</div>
                </div>
            </div>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                style={{ color: '#B6B4C6', fontFamily: 'Open Sans' }}
                className='pagination'
            />
        </Paper>
    );
}

export default StickyHeadTable