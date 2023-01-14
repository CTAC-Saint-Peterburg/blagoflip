import styles from "../styleComponents/Profile.module.css";
import img from "../images/avatar.png";
export default function Profile() {
  return (
    <div className={styles.main}>
      <h3 className={styles.h3Profile}>ID#1</h3>
      <div className={styles.imgwrapper}>
        <img className={styles.imgProfile} src={img} alt="Avatar" />
        <h2 className={styles.h2Profile}>crazyBet</h2>
      </div>
      <h4 className={styles.h4Winrate}>Winrate 51%</h4>
    </div>
  );
}
