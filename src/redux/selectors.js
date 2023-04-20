export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const getLoader = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.error;
export const getUserName = state => state.auth.user.name;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserToken = state => state.auth.token;
export const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
