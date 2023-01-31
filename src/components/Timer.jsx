import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWheelSpin } from "../store/game/gameSlice";

export const Timer = ({ value }) => {
  const disppatch = useDispatch();
  const [timer, setTimer] = useState(value);
  useEffect(() => {
    if (timer >= 1) {
      const interval = setInterval(() => {
        setTimer((old) => old - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else disppatch(setWheelSpin());
  }, [timer]);
  return <span>{timer > 0 ? timer : "Good Luck!"}</span>;
};
