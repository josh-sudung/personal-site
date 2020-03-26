import React, { useState } from "react";
import styled from "styled-components";
import { useMousePosition } from '../../utils/useMousePosition';

const onMouseTransform = (posX, posY, invert, style, factor) => {
  let modifier = factor;
  
  return (
    invert ? 
    {transform: `translate(${posX * -modifier}px, ${posY * -modifier}px)`, ...style}:
    {transform: `translate(${posX * modifier}px, ${posY * modifier}px)`, ...style}
  );
  
}

const Circle = styled.div`

  .circle {
    border-radius: 100%;
    display: block;
    position: absolute;
  }

  .circle:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const FloatingCircle = ({inverted=false, factor=0.02, style}) => {
  const position = useMousePosition();
  const [invert,] = useState(inverted);
  
  return (
    <Circle>
      <span 
        className='circle'
        style={onMouseTransform(position.x, position.y, invert, style, factor)}
      />
    </Circle>
  )
}

export {FloatingCircle, Circle};
