// import Form from './Input/Input';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Registration } from 'pages/Register';
import { Login } from 'pages/Login';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Contacts from 'pages/Contacts';
import { getCurrenUser } from 'redux/AuthOperations';
import PrivateRoute from 'Routes/PrivateRoute';
import PublicRoute from 'Routes/PublicRoute';
import { getIsFetchingCurrentUser, getIsLoggedIn } from 'redux/selectors';
import PageLoader from './Loader/PageLoader';

export default function HookApp() {
  const isloggedin = useSelector(getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  const dispatch = useDispatch();
  // console.log(isLoggedIn);
  useEffect(() => {
    dispatch(getCurrenUser());
  }, [dispatch]);
  console.log(isloggedin);
  console.log();
  return isFetchingCurrentUser ? (
    <PageLoader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>This project</h1>} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <p>Sorry, no page found</p>
              </div>
            }
          />
        </Route>
      </Routes>

      {/* <H1>Phonebook</H1>
      <ContactsForm />
      <H2>Contacts</H2>
      <Filter />
      {isError && <p>{isError}</p>}
      {isLoading && <Loader />}
      {!isLoading && <ContactList />} */}
    </>
  );
}
