import React from 'react'
import StickyHeadTable from '../TableMuterial/index'
import TableInformation from '../TableInformation/index'
import TableEfficiency from '../TableEfficiency/index'
import TableReactContainer from '../TableReactInformation/index'

const TableBlock = () => { 
    return (
        <div class="main__block block">
            
            <TableInformation/>
            <TableEfficiency />
            <StickyHeadTable /> 
        </div>
    )
}
    

export default TableBlock