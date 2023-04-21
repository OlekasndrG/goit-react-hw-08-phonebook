import React, { useState } from 'react';
// import { ReactComponent as AddIcon } from '../icons/search.svg';
import { ContactsContainer, SearchButton } from './Contacts.styled';
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
  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return ContactsArray;
    return ContactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return (
    <>
      <ContactsContainer>
        {filteredContacts()?.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.number}
              <SearchButton
                type="button"
                onClick={() => {
                  setisShowModal(true);
                  setContactToDelete(contact.id);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
              
                  viewBox="0 0 16 16"
                >
                 
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
                {/* <AddIcon width="28" height="28" /> */}
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
