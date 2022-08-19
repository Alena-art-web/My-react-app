import React from 'react'
import './index.scss'
import Menu from '../Navbar/index'
import logo from './img/logo.svg'
import avatar from './img/image.png'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const Header = () => {

    const [ user ] = useAuthState(firebase.auth())

    const onLogout = () => {
        firebase.auth().signOut()
        window.localStorage.removeItem('token')
    }
    return (
        <header className="header">
            <div className="header__conteiner _conteiner">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <Menu/>
                {user ?
                    <div>
                        <img src={avatar} alt="Avatar"/>
                        <button onClick={onLogout}>Log out</button>
                    </div>
                :
                    <Link to='/registration'><button>Sign Up</button></Link>
                }
            </div>
        </header>
    )
}

export default Header