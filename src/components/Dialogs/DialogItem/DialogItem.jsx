import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <NavLink activeClassName={s.active} to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;