import React from 'react';
import styled from 'styled-components';

import PineApple from 'src/images/pineapple.jpeg';

const StyledDiv = styled.div`
  border: 2px solid green;
  padding: 1em;
  img {
    width: 10em;
    height: 10em;
    display: inline;
    float: left;
    margin: 0em 1em;
  }
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`;

function ClearFix() {
  return (
    <div>
      <StyledDiv>
        <img src={PineApple} alt="pineapple" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet...
      </StyledDiv>
    </div>
  );
}

export default ClearFix;
