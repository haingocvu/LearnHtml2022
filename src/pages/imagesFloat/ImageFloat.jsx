import React from 'react';
import styled from 'styled-components';

import Img5Terre from 'src/images/img_5terre.jpeg';
import ImgForest from 'src/images/img_forest.jpeg';
import ImgMountain from 'src/images/img_mountains.jpeg';

const StyledImage = styled.img`
  float: left;
  padding: 0.5em 1em;
  width: 33.33%;
  min-width: 15em;
`;

const Wrapper = styled.div`
  padding: 1em;
  border: 2px solid green;
  margin: 1em;
  ::after {
    clear: both;
    content: '';
    display: table;
  }
`;

function ImageFloat() {
  return (
    <Wrapper>
      <StyledImage src={Img5Terre} alt="terre" />
      <StyledImage src={ImgForest} alt="forest" />
      <StyledImage src={ImgMountain} alt="mountain" />
    </Wrapper>
  );
}

export default ImageFloat;
