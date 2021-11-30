import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import styleForm from '../../common/FormsControls/FormsControls.module.css'
import s from './UpdateProfileInfo.module.css'

import avatar from "../../../assets/avatar.png";


const UpdateProfileInfoForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div className={s.formBlock}><div className={s.formText}>Имя</div>
                <Field className={s.formInput} placeholder={""} name={"fullName"}
                       component={Input} validate={required}/>
            </div>
            <div className={s.formBlock} ><div className={s.formText}>Про меня</div>
                <Field className={s.formTextarea} placeholder={""} name={"aboutMe"} component={Textarea}
                       validate={required} value={props.profile.aboutMe}/>
            </div>
            <div className={s.formBlock}><div className={s.formText}>Опишите ваши навыки</div>
                <Field className={s.formTextarea} placeholder={""} name={"lookingForAJobDescription"}
                       component={Textarea} validate={required}/>
            </div>
            <div className={s.formBlock}><div className={s.formText}>Ишите работу?</div>
                <Field className={s.formCheckbox} component={"input"} name={"lookingForAJob"} type={"checkbox"}/>
            </div>
            <div >
                <b>Контакты: </b> {Object.keys(props.profile.contacts).map(key => {
                return <div className={s.formBlock}> <div  className={s.formText}>{key}</div>
                    <Field className={s.formInput} placeholder={""}
                           name={"contacts." + key}
                           component={Input}/></div>
            })}
            </div>
            {props.error && <div className={styleForm.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button className={s.settingsButton}>Готово</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'updateProfileInfo'})(UpdateProfileInfoForm)

function UpdateProfileInfo(props) {
    const onSubmit = (data) => {
        props.setProfileInformation(data);
    }
    const mainPhotoSelected = (e) => {

        if (e.target.files.length) {
            props.SavePhoto(e.target.files[0])
        }
    }
    if (props.isDone) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.settings}>
        <div className={s.textContent}>
            <div className={s.infoText}>Изменить настройки профиля</div>
            <div>
                <div>Изменить фото профиля</div>
                <div><img src={props.profile.photos.large || avatar}/></div>
                <div><input type="file" onChange={mainPhotoSelected}/></div>
            </div>
            < LoginReduxForm onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
        </div>
    </div>
}

export default UpdateProfileInfo;