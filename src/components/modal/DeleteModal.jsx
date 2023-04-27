import PropTypes from 'prop-types';
import { DeleteModalContainer } from './DeleteModal.styled';
const DeleteModal = ({ deleteContact, closeModal, contact }) => {
  return (
    <DeleteModalContainer>
      <p>Are You sure You want to delete {contact}?</p>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
      <button type="button" onClick={closeModal}>
        Go back
      </button>
    </DeleteModalContainer>
  );
};

DeleteModal.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
};

export default DeleteModal;
