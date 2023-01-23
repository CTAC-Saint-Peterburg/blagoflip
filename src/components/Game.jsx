import styles from "../styleComponents/Game.module.css";
import { Coin } from "./Coin";
import Versuswidget from "./Versuswidget";
export const Game = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.exit}>
          <button>exit</button>
        </div>
        <div className={styles.timer}>
          <span>1:33</span>
        </div>
        <Coin />

        {/* <div>Results</div> */}
      </div>
    </div>
  );
};
