import styles from "./styleComponent/ChatcontrolSearch.module.css";
export const ChatcontrolSearch = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapperSearch}>
        <h2>Enter user ID or Name:</h2>
        <div className={styles.inputDiv}>
          <input placeholder="search..." />
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <h4>Results:</h4>
        <div className={styles.resultUnitsWrapper}>
          <div className={styles.resultUnit}>123</div>
          <div className={styles.resultUnit}>1233</div>
          <div className={styles.resultUnit}>213</div>
          <div className={styles.resultUnit}>123</div>
          <div className={styles.resultUnit}>1233</div>
          <div className={styles.resultUnit}>213</div>
          <div className={styles.resultUnit}>123</div>
          <div className={styles.resultUnit}>1233</div>
          <div className={styles.resultUnit}>213</div>
        </div>
      </div>
    </div>
  );
};
