import styles from "../styleComponents/Game.module.css";
import { useEffect } from "react";
import { Coin } from "./Coin";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../store/game/gameSlice";
import { Timer } from "./Timer";
import { deleteFlip } from "../store/availableflips/availableflipsSlice";

export const Game = () => {
  const data = useSelector((state) => state.game.data.receivedData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(deleteFlip(data));
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.exit}>
          <button onClick={() => dispatch(change())}>exit</button>
        </div>
        <div className={styles.timer}>
          <Timer value={10} />
        </div>
        <Coin data={data} />
        <div className={styles.bet}>
          <h3>{data.value}💰</h3>
        </div>

        {/* <div>Results</div> */}
      </div>
    </div>
  );
};
