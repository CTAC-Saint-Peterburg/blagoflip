import styles from "../styleComponents/Historygames.module.css";
import { Resultwidget } from "./Resultwidget";
import Versuswidget from "./Versuswidget";

export const Historygames = ({ opponent, bet }) => {
  const incomingData = {
    opponent: opponent,
    bet: bet,
  };
  return (
    <div className={styles.main}>
      <Resultwidget result="Winner" />
      <Versuswidget data={incomingData} />
    </div>
  );
};
