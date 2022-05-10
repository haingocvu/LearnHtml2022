import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  color: ${(props) => props.inputColor || 'palevioletred'};
`;

Input.propTypes = {
  inputColor: PropTypes.string,
};

function PassedProps() {
  return (
    <div>
      <Input type="text" defaultValue="@probablyup" />
      <Input type="text" defaultValue="@geelen" inputColor="green" />
    </div>
  );
}

export default PassedProps;
