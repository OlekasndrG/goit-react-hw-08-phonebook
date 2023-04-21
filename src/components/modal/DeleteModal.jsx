import PropTypes from 'prop-types';
const DeleteModal = ({ deleteContact, closeModal }) => {
  return (
    <div>
      <h2>Are You sure?</h2>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
      <button type="button" onClick={closeModal}>
        Go back
      </button>
    </div>
  );
};

DeleteModal.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DeleteModal;
