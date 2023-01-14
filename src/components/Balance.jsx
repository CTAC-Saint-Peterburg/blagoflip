import styles from "../styleComponents/Balance.module.css";
export default function Balance() {
  return (
    <div className={styles.main}>
      <h3 className={styles.h3Balance}>Balance</h3>
      <h2 className={styles.h2Balance}>10.00$</h2>
      <div className={styles.buttonblock}>
        <button>снять</button>
        <button>пополнить</button>
      </div>
    </div>
  );
}
