import * as React from 'react';
import styled from 'styled-components';

import { VideoCard } from '../components';

export const Landing = () => {
  return (
    <VideoGrid>
      <VideoCard name={'amber'} />
      <VideoCard name={'neil'} />
      <VideoCard name={'erica'} />
      <VideoCard name={'neil'} />
      <VideoCard name={'erica'} />
      <VideoCard name={'neil'} />
      <VideoCard name={'erica'} />
      <VideoCard name={'neil'} />
      <VideoCard name={'erica'} />
    </VideoGrid>
  );
};

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 350px);
  grid-gap: 10px;
  justify-content: center;
  background: white;
`;
