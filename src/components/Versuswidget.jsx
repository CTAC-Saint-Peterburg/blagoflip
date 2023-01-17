import styles from "../styleComponents/Versuswidget.module.css";
import avatarOne from "../images/avatar.png";
import avatarTwo from "../images/user2.jpg";
export default function Versuswidget() {
  return (
    <div className={styles.main}>
      <div className={styles.userImg}>
        <img src={avatarOne} alt="userlogo" />
        <h5>username</h5>
      </div>
      <h3>VS</h3>
      <div className={styles.userImg}>
        <img src={avatarTwo} alt="userlogo" />
        <h5>username</h5>
      </div>
    </div>
  );
}
