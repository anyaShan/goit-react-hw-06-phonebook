import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getContacts, getValueFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getValueFilter);
  const dispatch = useDispatch;

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            key={id}
            name={name}
            number={number}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </List>
  );
};
