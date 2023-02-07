import { useState } from "react";
import img from "../../images/avatar.png";
import styles from "./styleComponent/ChatcontrolSearch.module.css";
export const ChatcontrolSearch = () => {
  const [units, setUnits] = useState([
    { name: "kek", id: 1 },
    { name: "stas", id: 1132 },
    { name: "kok", id: 12131 },
    { name: "fif", id: 1132 },
  ]);
  return (
    <div className={styles.main}>
      <div className={styles.wrapperSearch}>
        <h2>Enter user ID or Name:</h2>
        <div className={styles.inputDiv}>
          <input placeholder="search..." />
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <h4>Results:</h4>
        <div className={styles.resultUnitsWrapper}>
          {units.map((x) => (
            <div className={styles.resultUnit}>
              <h2>Name</h2>
              <img className={styles.imageContact} src={img} alt="Avatar" />
              <button>+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
