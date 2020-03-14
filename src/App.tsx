import * as React from 'react';
import styled from 'styled-components';

import { Landing } from './views';

export const App = () => {
  return (
    <StyledApp>
      <Landing />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  border: 1px green solid;
`;
