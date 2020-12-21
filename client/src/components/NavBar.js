import React from 'react';
import styled from 'styled-components';
import NavBarLink from './NavBarLink';

const Wrapper = styled.div`
  direction: rtl;
`;

const StyledNavBarLink = styled(NavBarLink)`
  display: inline;
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
