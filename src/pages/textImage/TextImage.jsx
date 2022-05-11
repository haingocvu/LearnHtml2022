import React from 'react';
import styled from 'styled-components';

import imgTerre from 'src/images/img_5terre_wide.jpg';

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  max-width: 90%;
  border: 2px solid coral;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
  text-align: justify;
  padding: 0.5em;
  border: 2px solid coral;
  :hover {
    border: none;
    background-color: coral;
    color: white;
    cursor: pointer;
  }
`;

function TextImage() {
  return (
    <Wrapper>
      <img src={imgTerre} alt="Cinque Terre" width="1000" height="300"></img>
      <TopLeft>this is a top right element</TopLeft>
    </Wrapper>
  );
}

export default TextImage;
