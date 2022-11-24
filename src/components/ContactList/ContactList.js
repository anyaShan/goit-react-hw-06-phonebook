import { useSelector } from 'react-redux/es/exports';
import { getContacts, getValueFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getValueFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );
  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </List>
  );
};
