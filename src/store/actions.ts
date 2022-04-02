import {IUser, IServerError} from '../utils/myInterfaces'

export enum ActionsTypes {
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
    SIGN_UP = 'SIGN_UP',
    GET_CONTACTS = 'GET_CONTACTS',
    ADD_CONTACT = 'ADD_CONTACT',
    CHANGE_CONTACT = 'CHANGE_CONTACT',
    DELETE_CONTACT = 'DELETE_CONTACT',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN'
}


interface ILogInAction {
    type: ActionsTypes.LOG_IN,
    payload: {
       user: IUser
    }
}

interface ILogOutAction {
    type: ActionsTypes.LOG_OUT
}

interface ISignUpAction {
    type: ActionsTypes.SIGN_UP,
    payload: {
        user: IUser
    }
}

interface IGetContactsAction {
    type: ActionsTypes.GET_CONTACTS,
    payload: {
        user: IUser
    }
}

interface IAddContactAction {
    type: ActionsTypes.ADD_CONTACT,
    payload: {
        user: IUser
    }
}

interface IChangeContactAction {
    type: ActionsTypes.CHANGE_CONTACT,
    payload: {
        user: IUser
    }
}

interface IDeleteContactAction {
    type: ActionsTypes.DELETE_CONTACT,
    payload: {
        user: IUser
    }
}

interface ISetErrorAction {
    type: ActionsTypes.SET_ERROR,
    payload: {
        error: IServerError | null
    }
}

interface ISetIsLoadingAction {
    type: ActionsTypes.SET_IS_LOADING,
    payload: {
        isLoading: boolean
    }
}

interface ISetIsLoggedInAction {
    type: ActionsTypes.SET_IS_LOGGED_IN,
    payload: {
        isLoggedIn: boolean
    }
}

export type action = ILogInAction | ILogOutAction | ISignUpAction | IAddContactAction | IChangeContactAction | IDeleteContactAction | IGetContactsAction | ISetErrorAction | ISetIsLoadingAction | ISetIsLoggedInAction