import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import { PiAddressBookTabsLight } from "react-icons/pi";


function App() {
  const contactData = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
  
  const [searchBox, setSearchBox] = useState('');
  const [contacts, setContacts] = useState(()=>{
    const savedContacts = window.localStorage.getItem("saved-contact");
    return savedContacts ? JSON.parse(savedContacts) : contactData;
  });

  useEffect(()=>{
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    setContacts(prev => {
      return [...prev, newContact]
    })
  };

  const deleteContact = (contactId) =>{
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId)
    })
  }

  const filterContactList = contacts.filter((contact) => contact.name.toLowerCase().includes(searchBox.toLowerCase()))

  return (
    <>
      <div className='containerPhonebook'>
        <h1 className = "title">Phonebook <PiAddressBookTabsLight size='30' /></h1>
        <ContactForm onAdd={addContact}/>
        <SearchBox value={searchBox} onFilter={setSearchBox} />
        <ContactList dataListContact={filterContactList} onDelete={deleteContact}/>
        {/* {contacts.length !== 0 ? (
          <ContactList dataListContact={filterContactList} onDelete={deleteContact}/>
          ) : (<p className={s.infoText}>Your phonebook is empty</p>)} */}
          
      </div>
    </>
  )
}

export default App
