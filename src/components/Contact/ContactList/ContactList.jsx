import { Button, List } from '../Style.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'redux/contact/contact-slice';
import { selectFilteredContacts } from 'redux/filter/filterSelector';

const ContactList = () => {
  const dispatch = useDispatch();
const deleteContact =(id)=> dispatch(deleteContactAction(id));

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
