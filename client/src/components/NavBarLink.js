import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 18pt;
  font-weight: 100;
  text-align: center;
  padding: 10px 20px 10px 20px;
  display: block;
`;

const Wrapper = styled.div``;

export default function NavBarLink(props) {
  return (
    <Wrapper className={props.className}>
      {/* ClassNames necessary for styled-components extension*/}
      <Link>{props.name}</Link>
    </Wrapper>
  );
}
