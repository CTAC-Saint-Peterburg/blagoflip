import { SettingsProfile } from "../components/componentsSettingspage/SettingsProfile";
import styles from "./pagesStyle/Settings.module.css";
export default function Settings() {
  return (
    <div className={styles.main}>
      <SettingsProfile />
    </div>
  );
}
