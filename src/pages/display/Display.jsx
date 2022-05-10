import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const Content = styled.div`
  display: ${(props) => props.display};
  border: 1px solid blue;
  padding: 1em;
`;

const Button = styled.button`
  padding: 0.5em 1em;
  border: 2px solid coral;
  background-color: white;
  color: black;
  :hover {
    border: none;
    background-color: coral;
    color: white;
  }
`;

function Display() {
  const [display, setDisplay] = useState('block');
  const toggleDisplay = () => {
    setDisplay((prev) => (prev === 'block' ? 'none' : 'block'));
  };
  return (
    <Wrapper>
      <Content display={display}>
        click the below button to toggle display of this element
      </Content>
      <Button onClick={toggleDisplay}>Toggle display</Button>
    </Wrapper>
  );
}

export default Display;
