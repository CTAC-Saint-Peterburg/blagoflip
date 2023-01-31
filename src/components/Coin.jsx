import { useState, useEffect } from "react";
import styles from "../styleComponents/Coin.module.css";
import avatarOne from "../images/avatar.png";
import avatarTwo from "../images/user2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { setWheelSpin } from "../store/game/gameSlice";
import { addToHistory } from "../store/profile/profileSlice";

export const Coin = ({ data }) => {
  const yourProfile = useSelector((state) => state.profile.data.name);
  const wheelSpin = useSelector((state) => state.game.data.wheelSpin);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const rotate = {
    transition: "3s",
    transform: `rotate(${value}deg)`,
  };
  useEffect(() => {
    if (wheelSpin) {
      const randomWinner = Math.floor(Math.random() * 2);
      if (randomWinner === 0) {
        setValue(1260);

        dispatch(
          addToHistory({ id: data.id, opponent: data.name, bet: data.value })
        );
      } else if (randomWinner === 1) {
        setValue(1080);

        dispatch(
          addToHistory({ id: data.id, opponent: data.name, bet: data.value })
        );
      }
      dispatch(setWheelSpin());
    }
  }, [wheelSpin]);
  return (
    <div className={styles.main}>
      <div className={styles.userImg}>
        <img src={avatarOne} alt="userlogo" />
        <h5>{yourProfile}</h5>
      </div>
      <div>
        <div className={styles.coin} onClick={() => {}}>
          <div className={styles.innerCoin} style={rotate}>
            <div className={styles.loser}>loser</div>
            <div className={styles.middle}></div>
            <div className={styles.winner}>winner</div>
          </div>
        </div>
      </div>
      <div className={styles.userImg}>
        <img src={avatarTwo} alt="userlogo" />
        <h5>{data.name}</h5>
      </div>
    </div>
  );
};
