import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength200 = maxLengthCreator(200)

const AddNewPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.addPostInput} component={Textarea} name={'postText'}
                   placeholder={"Введите сообщение"} validate={[required,maxLength200]}
            />
        </div>
        <div>
            <button className={s.addPostButton}>Добавить</button>
        </div>
        </form>
    </div>
}
const MyPostReduxForm = reduxForm ({form: 'ProfileAddNewPostForm'})(AddNewPostForm)


function MyPosts(props) {


    let postElements = props.posts
        .map(post =>
            <Post message={post.message}/>
        )
    const onSubmit = (values) => {
        props.addPost(values.postText)
        values.postText = ''
    }

    return <div className={s.postsBlock}>
        <div className={s.myPostText}>
            Мои посты
        </div>
        <div className={s.newPostText}>
            Новый пост
        </div>
        <MyPostReduxForm onSubmit={onSubmit}
        />
        <div className={s.postBlock}>
            {postElements}
        </div>
    </div>
}

export default MyPosts;

