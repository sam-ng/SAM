import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Wrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 80%;
  display: grid;
  grid-template:
    [row1-start] 'project project project' 200px [row1-end]
    / 1fr 1fr 1fr;
  gap: 50px 50px;
  justify-items: center;
  align-items: center;
`;

export default function Grid() {
  return (
    <Wrapper>
      <ProjectCard projectName="Stony Schedule Builder/Viewer"></ProjectCard>
      <ProjectCard projectName='"What Makes People in a Country Happy?"'></ProjectCard>
      <ProjectCard projectName="Dynamic Memory Allocator"></ProjectCard>
    </Wrapper>
  );
}
