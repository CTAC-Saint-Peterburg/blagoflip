import Balance from "../components/Balance";
import { CreateFlip } from "../components/CreateFliip";
import Flips from "../components/Flips";
import { Game } from "../components/Game";
import { History } from "../components/History";
import Profile from "../components/Profile";
import styles from "./pagesStyle/Main.module.css";
import { useSelector } from "react-redux";
export default function Main() {
  const visible = useSelector((state) => state.game.data.visibility);
  console.log(visible);
  return (
    <div className={styles.main}>
      {visible ? <Game /> : ""}
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
