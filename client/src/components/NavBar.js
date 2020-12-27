import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavBarLink from './NavBarLink';
import backgroundImage from '../images/yourNameSky.jpg';

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  box-shadow: 0px 5px 8px #888888;
  height: 100px;
  margin: 0px 0px 20px 0px;
  padding: 10px 25px 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const NavTitle = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 36pt;
  font-weight: 200;
  text-align: center;
  margin-left: 50px;
  margin-right: auto;
`;

const StyledNavBarLink = styled(NavBarLink)``;

/*function getPageTitle() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path === '/') return 'SAM';
    else if (path === '/art') return 'Art';
    else if (path === '/aboutme') return 'About Me';
  }
}*/

export default function NavBar() {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path === '/') setPageTitle('SAM');
      else if (path === '/art/') setPageTitle('Art');
      else if (path === '/aboutme/') setPageTitle('About Me');
    }
  }, []);

  return (
    <Wrapper>
      <NavTitle>{pageTitle}</NavTitle>
      <StyledNavBarLink pageName="Home" href="/"></StyledNavBarLink>
      <StyledNavBarLink pageName="Art" href="/art/"></StyledNavBarLink>
      <StyledNavBarLink pageName="About Me" href="/aboutme/"></StyledNavBarLink>
    </Wrapper>
  );
}
