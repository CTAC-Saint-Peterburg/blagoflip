import { useState } from "react";
import styles from "./styleComponents/SettingsProfile.module.css";
import Profile from "../Profile";
import { useDispatch } from "react-redux";
import { setNewName } from "../../store/profile/profileSlice";
export const SettingsProfile = () => {
  const [nameValue, setNameValue] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div className={styles.changeProfileWrapper}>
        <div>
          <h2 className={styles.headers2}>Your new name:</h2>
          <input
            placeholder="Nickname"
            onChange={(e) => setNameValue(e.target.value)}
          />
          <button onClick={() => dispatch(setNewName(nameValue))}>
            submit
          </button>
        </div>
        <div>
          <h2 className={styles.headers2}>change avatar:</h2>
          <input type="file" name="file" />
          <button>submit</button>
        </div>
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};
