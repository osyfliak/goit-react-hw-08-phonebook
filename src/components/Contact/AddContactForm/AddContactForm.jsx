import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, Button, Title } from '../Style.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contact/contactsSelector';

import { addContactsThunk } from 'redux/contact/contacts-thunk';

const AddContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const contactList = useSelector(selectContacts);

  const handleSubmitForm = e => {
    e.preventDefault();
    const newContact = { name, number };
    if (
      contactList.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          name.toLowerCase().trim()
      )
    ) {
      return alert('ERRROR');
    }
    dispatch(addContactsThunk(newContact))
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmitForm}>
        <Label>Name</Label>
        <Input
          onChange={handleChangeForm}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label>Number</Label>
        <Input
          onChange={handleChangeForm}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

AddContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default AddContactForm;
