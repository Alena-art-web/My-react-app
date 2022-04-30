import React from 'react'
import './index.scss'
import Menu from '../Navbar/index'
import logo from './img/logo.svg'
import avatar from './img/image.png'

const Header = () => 
<header className="header">
    <div className="header__conteiner _conteiner">
        <a href="#">
            <img src={logo} alt="Logo" />
        </a>
        <Menu/>
        <div>
            <img src={avatar} alt="Avatar"/>
        </div>
    </div>
</header>

export default Header