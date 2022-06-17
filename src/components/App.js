
import React, { useState, useEffect }  from 'react';
import { v4 as uuid } from 'uuid';
import '../assets/css/App.css';
import ContactList from './ContactList';
import AddContact from './AddContact';
import Header from './Header';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {

    setContacts([...contacts, { ...contact, id:  uuid() }]);
  };

  const removeContactHandler = (id) =>{
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    
    if (retriveContacts) { 
      setContacts(retriveContacts);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
