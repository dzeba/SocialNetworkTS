import React from "react";
import s from '../Dialogs.module.css'


const Message = (props) => {

    return <div>
        <div className={s.message}>{props.message} <button onClick={()=> props.deleteMessage(props.id)}> X </button> </div>
    </div>
}

export default Message;