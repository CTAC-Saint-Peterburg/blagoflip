import styles from "../styleComponents/Balance.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/balance/balanceSlice";

export default function Balance() {
  const balanceValue = useSelector((state) => state.balance.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <h3 className={styles.h3Balance}>Balance</h3>
      <h2 className={styles.h2Balance}>{balanceValue}$</h2>
      <div className={styles.buttonblock}>
        <button
          onClick={() => {
            const value = Number(prompt());
            if (value <= balanceValue) {
              dispatch(decrement(value));
            } else alert("incorrect value");
          }}
        >
          снять
        </button>
        <button
          onClick={() => {
            dispatch(increment(Number(prompt())));
          }}
        >
          пополнить
        </button>
      </div>
    </div>
  );
}
