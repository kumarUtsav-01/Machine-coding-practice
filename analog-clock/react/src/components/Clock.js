import ClockHands from "./ClockHands";
import Digits from "./Digits";

const Clock = () => {
  return (
    <div className='clock' aria-label='Clock'>
      <ClockHands />
      <Digits />
    </div>
  );
};

export default Clock;
