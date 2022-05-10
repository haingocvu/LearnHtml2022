import React from 'react';
import styled from 'styled-components';

const Thing = styled.div`
  .something {
    border: 1px solid;
    display: block;
  }
  &.myself {
    border: 2px solid orange;
  }
  margin: auto;
  margin-top: 50px;
  max-width: 500px;
  color: blue;
  padding: 10px;
`;

function Nesting() {
  return (
    <div>
      <Thing className="myself">
        <label htmlFor="foo-button" className="something">
          Mystery Button
        </label>
        <button id="foo-button">What do I do?</button>
      </Thing>
    </div>
  );
}

export default Nesting;
