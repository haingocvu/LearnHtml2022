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
  visibility: ${(props) => props.visibility};
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

function Visibility() {
  const [visibility, setVisibility] = useState('visible');
  const toggleDisplay = () => {
    setVisibility((prev) => (prev === 'visible' ? 'hidden' : 'visible'));
  };
  return (
    <Wrapper>
      <Content visibility={visibility}>
        click the below button to toggle visibility of this element
      </Content>
      <Button onClick={toggleDisplay}>Toggle visibility</Button>
    </Wrapper>
  );
}

export default Visibility;
