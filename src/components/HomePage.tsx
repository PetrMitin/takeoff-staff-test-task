import React, {FC, MouseEventHandler} from "react"
import { useAppSelector } from "../store/hooks"
import {useDispatch} from 'react-redux'
import ContactsList from "./ContactsList"
import NewContact from "./newContact"
import actionCreators from "../store/action-creators"
import './HomePage.scss'

const HomePage: FC = () => {
    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user)

    const handleLogOut: MouseEventHandler = (event: React.MouseEvent): void => {
        event.preventDefault()
        dispatch(actionCreators.logOutAction())
    }
    return (
    <div id="home-page">
        <h1>Welcome, {user?.username}</h1>
        <NewContact />
        <ContactsList />
        <button onClick={handleLogOut} className='logout-button'>Log Out</button>
    </div>)
}

export default HomePage