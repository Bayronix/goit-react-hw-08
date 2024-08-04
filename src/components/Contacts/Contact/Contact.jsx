import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import styles from "./Contact.module.css";
import Modal from "react-modal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.module.css";

Modal.setAppElement("#root");

const Contact = ({ contact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    closeModal();
    toast.success(`${contact.name} has been deleted`, {
      duration: 3000,
    });
  };

  return (
    <li className={styles.list}>
      <span className={styles.name}>{contact.name}</span>:
      <span className={styles.number}>{contact.number}</span>{" "}
      <button onClick={openModal} className={styles.button}>
        Delete
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Delete"
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {contact.name}?</p>
        <button onClick={handleDelete} className={styles.modalButton}>
          Yes
        </button>
        <button onClick={closeModal} className={styles.modalButton}>
          No
        </button>
      </Modal>
      <Toaster position="bottom-right" />
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
