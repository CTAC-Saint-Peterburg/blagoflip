import { useState } from "react";
import styles from "../styleComponents/CreateFlipSettings.module.css";
export default function CreateFlipSettings() {
  const [value, setValue] = useState(0);
  const [buttons, setButtons] = useState([10, 50, 100, 500, 1000]);
  return (
    <div className={styles.main}>
      <h2 className={styles.value}>
        Value: <span>{value}</span>
      </h2>
      <div className={styles.buttons}>
        {buttons.map((x, index) => {
          return (
            <button key={index} onClick={() => setValue(x)}>
              {x}
            </button>
          );
        })}
      </div>
      <button>submit</button>
    </div>
  );
}
