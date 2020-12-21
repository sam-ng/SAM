import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  background: #2c3e50;
  color: white;
  padding: 4px;
  display: inline;
`;

const Wrapper = styled.div`
  display: inline;
  direction: rtl;
`;

export default function NavBarLink(props) {
  return (
    <div className={props.className}>
      <Link>{props.name}</Link>
    </div>
  );
}
