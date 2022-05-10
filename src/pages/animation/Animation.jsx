import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

const Rotates = styled.div`
  display: inline-block;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  animation: ${rotate} 2s linear infinite;
`;

function Animation() {
  return (
    <div>
      <Rotates>&lt; 💅🏾 &gt;</Rotates>
    </div>
  );
}

export default Animation;
