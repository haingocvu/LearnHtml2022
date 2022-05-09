import React from 'react';
import styled from 'styled-components';

const Link = ({ children, className }) => {
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a className={className}>{children}</a>;
};

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

function StyledComponentBasic() {
  return (
    <div>
      <Link>Unstyled, boring link</Link>
      <br />
      <StyledLink>Styled, exciting link</StyledLink>
    </div>
  );
}

export default StyledComponentBasic;
