import { Chatcontrol } from "../components/componentsChat/Chatcontrol";
import { Chatframe } from "../components/componentsChat/Chatframe";
import styles from "./pagesStyle/Chat.module.css";
export default function Chat() {
  return (
    <div className={styles.main}>
      <Chatcontrol />
      <Chatframe />
    </div>
  );
}
