import React from "react";
import s from '../MyPosts.module.css'

const Post = (props) => {
    return <div>
        <div className={s.item}>
            {props.message}
        </div>
    </div>
}
export default Post;