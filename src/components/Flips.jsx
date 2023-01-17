import { useState } from "react";
import styles from "../styleComponents/Flips.module.css";
import Availableflip from "./Availableflip";
import { FlipsSearch } from "./FlipsSearch";

export default function Flips() {
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>Flips</span>
      </div>
      <FlipsSearch />
      <div className={styles.scroll}>
        {test.map((x, index) => {
          return <Availableflip key={index} />;
        })}
      </div>
    </div>
  );
}
