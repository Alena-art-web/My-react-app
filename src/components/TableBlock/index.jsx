import React, { useEffect } from 'react'
import StickyHeadTable from '../TableMuterial/index'
import TableInformation from '../TableInformation/index'
import TableEfficiency from '../TableEfficiency/index'
import TableReactContainer from '../TableReactInformation/index'
import { useContent } from '../Provider'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/dataSlice/data'

const TableBlock = () => { 
    const dispatch = useDispatch()
    const {items} = useSelector((state) => state.data)

    useEffect(() => {
      const bd = firebase.database()
      const items = bd.ref('items')
      items.on('value', (elem) => {
        dispatch(getData(elem.val()))
      })
    }, [])

    const content = useContent()
    if (!content) return null

    return (
        <div className="main__block block"> 
            <TableInformation/>
            <TableEfficiency />
            <StickyHeadTable items={items}/> 
        </div>
    )
}
    

export default TableBlock