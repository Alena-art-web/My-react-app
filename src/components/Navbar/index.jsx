import React from 'react'
import './index.scss'
import SvgIcon from '../SvgComponent'

const MenuItem = ({text, child}) => 
<li className="menu__item">
    <a href="#" className="menu__link">
        {child}
        <p>{text}</p>
    </a>
</li>

const Menu = () => 
<nav className="header__menu menu">
    <ul className="menu__list">
        <MenuItem text="Summary" child={<SvgIcon id="summary"/>}/>
        <MenuItem text="Hours" child={<SvgIcon id="hours"/>}/>
        <MenuItem text="Projects" child={<SvgIcon id="pencil"/>}/>
        <MenuItem text="Time reports" child={<SvgIcon id="timeReports"/>}/>
        <MenuItem text="Confirmation" child={<SvgIcon id="confirmation"/>}/>
        <MenuItem text="Mailer" child={<SvgIcon id="mailer"/>}/>
        <MenuItem text="Compare" child={<SvgIcon id="compare"/>}/>
    </ul>
</nav>

export default Menu