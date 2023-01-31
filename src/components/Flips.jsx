import styles from "../styleComponents/Flips.module.css";
import Availableflip from "./Availableflip";
import { FlipsSearch } from "./FlipsSearch";
import { useSelector } from "react-redux";

export default function Flips() {
  const datafromSlice = useSelector((state) => state.availableflips.data);
  const datafromSearch = useSelector(
    (state) => state.availableflips.searchValue
  );
  const cards = datafromSlice.filter(
    (x) =>
      x.name.toLowerCase().includes(datafromSearch.toLowerCase()) ||
      String(x.value).includes(datafromSearch)
  );
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span>Flips</span>
      </div>
      <FlipsSearch />
      <div className={styles.scroll}>
        {cards.map((x, index) => {
          return (
            <Availableflip key={x.id} name={x.name} value={x.value} id={x.id} />
          );
        })}
      </div>
    </div>
  );
}
