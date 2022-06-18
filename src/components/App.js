
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import '../assets/css/App.css';
import ContactList from './ContactList';
import AddContact from './AddContact';
import Header from './Header';
import ContactDetail from './ContactDetail';

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
      <Router>
        <Header />
        <Switch>
          <Route path='/' element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path='/contact/:contactId' element={<ContactDetail />} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
