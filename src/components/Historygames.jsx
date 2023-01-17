import styles from "../styleComponents/Historygames.module.css";
import { Resultwidget } from "./Resultwidget";
import Versuswidget from "./Versuswidget";

export const Historygames = () => {
  return (
    <div className={styles.main}>
      <Resultwidget result="Winner" />
      <Versuswidget />
    </div>
  );
};
