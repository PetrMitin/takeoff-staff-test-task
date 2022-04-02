import { ChangeEvent, FC, MouseEventHandler, useState } from "react";
import {useDispatch} from 'react-redux'
import { useAppSelector } from "../store/hooks";
import actionCreators from "../store/action-creators";
import { IContact } from "../utils/myInterfaces";
import MyInput from "./myInput";
import './Contact.scss'

const Contact: FC<{contact: IContact}> = props => {
    const [email, setEmail] = useState(props.contact.email)
    const [phone, setPhone] = useState(props.contact.phone)
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
            ...props.contact,
            email: email ? email : props.contact.email,
            phone: phone ? phone : props.contact.phone
        }
        dispatch(actionCreators.changeContactsAction(user, newContact))
    }

    const handleContactDeletion: MouseEventHandler = (event: React.MouseEvent): void => {
        event.preventDefault()
        dispatch(actionCreators.deleteContactsAction(user, props.contact))
    }
    
    return (
        <div className="contact">
            <h3>{props.contact.id}</h3>
            <MyInput type='email' defaultValue={props.contact.email} handleChange={handleEmailChange} />
            <MyInput type='phone' defaultValue={props.contact.phone} handleChange={handlePhoneChange} />
            <button onClick={handleContactSubmit} className='change-contact-button'>Change contact</button>
            <br/>
            <button onClick={handleContactDeletion} className='delete-contact-button'>Delete</button>
        </div>
    )
}

export default Contact