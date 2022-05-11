import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: visible;
  position: relative;
`;

const StyledDiv = styled.div`
  max-width: 30em;
  border: 2px solid coral;
  padding: 0.5em 1em;
  text-align: justify;
  text-align-last: left;
  position: ${(props) => (props.position === 'sticky' ? '-webkit-sticky' : '')};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
`;

function Position() {
  return (
    <Wrapper>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <StyledDiv position="static" top="0em" right="0em">
        position static by default. static positioned elements are not effected
        by the top, bottom, left, right properties
      </StyledDiv>
      <StyledDiv position="relative" top="1em" left="1em" bottom="1em">
        This div element has position: relative;
      </StyledDiv>
      <StyledDiv position="sticky" top="0" left="10em">
        I am sticky!
      </StyledDiv>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <h2>position: static;</h2>
      <p>
        An element with position: static; is not positioned in any special way;
        it is always positioned according to the normal flow of the page:
      </p>
      <StyledDiv position="fixed" bottom="0em" right="0em">
        This div element has position: fixed;
      </StyledDiv>
      <StyledDiv position="absolute" top="0em" right="0em">
        This div element has position: absolute;
      </StyledDiv>
    </Wrapper>
  );
}

export default Position;
