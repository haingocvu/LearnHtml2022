import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  border: ${(props) => props.border};
  padding: 1em;
  float: ${(props) => props.float};
  clear: ${(props) => props.clear};
`;

function Clear() {
  return (
    <div>
      <StyledDiv border="2px solid green" float="left">
        Div 1
      </StyledDiv>
      <StyledDiv border="2px solid red">
        div2 - Notice that div2 is after div1 in the HTML code. However, since
        div1 floats to the left, the text in div2 flows around div1.
      </StyledDiv>
      <br />
      <StyledDiv border="2px solid green" float="left">
        div 3
      </StyledDiv>
      <StyledDiv border="2px solid red" clear="left">
        div4 - Here, clear: left; moves div4 down below the floating div3. The
        value "left" clears elements floated to the left. You can also clear
        "right" and "both".
      </StyledDiv>
    </div>
  );
}

export default Clear;
