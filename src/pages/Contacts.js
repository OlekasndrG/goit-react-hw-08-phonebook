import React, { useEffect } from 'react';

import ContactList from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getLoader } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import ContactsForm from 'components/Phonebook/FormikForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ContactsPageHEader, H1, MainContainer } from './Contacts.styled';

export default function Contacts() {
  const isLoading = useSelector(getLoader);
  const isError = useSelector(getError);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <MainContainer>
          <H1>Phonebook</H1>
        <ContactsPageHEader>
        <ContactsForm />
          <Filter />
          </ContactsPageHEader>
        {contacts.length > 0 ? (
          <p>You have {contacts.length} contact(s)</p>
        ) : (
          <p>You have no contacts yet</p>
        )}

        {isError && <p>{isError}</p>}
        {isLoading && <Loader />}
        {!isLoading && <ContactList />}
      </MainContainer>
    </>
  );
}
