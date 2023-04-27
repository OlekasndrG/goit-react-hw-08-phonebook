// import React, { useState } from 'react';
// import { ReactComponent as DeleteIcon } from './DeleteIcon.svg';
// import {
//   Contact,
//   ContactsContainer,
//   FirstLetterDiv,
//   SearchButton,
// } from './Contacts.styled';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getFilter } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsOperations';
// import DeleteModal from 'components/modal/DeleteModal';
// import { ContactListItem } from './ContactItem';
// const ContactList = () => {
//   const [isShowModal, setisShowModal] = useState(false);
//   const [contactToDelete, setContactToDelete] = useState(null);
//   const dispatch = useDispatch();
//   const ContactsArray = useSelector(getContacts);
//   const filterValue = useSelector(getFilter);

//   const SortedContactsArray = [...ContactsArray].sort((a, b) =>
//     a.name[0].localeCompare(b.name[0])
//   );
//   const filteredContacts = () => {
//     if (filterValue.toLowerCase() === '') return SortedContactsArray;
//     return SortedContactsArray.filter(
//       contact =>
//         contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   };

//   const onSearchButtonClick = contact => {
//     setisShowModal(true);
//     setContactToDelete(contact.id);
//   };
//   return (
//     <>
//       <ContactsContainer>
//         {filteredContacts()?.map(contact => {
//           return (
//             <ContactListItem
//               key={contact.id}
//               contact={contact}
//               onSearchButtonClick={onSearchButtonClick}
//               showDeleteButton={isShowModal}
//               deleteid={contact.name}
//             />
//           );
//         })}
//       </ContactsContainer>
//       {isShowModal && (
//         <DeleteModal
//           deleteContact={() => {
//             dispatch(deleteContact(contactToDelete));
//             setContactToDelete(null);
//             setisShowModal(false);
//           }}
//           closeModal={() => {
//             setisShowModal(false);
//           }}
//           contact={
//             [...ContactsArray].find(contact => contact.id === contactToDelete)
//               .name
//           }
//         />
//       )}
//     </>
//   );
// };

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

// export default ContactList;


  /* <Contact key={contact.id}>
  <FirstLetterDiv style={{ background: `${randomColor}` }}>
    {contact.name[0]}
  </FirstLetterDiv>
  <div>
    {contact.name} : {contact.number}
  </div>
  <SearchButton
    type="button"
    onClick={() => {
      onSearchButtonClick(contact);
    }}
  >
    <DeleteIcon width="28" height="28" />
  </SearchButton>
</Contact>; */

