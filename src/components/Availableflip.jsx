import avatar from "../images/avatar.png";
import styles from "../styleComponents/Available.module.css";
export default function Availableflip() {
  return (
    <div className={styles.main}>
      <img src={avatar} alt="avatar" />
      <h4>username</h4>
      <button>flip</button>
    </div>
  );
}
