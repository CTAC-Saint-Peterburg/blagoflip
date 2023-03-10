import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/availableflips/availableflipsSlice";
import { setVisibility, setText } from "../store/profile/profileSlice";
import { decrement } from "../store/balance/balanceSlice";
import styles from "../styleComponents/CreateFlipSettings.module.css";
export default function CreateFlipSettings() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.value);
  const profileValues = useSelector((state) => state.profile.data);
  const alertStatus = useSelector((state) => state.profile.alert.visibility);
  const [value, setValue] = useState(0);
  const [buttons, setButtons] = useState([10, 50, 100, 500, 1000]);
  return (
    <div className={styles.main}>
      <h2 className={styles.value}>
        Value: <span>{value}</span>
      </h2>
      <div className={styles.buttons}>
        {buttons.map((x, index) => {
          return (
            <button key={index} onClick={() => setValue(x)}>
              {x}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => {
          if (balance >= value) {
            dispatch(
              add({
                id: Math.floor(Math.random() * 9999),
                name: `${profileValues.name}`,
                value: value,
              })
            );
            dispatch(decrement(value));
          } else if (!alertStatus) {
            dispatch(setVisibility(true));
            dispatch(setText("not enough money"));
          }
        }}
      >
        submit
      </button>
    </div>
  );
}
