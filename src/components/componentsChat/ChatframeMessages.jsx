import styles from "./styleComponent/ChatframeMessages.module.css";
import { useSelector } from "react-redux";
export const ChatframeMessages = () => {
  const msg = useSelector((state) => state.chat.messages);

  return (
    <div className={styles.main}>
      {msg.map((msg, index) => {
        if (msg.type === "inmsg") {
          return (
            <div className={styles.incomingMessages} key={msg.id}>
              <span>{msg.text}</span>
            </div>
          );
        } else if (msg.type === "mymsg") {
          return (
            <div className={styles.myMessages} key={msg.id}>
              <span>{msg.text}</span>
            </div>
          );
        } else return null;
      })}
    </div>
  );
};
