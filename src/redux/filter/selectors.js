import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter;
const contacts = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
  [contacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
