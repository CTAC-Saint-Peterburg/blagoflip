import styles from "./styleComponents/Mutenotification.module.css";
export const Mutenotification = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.headers2}>Mute notifications</h2>
      <input type="checkbox" id="horns" name="horns" />
    </div>
  );
};
