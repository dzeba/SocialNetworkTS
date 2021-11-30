import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";


let Users = (props) => {
    return <div className={s.usersPage}>
        <div>
            <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize} onPageChanged={props.onPageChanged}
            />
        </div>
        <div>
            {props.users.map(u => <User followingInProgress={props.followingInProgress}
                                        unfollow={props.unfollow}
                                        follow={props.follow}
                                        user={u}
                                        profile ={props.profile}

                />
            )}
        </div>
    </div>
}
export default Users;