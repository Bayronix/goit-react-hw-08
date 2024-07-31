import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { fetchContacts } from "../../../redux/contacts/operations";
import { selectFilteredContacts } from "../../../redux/contacts/slice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contact}>
      <ul className={styles.list}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))
        ) : (
          <li>No contacts found.</li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
