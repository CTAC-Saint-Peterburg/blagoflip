import styles from "./styleComponent/ChatframeInput.module.css";
export default function ChatframeInput() {
  return (
    <div className={styles.main}>
      <div className={styles.input}>
        <input placeholder="write your message..." />
      </div>
      <div>
        <button>☄️</button>
      </div>
    </div>
  );
}
