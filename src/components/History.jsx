import { useSelector } from "react-redux";
import styles from "../styleComponents/History.module.css";
import { Historygames } from "./Historygames";
export const History = () => {
  const historyData = useSelector((state) => state.profile.history);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>History</span>
      </div>
      <div className={styles.games}>
        {historyData.map((x, index) => (
          <Historygames key={x.id} opponent={x.opponent} bet={x.bet} />
        ))}
      </div>
    </div>
  );
};
