import { useState, useEffect } from "react";
import FlipCardClock from "../components/FlipCardClock";

const FlipClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center space-x-2">
      <FlipCardClock value={time.getHours()} />
      <FlipCardClock value={time.getMinutes()} />
      <FlipCardClock value={time.getSeconds()} />
    </div>
  );
};

export default FlipClock;
