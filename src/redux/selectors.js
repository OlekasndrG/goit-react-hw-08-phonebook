

export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const getLoader = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.error;

