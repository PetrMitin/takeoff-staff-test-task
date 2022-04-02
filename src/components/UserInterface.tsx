import React, { FC } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import { useAppSelector } from '../store/hooks';
import ErrorMessage from './ErrorMessage';


const UserInteface: FC = () => {
    const isLoggedIn = useAppSelector(state => state.isLoggedIn)
    const error = useAppSelector(state => state.error)
    return (
        <div id='user-interface'>
            {error && <ErrorMessage />}
            <br />
            {isLoggedIn ? <HomePage /> : <LoginPage />}
        </div>
    )
}

export default UserInteface