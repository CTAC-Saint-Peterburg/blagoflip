import avatar from "../images/avatar.png";
import styles from "../styleComponents/Available.module.css";
import { useDispatch } from "react-redux";
import { change } from "../store/game/gameSlice";
export default function Availableflip(props) {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <img src={avatar} alt="avatar" />
      <h4>{props.name}</h4>
      <h5>{props.value}$</h5>
      <button onClick={() => dispatch(change())}>flip</button>
    </div>
  );
}
