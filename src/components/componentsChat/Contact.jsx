import img from "../../images/avatar.png";
import styles from "./styleComponent/Contact.module.css";
import { useDispatch } from "react-redux";
import { removeContacts } from "../../store/chat/chatSlice";
export const Contact = ({ name, lastMessage, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div>
        <img className={styles.imageContact} src={img} alt="Avatar" />
      </div>
      <div>
        <h3 className={styles.header3}>{name}</h3>
        <span className={styles.lastMessage}>{lastMessage}</span>
      </div>
      <div>
        <button onClick={() => dispatch(removeContacts(id))}>delete</button>
      </div>
    </div>
  );
};
