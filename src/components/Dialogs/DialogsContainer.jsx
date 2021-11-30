import React from "react";
import {deleteMessage, sendMessage, showText} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText,
        text: state.messagesPage.text
    }
}


export default compose(
    connect(mapStateToProps, {
        sendMessage,
        deleteMessage,
        showText
    }),
    withAuthRedirect
)(Dialogs);