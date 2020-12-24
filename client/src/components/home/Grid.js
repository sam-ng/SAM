import React from 'react';
import styled from 'styled-components';
import GridItem from './ProjectCard';

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
  display: grid;
  grid-template:
    [row1-start] 'project project project' 100px [row1-end]
    / 1fr 1fr 1fr;
  gap: 200px 200px;
  justify-items: center;
  align-items: center;
`;

export default function Grid() {
  return (
    <Wrapper>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
    </Wrapper>
  );
}
