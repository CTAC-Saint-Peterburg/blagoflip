import { useEffect } from "react";
import styles from "../styleComponents/Alerts.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setVisibility, setText } from "../store/profile/profileSlice";
export default function Alerts() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(setVisibility(false));
      dispatch(setText("undefined"));
    }, 2000);
  }, []);
  const text = useSelector((state) => state.profile.alert.text);
  return <div className={styles.main}>{text}</div>;
}
