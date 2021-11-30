import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Профиль</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' activeClassName={s.activeLink}>Сообщения</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>Пользователи</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/updateInfo' activeClassName={s.activeLink}>Настройки</NavLink>
        </div>
    </nav>
}
export default Navbar;