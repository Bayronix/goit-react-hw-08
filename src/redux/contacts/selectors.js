import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    const lowercasedNameFilter = nameFilter.toLowerCase();
    const lowercasedNumberFilter = numberFilter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(lowercasedNameFilter) &&
        contact.number.toLowerCase().includes(lowercasedNumberFilter)
    );
  }
);
