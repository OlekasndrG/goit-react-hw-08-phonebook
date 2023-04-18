import React from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
// import PropTypes from 'prop-types';
import { ContactsContainer } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
const ContactList = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return ContactsArray;
    return ContactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <ContactsContainer>
      {filteredContacts()?.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(contact.id));
             
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactsContainer>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       number: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteClick: PropTypes.func.isRequired,
// };

export default ContactList;
