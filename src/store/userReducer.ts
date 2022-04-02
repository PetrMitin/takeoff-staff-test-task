import { IState } from '../utils/myInterfaces'
import {ActionsTypes, action} from './actions'

const initialState: IState = {
    user: {
        id: '',
        username: '',
        password: '',
        contacts: []
    },
    isLoggedIn: false,
    isLoading: false,
    error: null
}

const userReducer = (state=initialState, action: action): IState => {
    switch(action.type) {
        case ActionsTypes.LOG_IN: 
           return {...state, user: action.payload.user, isLoggedIn: true}
        case ActionsTypes.LOG_OUT:
            return {...state, user: {
                id: '',
                username: '',
                password: '',
                contacts: []
            }, isLoggedIn: false}
        case ActionsTypes.SIGN_UP:
            return {...state, user: action.payload.user, isLoggedIn: true}
        case ActionsTypes.GET_CONTACTS:
            return {...state, user: action.payload.user}
        case ActionsTypes.ADD_CONTACT:
            return {...state, user: action.payload.user}
        case ActionsTypes.CHANGE_CONTACT:
            return {...state, user: action.payload.user}
        case ActionsTypes.DELETE_CONTACT:
            return {...state, user: action.payload.user}
        case ActionsTypes.SET_ERROR:
            return {...state, error: action.payload.error}
        case ActionsTypes.SET_IS_LOADING: 
            return {...state, isLoading: action.payload.isLoading}
        case ActionsTypes.SET_IS_LOGGED_IN: 
            return {...state, isLoggedIn: action.payload.isLoggedIn}
        default: 
            return state
    }
}

export default userReducer