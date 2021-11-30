import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import MessageSettings from "./Message/MessageSettings";


const AddMessageForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <Field className={s.addMessageInput} component={Textarea} name={'newMessageBody'}
                   placeholder={'Enter your message'}/>
            <button className={s.addMessageButton}>Send</button>

        </form>
    </div>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

class Dialogs extends React.Component {
    state = {
        isOpen: false,
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }
    openSettingsMenu = (event) => {
        this.setState({
            isOpen: true
        })
        document.addEventListener('mousedown', this.closeSettingsMenu);
    }
    closeSettingsMenu = (event) => {
        if (!this.wrapperRef.contains(event.target)) {
            this.setState({
                isOpen: false
            })
            document.removeEventListener('mousedown', this.closeSettingsMenu);
        }
    }

    render() {

        let state = this.props.messagesPage
        let dialogsElements = state.dialogs
            .map(dialog =>
                <DialogItem name={dialog.name} id={dialog.id}/>
            )

        let messageElements = state.messages
            .map(message =>
                <Message message={message.message} id={message.id} deleteMessage={this.props.deleteMessage}/>
            )

        const onSubmit = (values) => {
            this.props.sendMessage(values.newMessageBody);
        }

        return <div>
            <div className={s.dialogs}>
                <div>
                    <div>{dialogsElements}</div>
                </div>
                <div>

                    <div className={s.settingsBlock} ref={this.setWrapperRef}>
                        <div>
                            <button onClick={this.openSettingsMenu} className={s.addMessageButton}>Настройки</button>
                        </div>
                        {this.state.isOpen &&
                        <div  className={s.messageSettings}><MessageSettings/></div>}
                    </div>
                    {messageElements}
                    <AddMessageFormRedux onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>
    }
}

export default Dialogs;