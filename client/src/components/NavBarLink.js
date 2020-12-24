import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 18pt;
  font-weight: 100;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px 10px 20px;
  display: block;
  transition: color 0.3s;
  &:hover {
    color: ${props => chooseColor(props.pageName)};
  }
`;

function chooseColor(pageName) {
  if (pageName === 'Home') return 'skyblue';
  else if (pageName === 'Art') return 'red';
  else if (pageName === 'About Me') return 'orange';
}

const Wrapper = styled.div``;

export default function NavBarLink(props) {
  return (
    <Wrapper className={props.className}>
      {/* ClassNames necessary for styled-components extension*/}
      <Link pageName={props.pageName} href={props.href}>
        {props.pageName}
      </Link>
    </Wrapper>
  );
}
