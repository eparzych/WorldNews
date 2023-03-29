import { useState, useEffect } from "react";
import "./clock.scss";

export const Clock = () => {
  const [date, setDate] = useState<Date>(new Date());
  
  const refreshClock = () => {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className="clock">
      {date.toLocaleTimeString()}
    </span>
  );
}
