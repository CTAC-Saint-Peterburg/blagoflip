import Balance from "../components/Balance";
import { CreateFlip } from "../components/CreateFliip";
import Flips from "../components/Flips";
import { Game } from "../components/Game";
import { History } from "../components/History";
import Alerts from "../components/Alerts";
import Profile from "../components/Profile";
import styles from "./pagesStyle/Main.module.css";
import { useSelector } from "react-redux";
export default function Main() {
  const visibleGame = useSelector((state) => state.game.data.visibility);
  const visibleAlert = useSelector((state) => state.profile.alert.visibility);
  console.log(visibleAlert, "alert visibility");
  return (
    <div className={styles.main}>
      {visibleAlert ? <Alerts /> : ""}
      {visibleGame ? <Game /> : ""}
      <div className={styles.first}>
        <Balance />
        <Profile />
      </div>
      <div className={styles.block}>
        <History />
      </div>
      <div className={styles.block}>
        <Flips />
      </div>
      <div className={styles.block}>
        <CreateFlip />
      </div>
    </div>
  );
}
