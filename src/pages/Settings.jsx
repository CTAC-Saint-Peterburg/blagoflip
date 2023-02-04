import { Mutenotification } from "../components/componentsSettingspage/Mutenotification";
import { Promocode } from "../components/componentsSettingspage/Promocode";
import { SettingsProfile } from "../components/componentsSettingspage/SettingsProfile";
import styles from "./pagesStyle/Settings.module.css";
export default function Settings() {
  return (
    <div className={styles.main}>
      <SettingsProfile />
      <Promocode />
      <Mutenotification />
      <div className={styles.logout}>
        <button>log out</button>
      </div>
    </div>
  );
}
