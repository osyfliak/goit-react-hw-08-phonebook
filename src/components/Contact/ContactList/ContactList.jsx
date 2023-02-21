import { Button, List } from '../Style.styled';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/filter/filterSelector';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contact/contacts-thunk';

const ContactList = () => {
  const dispatch = useDispatch();
  const deleteContact = id =>
    dispatch(deleteContactsThunk(id))
      .unwrap()
      .then(() => dispatch(getContactsThunk()));

  const contactList = useSelector(selectFilteredContacts);
  return (
    <List>
      {contactList.map(item => (
        <li key={item.id}>
          {item.name}: {item.number}
          <Button onClick={() => deleteContact(item.id)} type="button">
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};

export default ContactList;
