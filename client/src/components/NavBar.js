import React from 'react';
import styled from 'styled-components';
import NavBarLink from './NavBarLink';
import backgroundImage from '../images/yourNameSky.jpg';

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  height: 100px;
  margin: 0px 0px 20px 0px;
  padding: 10px 25px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNavBarLink = styled(NavBarLink)``;

export default function NavBar() {
  return (
    <Wrapper>
      <StyledNavBarLink name="Home"></StyledNavBarLink>
      <StyledNavBarLink name="Art"></StyledNavBarLink>
      <StyledNavBarLink name="About Me"></StyledNavBarLink>
    </Wrapper>
  );
}
