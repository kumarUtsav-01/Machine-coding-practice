import React from "react";
import { calculateAngledDigits } from "../utils/utility";
import Digit from "./Digit";

const Digits = React.memo(() => {
  const digitAndAngle = calculateAngledDigits();

  return (
    <div className='digitsContainer'>
      {digitAndAngle.forEach(([digit, angle]) => (
        <Digit angle={angle} digit={digit} />
      ))}
    </div>
  );
}, []);

export default Digits;
