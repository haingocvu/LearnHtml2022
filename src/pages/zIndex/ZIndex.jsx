import React from 'react';
import styled from 'styled-components';

import ImgTree from 'src/images/img_tree.png';

const StyledImage = styled.img`
  position: absolute;
  left: 0em;
  top: 0em;
  z-index: -1;
`;

function ZIndex() {
  return (
    <div>
      <h1>This is a heading</h1>
      <StyledImage src={ImgTree} alt="tree"></StyledImage>
      <p>
        Because the image has a z-index of -1, it will be placed behind the
        text.
      </p>
    </div>
  );
}

export default ZIndex;
