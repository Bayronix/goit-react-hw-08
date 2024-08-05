import ContactForm from "../../components/Contacts/ContactForm/ContactForm";
import SearchBox from "../../components/Contacts/SearchBox/SearchBox";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import style from "./ContactsPage.module.css";

function ContactsPage() {
  return (
    <div>
      <h1 className={style.h1}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
