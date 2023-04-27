

import { ContactsContainer } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { ContactListItem } from './ContactItem';
const ContactList = () => {
  const ContactsArray = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const SortedContactsArray = [...ContactsArray].sort((a, b) =>
    a.name[0].localeCompare(b.name[0])
  );
  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return SortedContactsArray;
    return SortedContactsArray.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterValue.toLowerCase())
    );
  };
  return (
    <>
      <ContactsContainer>
        {filteredContacts()?.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
      </ContactsContainer>
    </>
  );
};

export default ContactList;
