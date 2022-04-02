import { FC, useState } from "react";
import { useAppSelector } from "../store/hooks";
import Contact from "./Contact";
import SearchBar from "./SearchBar";

const ContactsList: FC = () => {
    const contacts = useAppSelector(state => state.user.contacts)
    const [searchClause, setSearchClause] = useState('')
    const filteredContacts = contacts.filter(contact => contact.email.toLowerCase().includes(searchClause.toLowerCase()))

    return (
        <div id="contacts-list">
            <h2>Contacts</h2>
            <SearchBar setSearchClause={setSearchClause} />
            {filteredContacts.length === 0 
            ? <h3>There are no contacts to display!</h3>
            : filteredContacts.map(contact => <Contact contact={contact} key={contact.id} />)}
        </div>
    )
}

export default ContactsList