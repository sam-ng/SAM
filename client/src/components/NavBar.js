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

const NavTitle = styled.p`
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 36pt;
  font-weight: 200;
  text-align: center;
  margin-left: 50px;
  margin-right: auto;
`;

const StyledNavBarLink = styled(NavBarLink)``;

function getPageTitle() {
  const path = window.location.pathname;
  if (path === '/') return 'SAM';
  else if (path === '/art') return 'Art';
  else if (path === '/aboutme') return 'About Me';
}

export default function NavBar() {
  return (
    <Wrapper>
      <NavTitle>{getPageTitle()}</NavTitle>
      <StyledNavBarLink pageName="Home" href="/"></StyledNavBarLink>
      <StyledNavBarLink pageName="Art" href="/art"></StyledNavBarLink>
      <StyledNavBarLink pageName="About Me" href="/aboutme"></StyledNavBarLink>
    </Wrapper>
  );
}
