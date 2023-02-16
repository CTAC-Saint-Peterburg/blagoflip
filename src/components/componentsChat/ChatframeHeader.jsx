import styles from "./styleComponent/ChatframeHeader.module.css";
import { useSelector } from "react-redux";
export default function ChatframeHeader() {
  const data = useSelector((state) => state.chat.activeMessages.info);
  return (
    <div className={styles.main}>
      <h2 className={styles.header2}>{data.name}</h2>
      <span className={styles.spanData}>{data.status}</span>
      <span className={styles.spanData}>last seen 07.02.2023</span>
    </div>
  );
}
