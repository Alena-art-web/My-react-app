import React from 'react'
import './index.scss'

const Button = ({content}) => 
<button>{content}</button>

const Select = ({name, value}) => {
    return (
        <div class="select-block">
            <p>{name}</p>
            <select>
                <option value={value}>{value}</option>
            </select>
        </div>
    )
}

const SelectBlock = () => {
    return (
        <div class="main__select-block select-block">
            <Select name="Dev" value="Jenny Wilson"/>
            <Select name="Status" value="All Statuses"/>
            <div class="select-block select-block__checkbox">
                <input type="checkbox" id="efficiency" name="efficiency" />
                <label for="efficiency">Show Efficiency</label>
            </div>
            <div class="select-block select-block__buttons">
                <Button content="Apply"/>
                <Button content="Reset Filters" />
            </div>
        </div>
    )
}

export default SelectBlock



