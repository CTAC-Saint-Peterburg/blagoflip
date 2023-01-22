import avatar from "../images/avatar.png";
import styles from "../styleComponents/Available.module.css";
export default function Availableflip(props) {
  return (
    <div className={styles.main}>
      <img src={avatar} alt="avatar" />
      <h4>{props.name}</h4>
      <h5>{props.value}$</h5>
      <button>flip</button>
    </div>
  );
}
