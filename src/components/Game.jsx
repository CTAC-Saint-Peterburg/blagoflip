import styles from "../styleComponents/Game.module.css";
import { Coin } from "./Coin";
import { useDispatch } from "react-redux";
import { change } from "../store/game/gameSlice";

export const Game = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.exit}>
          <button onClick={() => dispatch(change())}>exit</button>
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
