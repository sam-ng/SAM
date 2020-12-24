import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';

const BodyTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 30pt;
  font-weight: 200;
  text-align: center;
`;

const StyledGrid = styled(Grid)`
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  font-family: 'Raleway', sans-serif;
  font-size: 24pt;
  font-weight: 100;
  text-align: center;

  align-self: center;
`;

export default function Body() {
  return (
    <div>
      <BodyTitle>My Latest Projects</BodyTitle>
      <StyledGrid></StyledGrid>
    </div>
  );
}
