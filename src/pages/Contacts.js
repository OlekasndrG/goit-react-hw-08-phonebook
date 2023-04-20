import React, { useEffect } from 'react';


import { MainContainer,H1, H2 } from 'components/App.styled';
import ContactList from 'components/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoader } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsOperations';
import ContactsForm from 'components/Phonebook/FormikForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

export default function Contacts() {
  // const contactsArray = useSelector(getContacts);
  const isLoading = useSelector(getLoader);
  const isError = useSelector(getError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer>
      <H1>Phonebook</H1>
      <ContactsForm />
      <H2>Contacts</H2>
      <Filter />
      {isError && <p>{isError}</p>}
      {isLoading && <Loader />}
      {!isLoading && <ContactList />}
      <ToastContainer />
    </MainContainer>
  );
}
