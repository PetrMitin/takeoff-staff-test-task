import { ChangeEvent, FC, MouseEventHandler, useState } from "react";
import {useDispatch} from 'react-redux'
import { useAppSelector } from "../store/hooks";
import actionCreators from "../store/action-creators";
import { IContact } from "../utils/myInterfaces";
import MyInput from "./myInput";
import './NewContact.scss'

const NewContact: FC = props => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const user = useAppSelector(state => state.user)
    const dispatch = useDispatch()

    const handleEmailChange: React.ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.target.value)
    }

    const handlePhoneChange: React.ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        setPhone(event.target.value)
    }

    const handleContactSubmit: MouseEventHandler = (event: React.MouseEvent): void => {
        event.preventDefault()
        const newContact: IContact = {
            id: Date.now().toString(),
            email,
            phone
        }
        dispatch(actionCreators.addContactsAction(user, newContact))
    }
    
    return (
        <div className="contact new-contact">
            <h3>Add new contact</h3>
            <MyInput type='email' handleChange={handleEmailChange} />
            <MyInput type='phone' handleChange={handlePhoneChange} />
            <button onClick={handleContactSubmit} className='add-contact-button'>Add contact</button>
        </div>
    )
}

export default NewContact