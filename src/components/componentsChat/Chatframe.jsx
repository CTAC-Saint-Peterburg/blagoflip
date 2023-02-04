import ChatframeHeader from "./ChatframeHeader";
import ChatframeInput from "./ChatframeInput";
import styles from "./styleComponent/Chatframe.module.css";
export const Chatframe = () => {
  return (
    <div className={styles.main}>
      <ChatframeHeader />
      <ChatframeInput />
    </div>
  );
};
