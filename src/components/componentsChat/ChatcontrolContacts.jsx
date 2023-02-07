import { Contact } from "./Contact";
import styles from "./styleComponent/ChatcontrolContacts.module.css";
console.log(styles);
export const ChatcontrolContacts = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.header2}>Contacts</h2>
      <div className={styles.contactsWrapper}>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
