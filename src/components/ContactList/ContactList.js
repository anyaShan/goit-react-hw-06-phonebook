import { useSelector } from 'react-redux/es/exports';
import { selectContacts, selectValueFilter } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectValueFilter);

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
