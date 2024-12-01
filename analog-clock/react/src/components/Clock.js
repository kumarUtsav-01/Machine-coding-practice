import React from "react";
import ClockHands from "./ClockHands";
import Digits from "./Digits";

const Clock = React.memo(() => {
  return (
    <div className='clock' aria-label='Clock'>
      <ClockHands />
      <Digits />
    </div>
  );
}, []);

export default Clock;
