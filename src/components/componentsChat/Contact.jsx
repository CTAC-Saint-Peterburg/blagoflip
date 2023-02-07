import img from "../../images/avatar.png";
import styles from "./styleComponent/Contact.module.css";
export const Contact = () => {
  return (
    <div className={styles.main}>
      <div>
        <img className={styles.imageContact} src={img} alt="Avatar" />
      </div>
      <div>
        <h3 className={styles.header3}>Name</h3>
        <span className={styles.lastMessage}>last message</span>
      </div>
      <div>
        <button>delete</button>
      </div>
    </div>
  );
};
