import React from 'react'
import './index.scss'
import SvgIcon from '../SvgComponent'
import { Link } from 'react-router-dom'

const MenuItem = ({text, child, href}) => 
<li className="menu__item">
    <Link to={href} className="menu__link">
        {child}
        <p>{text}</p>
    </Link>
</li>

const Menu = () => 
<nav className="header__menu menu">
    <ul className="menu__list">
        <MenuItem href="/summary" text="Summary" child={<SvgIcon id="summary" />}/>
        <MenuItem href="/hours" text="Hours" child={<SvgIcon id="hours" />} />
        <MenuItem href="/projects" text="Projects" child={<SvgIcon id="pencil" />}/>
        <MenuItem href="/time" text="Time reports" child={<SvgIcon id="timeReports" />}/>
        <MenuItem href="/confirmation" text="Confirmation" child={<SvgIcon id="confirmation"/>}/>
        <MenuItem href="/mailer" text="Mailer" child={<SvgIcon id="mailer" />}/>
        <MenuItem href="/compare" text="Compare" child={<SvgIcon id="compare" />}/>
    </ul>
</nav>

export default Menu