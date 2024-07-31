import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.list}>
      <span className={styles.name}>{contact.name}</span>:
      <span className={styles.number}>{contact.number}</span>{" "}
      <button onClick={handleDelete} className={styles.button}>
        Delete
      </button>
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
