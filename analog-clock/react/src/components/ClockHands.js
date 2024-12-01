import React from "react";
import ClockHand from "./ClockHand";

const ClockHands = React.memo(() => {
  return (
    <div>
      <ClockHand name='hour-hand' />
      <ClockHand name='minute-hand' />
      <ClockHand name='second-hand' />
    </div>
  );
}, []);

export default ClockHands;
