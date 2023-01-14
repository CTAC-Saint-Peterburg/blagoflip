import styles from "../styleComponents/History.module.css";
import { Historygames } from "./Historygames";
export const History = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>History</span>
      </div>
      <div className={styles.games}>
        <Historygames />
      </div>
    </div>
  );
};
