import React, { forwardRef } from "react";
import "./Container.css";

const Container = forwardRef((props, ref) => {
  return (
    <div
      onClick={(e) => props.handleBoxClick(e, props.id)}
      ref={ref}
      className={`${props.className} ${props.color}-container`}
    ></div>
  );
});

export default Container;
