import styles from "./styleComponents/Promocode.module.css";
export const Promocode = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.headers2}>Promocode:</h2>
      <input placeholder="enter your code" />
      <button>submit</button>
    </div>
  );
};
