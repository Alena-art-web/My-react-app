import React from 'react'
import { useTableToggle } from '../Provider'
import './index.scss'

const Button = ({content}) => 
<button>{content}</button>

const Select = ({name, value}) => {
    return (
        <div className="select-block">
            <p>{name}</p>
            <select>
                <option value={value}>{value}</option>
            </select>
        </div>
    )
}

const SelectBlock = () => {
    const toggle = useTableToggle()
    return (
        <div className="main__select-block select-block">
            <Select name="Dev" value="Jenny Wilson"/>
            <Select name="Status" value="All Statuses"/>
            <div className="select-block select-block__checkbox">
                <input type="checkbox" id="efficiency" name="efficiency" onClick={toggle}/>
                <label for="efficiency">Show Efficiency</label>
            </div>
            <div className="select-block select-block__buttons">
                <Button content="Apply"/>
                <Button content="Reset Filters" />
            </div>
        </div>
    )
}

export default SelectBlock



