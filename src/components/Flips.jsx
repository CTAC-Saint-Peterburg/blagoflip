import { useState } from "react";
import styles from "../styleComponents/Flips.module.css";
import Availableflip from "./Availableflip";
import { FlipsSearch } from "./FlipsSearch";
import { useSelector, useDispatch } from "react-redux";

export default function Flips() {
  const datafromSlice = useSelector((state) => state.availableflips.data);
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>Flips</span>
      </div>
      <FlipsSearch />
      <div className={styles.scroll}>
        {datafromSlice.map((x, index) => {
          return (
            <Availableflip key={x.id} name={x.name} value={x.value} id={x.id} />
          );
        })}
      </div>
    </div>
  );
}
