import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'
import { useMemo } from 'react'


const Styles = styled.div`

  table {
    border-spacing: 0;
    

    th {
        color: #C7BFFF;
        font-weight: 600;
        width: 120px;
        padding-bottom: 16px;

    }
    td {
        //width: 385px;
    }

  }
`

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        rows,
    } = useTable({
        columns,
        data,
    })

    return (
        <table {...getTableProps()} style={{ border: 0 }}>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => 
                    <tr>
                        <th style={{ border: 0, textAlign: 'left' }}>{row.original.name}</th>
                        <td className={row.original.className}>
                            {Array.isArray(row.original.value)
                                ? (row.original.value).map(i => <span key={row.original.id}>{i + ', '}</span>) :
                                row.original.value}
                            {/* {row.original.value} */}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const array = require('../../assets/bd.json')

function TableReactContainer() {
    const columns = useMemo(
        () => [
            
                
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
                        
            
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
                
            
        ],
        []
    )
    const data = array.timeTab

    return (
        <Styles>
            <Table  columns={columns} data={data} />
        </Styles>
    )
}

export default TableReactContainer
