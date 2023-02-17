import { Input, Label } from '../Style.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import { filterContactsActions } from 'redux/filter/filter-slise';

const ContactFiltr = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  
  return (
    <>
      <Label>Find contact by name </Label>
      <Input
        onChange={e=>dispatch(filterContactsActions(e.target.value))}
        value={filterValue}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </>
  );
};

export default ContactFiltr;
