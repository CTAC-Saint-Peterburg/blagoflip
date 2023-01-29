import styles from "../styleComponents/FlipsSearch.module.css";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/availableflips/availableflipsSlice";

export const FlipsSearch = () => {
  const dispatch = useDispatch();
  function handleSetSearch(value) {
    dispatch(setSearch(value));
  }
  return (
    <div className={styles.main}>
      <input
        placeholder="search..."
        onChange={(e) => handleSetSearch(e.target.value)}
      ></input>
    </div>
  );
};
