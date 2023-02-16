import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../store/chat/chatSlice";
import img from "../../images/avatar.png";
import styles from "./styleComponent/ChatcontrolSearch.module.css";
export const ChatcontrolSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [units, setUnits] = useState([
    { name: "kek", id: 1, messages: [] },
    { name: "stas", id: 1132, messages: [] },
    { name: "kok", id: 12131, messages: [] },
    { name: "fif", id: 11392, messages: [] },
  ]);
  return (
    <div className={styles.main}>
      <div className={styles.wrapperSearch}>
        <h2>Enter user ID or Name:</h2>
        <div className={styles.inputDiv}>
          <input
            placeholder="search..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.resultWrapper}>
        <h4>Results:</h4>
        <div className={styles.resultUnitsWrapper}>
          {units
            .filter((x) =>
              x.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((x, index) => (
              <div className={styles.resultUnit} key={x.id}>
                <h2>{x.name}</h2>
                <img className={styles.imageContact} src={img} alt="Avatar" />
                <button
                  onClick={() =>
                    dispatch(
                      addContacts({
                        name: x.name,
                        lastMessage: "last message",
                        id: Math.floor(Math.random() * 9999),
                        messages: x.messages,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
