import {profileAPI} from "../api/api";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const TOGGLE_IS_DONE = 'TOGGLE_IS_DONE'
const SET_USER_PHOTO ='SET_USER_PHOTO'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi how are you',
        },
        {
            id: 2,
            message: 'Its my first post'
        }
    ],
    profile: null,
    status: '',
    isDone: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 1, message: action.postText}],
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:

            return {
                ...state,
                status: action.status
            };

        case SET_USER_PHOTO:

            return {
                ...state,
                profile: { ...state.profile, photos: action.photos}
            };
        case TOGGLE_IS_DONE:
            return {
                ...state,
                isDone: action.isDone
            }
        default:
            return state;
    }

}

export const addPostActionCreator = (postText) => ({
    type: ADD_POST,
    postText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setUserStatus = (status) => ({
    type: SET_USER_STATUS,
    status
})
export const setUserPhoto = (photos) => ({
    type: SET_USER_PHOTO,
    photos
})


export const toggleIsDone = (isDone) => {
    return {
        type: TOGGLE_IS_DONE,
        isDone
    }
}

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(response.data))
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}
export const setProfileInformation = (data) => {
    return async (dispatch,getState) => {
        dispatch(toggleIsDone(true))
        let userId = getState().auth.userId
        let response = await profileAPI.updateProfile(data)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
            dispatch(toggleIsDone(false))
        }
    }
}
export const SavePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.updatePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setUserPhoto(response.data.data.photos))
        }
    }
}


export default profileReducer;