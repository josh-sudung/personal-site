import React from 'react';
import styled from "styled-components";
import { useMousePosition } from '../../utils/useMousePosition';

const SectionSpan = styled.div`
margin: 0 auto;

.circle {
  height:20vh;
  border-radius:100%;
  // background-color:red;
}

`;

const onMouseTransform = (posX, posY) => {
  return {transform: `translate(${posX}px, ${posY}px)`}
}

const NotFound = () => {
  const position = useMousePosition();

  return (
    <SectionSpan>
      <div className='circle' style={onMouseTransform(position.x, position.y)}>
        <h1>{position.x}:{position.y}</h1>
      </div>
    </SectionSpan>
  )
}

export default NotFound;