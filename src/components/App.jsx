import { useState } from 'react';
import { useLocalStorage } from 'components/Hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import { Container } from 'components/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { INITIAL_CONTACTS } from 'components/UtilsComponents/UtilsComponents';

export function App() {
  // ======= заміна на useLocalStorage

  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? INITIAL_CONTACTS
  //   );
  // });
  // ==================================

  const [contacts, setContacts] = useLocalStorage('contacts', INITIAL_CONTACTS);
  const [filter, setFilter] = useState('');

  // ======= заміна на useLocalStorage

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);
  // ==================================

  const formAddContact = data => {
    const { name, number } = data;
    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }

    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value.toLocaleLowerCase());
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filter)
  );

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} changeFilter={changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </Section>
    </Container>
  );
}

// ==================================================================

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

// formAddContact = data => {
//   const { contacts } = this.state;
//   const { name, number } = data;
//   if (contacts.some(contact => contact.name === name)) {
//     return alert(`${name} is already in contacts.`);
//   }
//   this.setState(({ contacts }) => ({
//     contacts: [...contacts, { id: nanoid(), name, number }],
//   }));
// };

// changeFilter = event => {
//   this.setState({ filter: event.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizeFilter = filter.toLocaleLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLocaleLowerCase().includes(normalizeFilter)
//   );
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Container>
//         <Section title="Phonebook">
//           <ContactForm onSubmit={this.formAddContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} changeFilter={this.changeFilter} />
//           <ContactList
//             contacts={visibleContacts}
//             deleteContact={this.deleteContact}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }
