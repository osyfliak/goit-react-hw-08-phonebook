import { useEffect, useState } from 'react';
import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import ContactFiltr from './ContactFiltr/ContactFiltr';
import { Title, Div } from './Style.styled';

const LOCAL_CONTACT_KEY = 'localContactKey';

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContactList = JSON.parse(
      localStorage.getItem(LOCAL_CONTACT_KEY)
    );
    if (savedContactList) {
      setContactList(savedContactList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_CONTACT_KEY, JSON.stringify(contactList));
  }, [contactList]);

  const handleChangeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };
  const handleFilterFilms = () => {
    return contactList.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const hanleDeleteContact = id => {
    setContactList(prev => prev.filter(item => item.id !== id));
  };

  const hanleAddContact = newContact => {
    if (
      contactList.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      return alert('ERRROR');
    }
    setContactList(prev => [...prev, newContact]);
  };

  return (
    <Div>
      <AddContactForm onAddContact={hanleAddContact} />
      <Title>Contacts</Title>
      <ContactFiltr onChange={handleChangeFilter} name={filter} />
      <ContactList
        contactList={handleFilterFilms()}
        onDeleteContact={hanleDeleteContact}
      />
    </Div>
  );
};

export default Contact;
