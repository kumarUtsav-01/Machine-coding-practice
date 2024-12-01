import { useEffect, useState } from "react";
import { calculateAngle, getCurrentTime } from "../utils/utility";

const ClockHand = ({ name }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const { hour, minute, second } = getCurrentTime();
      const newAngle = calculateAngle(hour, minute, second, name);

      setAngle(`${newAngle}deg`);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div aria-label={name} className={name} style={{ rotate: angle }}></div>
  );
};

export default ClockHand;
