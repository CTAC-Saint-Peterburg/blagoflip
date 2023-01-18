import styles from "../styleComponents/CreateFlip.module.css";
import CreateFlipSettings from "./CreateFlipSettings";
export const CreateFlip = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>Create Flip</span>
      </div>
      <CreateFlipSettings />
    </div>
  );
};
