import styles from "./pagesStyle/SignIn.module.css";
import { useDispatch } from "react-redux";
import { setSignInStatus } from "../store/profile/profileSlice";
export const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <div className={styles.wrapperBlock}>
        <button
          className={styles.signin}
          onClick={() => dispatch(setSignInStatus())}
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
