import { Contact } from "./Contact";
import styles from "./styleComponent/ChatcontrolContacts.module.css";
import { useSelector } from "react-redux";
export const ChatcontrolContacts = () => {
  const contactsData = useSelector((state) => state.chat.contacts);
  console.log(contactsData);
  return (
    <div className={styles.main}>
      <h2 className={styles.header2}>Contacts</h2>
      <div className={styles.contactsWrapper}>
        {contactsData.map((data) => (
          <Contact
            name={data.name}
            lastMessage={data.lastMessage}
            id={data.id}
            key={data.id}
          />
        ))}
      </div>
    </div>
  );
};
