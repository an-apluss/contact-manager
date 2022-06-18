import React from "react";
import { Link } from 'react-router-dom';
import ContactCard from "./ContactCard";


const ContactList = ({contacts, getContactId}) => {
    
    const deleteContactHandler = (id) => {
        getContactId(id);
    };

    const renderContactList = contacts.map(contact => {
        return (
            <ContactCard key={contact.id} contact={contact} clickHandler={deleteContactHandler} />
        )
    });

    return (
        <div className="ui big celled list" style={{ marginTop:'70px', }}>
            <h3 className="header">
                Contact List
                <Link to='/add'>
                    <button className="ui button blue right floated">Add new contact</button>
                </Link>
            </h3>

            {renderContactList}
        </div>
    );
};

export default ContactList;