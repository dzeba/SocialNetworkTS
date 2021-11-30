import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import avatar from "../../../assets/avatar.png";
import MyPostsContainer from "../MyPosts/MyPostsContainer";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={s.profile}>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large || avatar}/>
            <div className={s.status}>
                <b>Статус:</b> <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <ProfileData profile={props.profile}/>
        </div>
        <div>
            <MyPostsContainer/>
        </div>
    </div>
}
export default ProfileInfo;

const ProfileData = (props) => {
    return <div>
        <div>
            <b>Имя:</b> {props.profile.fullName}
        </div>
        <div>
            <b>Про меня:</b> {props.profile.aboutMe}
        </div>
        <div>
            <b>Ищу ли я работу:</b> {props.profile.lookingForAJob ? 'Да' : 'Нет'}
        </div>
        {props.profile.lookingForAJob &&
        <div>
            <b>Мои скилы:</b> {props.profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>Контакты: </b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })
        }
        </div>

    </div>
}

const Contact = (props) => {
    return <div className={s.contacts}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}