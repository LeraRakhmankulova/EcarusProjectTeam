import React, { FC } from "react";
import { animated } from "react-spring";
import useMove from "../use-move";



const Move = ({ children, ...animationConfig }) => {
  const [style, trigger] = useMove(animationConfig);

  return (
    <animated.span style={style} onMouseEnter={trigger}>
      {children}
    </animated.span>
  );
};

export default Move;