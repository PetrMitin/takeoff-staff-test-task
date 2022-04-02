import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import Contact from "./Contact";

const ContactsList: FC = () => {
    const contacts = useAppSelector(state => state.user.contacts)
    return (
        <div id="contacts-list">
            <h2>Contacts</h2>
            {contacts.length === 0 
            ? <h3>There are no contacts to display!</h3>
            : contacts.map(contact => <Contact contact={contact} key={contact.id} />)}
        </div>
    )
}

export default ContactsList