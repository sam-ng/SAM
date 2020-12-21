import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
  background: #2c3e50;
  color: white;
  font-family: 'Comfortaa', cursive;
  font-size: 24pt;
  font-weight: 600;
  text-align: center;
  height: 100%;
  padding: 10px;
  display: block;
`;

const Wrapper = styled.div`
  height: 100%;
`;

export default function NavBarLink(props) {
  return (
    <Wrapper className={props.className}>
      {/* ClassNames necessary for styled-components extension*/}
      <Link>{props.name}</Link>
    </Wrapper>
  );
}
