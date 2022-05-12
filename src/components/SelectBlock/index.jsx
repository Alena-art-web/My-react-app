import { useTableToggle, useTableShow } from '../Provider'
import BasicSelect, { developers, status } from '../Select'
import './index.scss'

const Button = ({content, func}) => 
    <button onClick={func}>{content}</button>

const SelectBlock = () => {
    const toggle = useTableToggle()
    const show = useTableShow()
    return (
        <div className="main__select-block select-block">
            <BasicSelect data={developers} title="Dev"/>
            <BasicSelect data={status} title="Status"/>

            <div className="select-block select-block__checkbox">
                <input type="checkbox" id="efficiency" name="efficiency" onClick={toggle}/>
                <label for="efficiency">Show Efficiency</label>
            </div>
            <div className="select-block select-block__buttons">
                <Button content="Apply" func={show}/>
                <Button content="Reset Filters" />
            </div>
        </div>
    )
}

export default SelectBlock



