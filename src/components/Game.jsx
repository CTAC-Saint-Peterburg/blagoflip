import styles from "../styleComponents/Game.module.css";
import Versuswidget from "./Versuswidget";
export const Game = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.exit}>
          <button>exit</button>
        </div>
        <div>coin 0</div>

        <div>oponents</div>
      </div>
    </div>
  );
};
