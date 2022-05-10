import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: ${(props) => props.size};
  box-sizing: border-box;
  display: block;
  margin-top: ${(props) => props.size};
`;

const PasswordInput = styled(Input).attrs(() => ({
  type: 'password',
}))`
  border: 1px solid aqua;
`;

const Wrapper = styled.div`
  margin: auto;
  margin-top: 40px;
  max-width: 500px;
`;

function AttachProps() {
  return (
    <Wrapper>
      <Input placeholder="a small text input" />
      <Input placeholder="a bigger text input" size="2em" />
      <PasswordInput placeholder="enter password here" />
    </Wrapper>
  );
}

export default AttachProps;
