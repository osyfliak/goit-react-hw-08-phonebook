import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import ContactFiltr from './ContactFiltr/ContactFiltr';
import { Title, Div } from './Style.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/contactsSelector';
import { getContactsThunk } from 'redux/contact/contacts-thunk';

const Contact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Div>
      <AddContactForm />
      <Title>Contacts</Title>
      <ContactFiltr />
      <ContactList />
    </Div>
  );
};

export default Contact;
