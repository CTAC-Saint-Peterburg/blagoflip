import styles from "../styleComponents/Profile.module.css";
import { useSelector } from "react-redux";
import img from "../images/avatar.png";
export default function Profile() {
  const profileValues = useSelector((state) => state.profile.data);
  return (
    <div className={styles.main}>
      <h3 className={styles.h3Profile}>ID# {profileValues.id}</h3>
      <div className={styles.imgwrapper}>
        <img className={styles.imgProfile} src={img} alt="Avatar" />
        <h2 className={styles.h2Profile}>{profileValues.name}</h2>
      </div>
      <h4 className={styles.h4Winrate}>Winrate {profileValues.winrate}%</h4>
    </div>
  );
}
