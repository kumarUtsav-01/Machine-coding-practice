import React from "react";

const Digit = React.memo(({ angle, digit }) => {
  return (
    <div style={{ rotate: angle }} className='digit'>
      <div aria-label={digit} style={{ rotate: `-${angle}` }}>
        {digit}
      </div>
    </div>
  );
}, []);

export default Digit;
