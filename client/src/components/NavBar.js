import React from 'react';
import styled from 'styled-components';
import NavBarLink from './NavBarLink';

const Wrapper = styled.div`
  background: lightgrey;
  height: 100px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledNavBarLink = styled(NavBarLink)`
  align-items: stretch;
`;

export default function NavBar() {
  return (
    <Wrapper>
      <StyledNavBarLink name="Home"></StyledNavBarLink>
      <StyledNavBarLink name="Art"></StyledNavBarLink>
      <StyledNavBarLink name="About Me"></StyledNavBarLink>
    </Wrapper>
  );
}
