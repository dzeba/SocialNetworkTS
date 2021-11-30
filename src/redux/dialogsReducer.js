import {act} from "@testing-library/react";

const ADD_MESSAGE = 'ADD-MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'
const SHOW_MESSAGE = 'SHOW_MESSAGE'

let ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};
let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Vasya'
        },
        {
            id: 2,
            name: 'Dimych'
        },
        {
            id: 3,
            name: 'Vova'
        },
        {
            id: 4,
            name: 'Kolya'
        },
    ],
    messages: [
        {
            id: ID(),
            message: 'Hi'
        },
        {
            id: ID(),
            message: 'How are you'
        },
        {
            id: ID(),
            message: 'My frend'
        },
        {
            id: ID(),
            message: 'yo'
        },
    ],
    text:''
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: ID(), message: action.newMessageBody}],
            }
        case SHOW_MESSAGE:
            return {
                ...state,
                text: action.text,
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter(m=> m.id !== action.id
                )
            }

        default:
            return state;
    }
}
export const sendMessage = (newMessageBody) => ({
    type: ADD_MESSAGE,
    newMessageBody
})
export const showText = (text) => ({
    type: SHOW_MESSAGE,
    text
})
export const deleteMessage = (id) => ({
    type: DELETE_MESSAGE,
    id
})

export default dialogsReducer;