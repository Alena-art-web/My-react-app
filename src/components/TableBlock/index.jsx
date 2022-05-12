import React from 'react'
import StickyHeadTable from '../TableMuterial/index'
import TableInformation from '../TableInformation/index'
import TableEfficiency from '../TableEfficiency/index'
import TableReactContainer from '../TableReactInformation/index'
import { useContent } from '../Provider'

const TableBlock = () => { 
    const content = useContent()
    if (!content) return null

    return (
        <div className="main__block block"> 
            <TableInformation/>
            <TableEfficiency />
            <StickyHeadTable /> 
        </div>
    )
}
    

export default TableBlock