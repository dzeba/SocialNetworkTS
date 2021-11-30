import React from "react";
import s from '../Dialogs.module.css'


class MessageSettings extends React.Component{
    render() {
        return <div className={s.messageSettings}>
            <div className={s.item}>Поделиться</div>
            <div className={s.item}>Заблокировать</div>
            <div className={s.item}>Изменить</div>
            <div className={s.item}>Удалить</div>
            <div className={s.item}>Секретный чат</div>
        </div>
    }
}
export default MessageSettings;