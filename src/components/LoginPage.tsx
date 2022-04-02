import React, {ChangeEvent, FC, MouseEventHandler, useState} from "react"
import MyInput from './myInput'
import actionCreators from "../store/action-creators"
import {useDispatch} from 'react-redux'
import './LoginPage.scss'

const LoginPage: FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleUsernameChange: React.ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value)
    }

    const handlePasswordChange: React.ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogIn: MouseEventHandler = (event: React.MouseEvent): void => {
        event.preventDefault()
        dispatch(actionCreators.logInAction(username, password))
    }

    const handleSignUp: MouseEventHandler = (event: React.MouseEvent): void => {
        event.preventDefault()
        dispatch(actionCreators.signUpAction(username, password))
    }

    return (
    <div id="login-page">
        <h1>Login Page</h1>
        <div className="input-container">
            <MyInput type='username' handleChange={handleUsernameChange} />
            <MyInput type='password' handleChange={handlePasswordChange} />
        </div>
        <div className="button-container">
            <button type='submit' onClick={handleLogIn}>Log In</button>
            <br/>
            <button type='submit' onClick={handleSignUp}>Sign Up</button>
        </div>
    </div>)
}

export default LoginPage