import React from 'react';
import styled from 'styled-components';
import PineApple from 'src/images/pineapple.jpeg';

const Wrapper = styled.p`
  margin: 1em 2em;
  img {
    display: inline;
    float: none;
    margin-right: 2em;
  }
`;

const StyledDiv = styled.div`
  float: left;
  padding: 1em;
  background-color: ${(props) => props.bg};
`;

function Float() {
  return (
    <div>
      <Wrapper>
        <img src={PineApple} alt="programming" width={170} height={170} />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut
        aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio.
        Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc
        sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero
        sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget
        tellus gravida venenatis. Integer fringilla congue eros non fermentum.
        Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis
        diam velit.
      </Wrapper>
      <StyledDiv bg="red">Div 1</StyledDiv>
      <StyledDiv bg="yellow">Div 2</StyledDiv>
      <StyledDiv bg="green">Div 3</StyledDiv>
    </div>
  );
}

export default Float;
