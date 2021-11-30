import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styleForm from '../common/FormsControls/FormsControls.module.css'
import s from './Login.module.css'


const LoginForm =(props) =>{
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={s.formLoginInput} placeholder={"Login"} name={"email"} component={Input} validate={required} />
            </div>
            <div>
                <Field className={s.formLoginInput} placeholder={"Password"} name={"password"}
                       component={Input} validate={required} type={"password"} />
            </div>
            <div>
                <Field className={s.formLoginCheckbox} component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={styleForm.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button className={s.loginButton}>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.login}>
        <div className={s.loginText}>Login</div>
        < LoginReduxForm onSubmit ={onSubmit}/>
    </div>
}
const mapStateToProps=(state) =>{
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    login
}) (Login);