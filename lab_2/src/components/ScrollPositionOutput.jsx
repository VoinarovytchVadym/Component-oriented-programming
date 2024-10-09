import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";

const ScrollPositionOutput = () => {
  const scrollY = useScrollPosition();

  return (
    <header>
      <p>Your scroll position is: {scrollY}</p>
    </header>
  );
};

export default ScrollPositionOutput;
