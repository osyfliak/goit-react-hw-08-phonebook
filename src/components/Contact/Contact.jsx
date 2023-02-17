import AddContactForm from './AddContactForm/AddContactForm';
import ContactList from './ContactList/ContactList';
import ContactFiltr from './ContactFiltr/ContactFiltr';
import { Title, Div } from './Style.styled';

const Contact = () => {
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
