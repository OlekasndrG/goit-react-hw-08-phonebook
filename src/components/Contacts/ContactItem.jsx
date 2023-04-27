import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact, FirstLetterDiv, SearchButton } from './Contacts.styled';
import { ReactComponent as DeleteIcon } from './DeleteIcon.svg';
import DeleteModal from 'components/modal/DeleteModal';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsOperations';
export const ContactListItem = ({ contact }) => {
  const [contactToDelete, setContactToDelete] = useState(null);
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();
  return (
    <>
      {contactToDelete ? (
        <DeleteModal
          deleteContact={() => {
            dispatch(deleteContact(contactToDelete.id));
            setContactToDelete(null);
          }}
          closeModal={() => {
            setContactToDelete(null);
          }}
          contact={
            [...ContactsArray].find(
              contact => contact.id === contactToDelete.id
            ).name || null
          }
        />
      ) : (
        <Contact key={contact.id}>
          <FirstLetterDiv style={{ background: `${randomColor}` }}>
            {contact.name[0]}
          </FirstLetterDiv>
          <div>
            {contact.name} : {contact.number}
          </div>

          <SearchButton
            type="button"
            onClick={() => {
              //   onSearchButtonClick(contact);
              setContactToDelete(contact);
            }}
          >
            <DeleteIcon width="24" height="24" />
          </SearchButton>
        </Contact>
      )}
    </>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
