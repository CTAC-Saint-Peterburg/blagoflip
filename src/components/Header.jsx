import styles from "../styleComponents/Header.module.css";
import svgData from "../images/data.svg";
import svgChat from "../images/chat.svg";
import svgEllipsis from "../images/ellipsis.svg";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.rows}>
        <div>
          <Link to="/">
            <img src={svgData} alt="" width={32} height={32} />
          </Link>
        </div>
        <div>
          <Link to="/chat">
            <img src={svgChat} alt="" width={32} height={32} />
          </Link>
        </div>
        <div>
          <Link to="/settings">
            <img src={svgEllipsis} alt="" width={32} height={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
