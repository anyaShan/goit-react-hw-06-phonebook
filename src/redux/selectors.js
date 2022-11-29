import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;

export const selectValueFilter = state => state.filter.value;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, filterContact) => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterContact)
    );
  }
);
