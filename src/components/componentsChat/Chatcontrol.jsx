import { ChatcontrolContacts } from "./ChatcontrolContacts";
import { ChatcontrolSearch } from "./ChatcontrolSearch";
import styles from "./styleComponent/Chatcontrol.module.css";
export const Chatcontrol = () => {
  return (
    <div className={styles.main}>
      <ChatcontrolSearch />
      <ChatcontrolContacts />
    </div>
  );
};
