// import Form from './Input/Input';

import React from 'react';
import { H1, H2, MainContainer } from './App.styled';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import ContactsForm from './Phonebook/FormikForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import {  getError, getLoader } from 'redux/selectors';
import Loader from './Loader/Loader';


export default function HookApp() {
  // const contactsArray = useSelector(getContacts);
  const isLoading = useSelector(getLoader);
  const isError = useSelector(getError)
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
      {isLoading && <Loader/>}
      {!isLoading && <ContactList />}
    </MainContainer>
  );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
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

//   formSubmitHandler = (data, { resetForm }) => {
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === data.name.toLowerCase()
//       )
//     ) {
//       alert(`${data.name} is already in contacts.`);
//       return;
//     }
//     const newContact = {
//       ...data,
//       id: nanoid(),
//     };
//     this.setState(prev => ({
//       contacts: [...prev.contacts, newContact],
//     }));
//     resetForm();
//   };

//   onChangeFilterValue = evt => {
//     this.setState({
//       filter: evt.target.value,
//     });
//   };

//   filteredContacts = () => {
//     const filter = this.state.filter.toLowerCase();
//     if (filter === '') return this.state.contacts;
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter)
//     );
//   };

//   onDeleteContact = currentContactID => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(
//         contact => contact.id !== currentContactID
//       ),
//     }));
//   };

//   render() {
//     return (
//       <MainContainer>
//         <H1>Phonebook</H1>
//         <ContactsForm handleSubmit={this.formSubmitHandler} />
//         <H2>Contacts</H2>
//         <Filter
//           value={this.state.filter}
//           onChangeFilterValue={this.onChangeFilterValue}
//         />
//         <ContactList
//           contacts={this.filteredContacts()}
//           onDeleteClick={this.onDeleteContact}
//         />
//       </MainContainer>
//     );
//   }
// }

// export default App;
