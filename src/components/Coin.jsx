import { useState } from "react";
import styles from "../styleComponents/Coin.module.css";
import avatarOne from "../images/avatar.png";
import avatarTwo from "../images/user2.jpg";
import { useSelector } from "react-redux";

export const Coin = ({ data }) => {
  const yourProfile = useSelector((state) => state.profile.data.name);
  const [value, setValue] = useState(0);
  const rotate = {
    transition: "3s",
    transform: `rotate(${value}deg)`,
  };
  return (
    <div className={styles.main}>
      <div className={styles.userImg}>
        <img src={avatarOne} alt="userlogo" />
        <h5>{yourProfile}</h5>
      </div>
      <div>
        <div
          className={styles.coin}
          onClick={() => {
            if (value >= 1080) {
              setValue(0);
            } else setValue(1080);
          }}
        >
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
