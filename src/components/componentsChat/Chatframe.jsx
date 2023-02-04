import ChatframeHeader from "./ChatframeHeader";
import ChatframeInput from "./ChatframeInput";
import { ChatframeMessages } from "./ChatframeMessages";
import styles from "./styleComponent/Chatframe.module.css";
export const Chatframe = () => {
  return (
    <div className={styles.main}>
      <ChatframeHeader />
      <ChatframeMessages />
      <ChatframeInput />
    </div>
  );
};
