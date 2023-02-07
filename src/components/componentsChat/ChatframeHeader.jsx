import styles from "./styleComponent/ChatframeHeader.module.css";
export default function ChatframeHeader() {
  return (
    <div className={styles.main}>
      <h2 className={styles.header2}>Name</h2>
      <span className={styles.spanData}>Online</span>
      <span className={styles.spanData}>last seen 07.02.2023</span>
    </div>
  );
}
