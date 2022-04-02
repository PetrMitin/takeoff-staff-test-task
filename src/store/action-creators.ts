import { AppDispatch } from "./store";
import apiActions from "../utils/apiActions";
import { action, ActionsTypes } from "./actions";
import {IUser, IServerError, IContact} from '../utils/myInterfaces'

class ActionCreators {
    logInAction = (username: string, password: string) => {
        return async (dispatch: AppDispatch<action>) => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const user = await apiActions.logIn(username, password)
                dispatch({type: ActionsTypes.LOG_IN, payload: {user}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    logOutAction = () => {
        return {type: ActionsTypes.LOG_OUT}
    }

    signUpAction = (username: string, password: string) => {
        return async (dispatch: AppDispatch<action>) => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const user = await apiActions.signUp(username, password)
                dispatch({type: ActionsTypes.SIGN_UP, payload: {user}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    getContactsAction = (user: IUser) => {
        return async (dispatch: AppDispatch<action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const resUser = await apiActions.getContacts(user)
                dispatch({type: ActionsTypes.GET_CONTACTS, payload: {user: resUser}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    addContactsAction = (user: IUser, contact: IContact) => {
        return async (dispatch: AppDispatch<action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const resUser = await apiActions.addContact(user, contact)
                console.log(resUser)
                dispatch({type: ActionsTypes.ADD_CONTACT, payload: {user: resUser}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    changeContactsAction = (user: IUser, contact: IContact) => {
        return async (dispatch: AppDispatch<action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const resUser = await apiActions.changeContact(user, contact)
                console.log(resUser)
                dispatch({type: ActionsTypes.CHANGE_CONTACT, payload: {user: resUser}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    deleteContactsAction = (user: IUser, contact: IContact) => {
        return async (dispatch: AppDispatch<action>): Promise<void> => {
            try {
                dispatch(this.setIsLoadingAction(true))
                const resUser = await apiActions.deleteContact(user, contact)
                console.log(resUser)
                dispatch({type: ActionsTypes.DELETE_CONTACT, payload: {user: resUser}})
                dispatch(this.setErrorAction(null))
            } catch(e: any) {
                dispatch(this.setErrorAction({message: e.message, status: e.status || 500}))
            } finally {
                dispatch(this.setIsLoadingAction(false))
            }
        }
    }

    setErrorAction = (error: IServerError | null): action => ({
        type: ActionsTypes.SET_ERROR,
        payload: {error}    
    })

    setIsLoadingAction = (isLoading: boolean): action => ({
        type: ActionsTypes.SET_IS_LOADING,
        payload: {isLoading}
    })

    setIsLoggedInAction = (isLoggedIn: boolean): action => ({
        type: ActionsTypes.SET_IS_LOGGED_IN,
        payload: {isLoggedIn}
    })
}

export default new ActionCreators()