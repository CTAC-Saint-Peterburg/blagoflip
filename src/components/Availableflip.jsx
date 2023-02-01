import avatar from "../images/avatar.png";
import styles from "../styleComponents/Available.module.css";
import { useDispatch, useSelector } from "react-redux";
import { change, sendData } from "../store/game/gameSlice";
import { setVisibility, setText } from "../store/profile/profileSlice";
export default function Availableflip({ name, value, id }) {
  const yourProfile = useSelector((state) => state.profile.data.name);
  const alertStatus = useSelector((state) => state.profile.alert.visibility);
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <img src={avatar} alt="avatar" />
      <h4>{name}</h4>
      <h5>{value}$</h5>
      <button
        onClick={() => {
          if (name !== yourProfile) {
            dispatch(change());
            dispatch(sendData({ id: id, name: name, value: value }));
          } else if (!alertStatus) {
            dispatch(setVisibility(true));
            dispatch(setText("You can not take your own game"));
          }
        }}
      >
        flip
      </button>
    </div>
  );
}
