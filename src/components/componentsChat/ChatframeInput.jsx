import styles from "./styleComponent/ChatframeInput.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/chat/chatSlice";
export default function ChatframeInput() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.main}>
      <div className={styles.input}>
        <input
          placeholder="write your message..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={() =>
            dispatch(
              addMessage({
                text: inputValue,
                type: "mymsg",
                id: Math.floor(Math.random() * 9999),
              })
            )
          }
        >
          ☄️
        </button>
      </div>
    </div>
  );
}
