import React from "react";
import s from "./Users.module.css";
import avatar from '../../assets/avatar.png'
import {NavLink} from "react-router-dom";


let User = (props) => {
    return <div className={s.userPage}>
        <div className={s.leftSide}>
            <NavLink to={'/profile/' + props.user.id}>
                <img src={props.user.photos.small != null ? props.user.photos.small : avatar}/>
            </NavLink>
            <div>
                {props.user.followed
                    ? <button className={s.followButton} disabled={props.followingInProgress
                        .some(id => id === props.user.id)} onClick={() => {
                        props.unfollow(props.user.id)
                    }}>Unfollow</button>
                    : <button className={s.followButton} disabled={props.followingInProgress
                        .some(id => id === props.user.id)} onClick={() => {
                        props.follow(props.user.id)
                    }}>Follow</button>
                }
            </div>
        </div>
        <div className={s.rightSide}>
            <div className={s.userName}>
                {props.user.name}
            </div>
            <div className={s.status}>
                {props.user.status === null
                    ? <div>Привет у меня все отлично </div>
                    : <div>{props.user.status} </div>
                }

            </div>
            <div>

            </div>
        </div>
    </div>
}
export default User;
