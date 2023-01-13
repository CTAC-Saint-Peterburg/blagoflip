import Balance from "../components/Balance";
import Profile from "../components/Profile";
import styles from "./pagesStyle/Main.module.css";
export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <Balance />
        <Profile />
      </div>
    </div>
  );
}
