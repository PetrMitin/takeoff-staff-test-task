export interface IUser {
    id: string,
    username: string,
    password: string,
    contacts: IContact[]
}

export interface IContact {
    id: string,
    phone: string,
    email: string
}

export interface IServerError {
    status: number, 
    message: string
}

export type IUserJSONRes = IUser[]
export interface IState {
    user: IUser,
    isLoading: boolean,
    isLoggedIn: boolean,
    error: null | IServerError
}