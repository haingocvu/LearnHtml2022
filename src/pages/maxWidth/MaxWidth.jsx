import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 50em;
  margin: auto;
  & {
    margin-top: 2em;
  }
  text-align: center;
  background-color: white;
  color: black;
  border: 1px solid coral;
  padding: 0.5em 1em;
`;

function MaxWidth() {
  return (
    <div>
      <Wrapper>Hello world</Wrapper>
    </div>
  );
}

export default MaxWidth;
