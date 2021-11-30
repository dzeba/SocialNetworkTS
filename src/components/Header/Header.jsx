import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo-social.png'

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.headerText}>{props.login}
                    <button className={s.loginButton} onClick={props.logout}>Log out</button> </div>
                : <NavLink className={s.loginButton} to={'/login'}>Login </NavLink>
            }

        </div>
    </header>
}
export default Header;