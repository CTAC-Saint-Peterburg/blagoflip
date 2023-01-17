import styles from "../styleComponents/Resultwidget.module.css";
export const Resultwidget = (props) => {
  return (
    <div className={styles.main}>
      <h1>{props.result}</h1>
    </div>
  );
};
