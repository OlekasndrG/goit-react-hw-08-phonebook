import React, { useState } from 'react';
import { ReactComponent as DeleteIcon } from './DeleteIcon.svg';
import {
  ContactsContainer,
  FirstLetterDiv,
  SearchButton,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperations';
import DeleteModal from 'components/modal/DeleteModal';
const ContactList = () => {
  const [isShowModal, setisShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);
  const filterValue = useSelector(getFilter);

  const SortedContactsArray = [...ContactsArray].sort((a, b) =>
    a.name[0].localeCompare(b.name[0])
  );
  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return SortedContactsArray;
    return SortedContactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 
  return (
    <>
      <ContactsContainer>
        {filteredContacts()?.map(contact => {
           const randomColor = getRandomHexColor();
          return (
            <li key={contact.id}>
              <FirstLetterDiv style={{ background: `${randomColor}` }}>
                {contact.name[0]}
              </FirstLetterDiv>
              {contact.name} : {contact.number}
              <SearchButton
                type="button"
                onClick={() => {
                  setisShowModal(true);
                  setContactToDelete(contact.id);
                }}
              >
                <DeleteIcon width="28" height="28" />
              </SearchButton>
            </li>
          );
        })}
      </ContactsContainer>
      {isShowModal && (
        <DeleteModal
          deleteContact={() => {
            dispatch(deleteContact(contactToDelete));
            setContactToDelete(null);
            setisShowModal(false);
          }}
          closeModal={() => {
            setisShowModal(false);
          }}
        />
      )}
    </>
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
