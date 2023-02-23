import AddContactForm from '../../components/Contact/AddContactForm/AddContactForm';
import ContactList from '../../components/Contact/ContactList/ContactList';
import ContactFiltr from '../../components/Contact/ContactFiltr/ContactFiltr';
import { Title, Div } from '../../components/Contact/Style.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from 'redux/contact/contacts-thunk';

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (<>
  <Div>
  <AddContactForm />
    <Title>Contacts</Title>
    <ContactFiltr />
    <ContactList />
  </Div></>
    
  );
};

export default Contact;
