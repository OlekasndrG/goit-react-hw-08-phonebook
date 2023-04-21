import React, { useEffect } from 'react';


import { MainContainer,H1, H2 } from 'components/App.styled';
import ContactList from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getLoader } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import ContactsForm from 'components/Phonebook/FormikForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';


export default function Contacts() {
  // const contactsArray = useSelector(getContacts);
  const isLoading = useSelector(getLoader);
  const isError = useSelector(getError);
  const contacts =useSelector(getContacts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <H1>Phonebook</H1>
      <ContactsForm />
      <H2>Contacts</H2>
      {contacts.length>0?<p>You have {contacts.length} contact(s)</p> : <p>You have no contacts yet</p>}
      
      <Filter />
      {isError && <p>{isError}</p>}
      {isLoading && <Loader />}
      {!isLoading && <ContactList />}
    </MainContainer>
  );
}
