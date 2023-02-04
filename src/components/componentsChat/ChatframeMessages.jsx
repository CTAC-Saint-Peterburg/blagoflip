import { useState } from "react";
import styles from "./styleComponent/ChatframeMessages.module.css";
export const ChatframeMessages = () => {
  const [msg, setMsg] = useState([
    { text: "sir?", type: "mymsg" },
    { text: "hm?", type: "inmsg" },
    { text: "hello comrade!", type: "inmsg" },
    { text: "hello comrade!", type: "mymsg" },
    { text: "hello comrade!", type: "mymsg" },
    { text: "hello comrade!", type: "mymsg" },
  ]);

  return (
    <div className={styles.main}>
      {msg.map((msg, index) => {
        if (msg.type === "inmsg") {
          return (
            <div className={styles.incomingMessages} key={index}>
              <span>{msg.text}</span>
            </div>
          );
        } else if (msg.type === "mymsg") {
          return (
            <div className={styles.myMessages} key={index}>
              <span>{msg.text}</span>
            </div>
          );
        }
      })}
    </div>
  );
};
