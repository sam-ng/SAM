import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  padding: 0px;
`;

export default function Home() {
  return (
    <Wrapper>
      <NavBar></NavBar>
    </Wrapper>
  );
}
