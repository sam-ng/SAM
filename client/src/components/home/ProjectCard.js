import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #888888;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 8px #888888;
  }
`;

const Title = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 20pt;
  font-weight: 100;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function ProjectCard(props) {
  return (
    <Wrapper>
      <Title>{props.projectName}</Title>
    </Wrapper>
  );
}
