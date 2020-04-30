import * as React from 'react';
import styled from 'styled-components';

import { VideoCard } from '../components';

export const Landing = () => {
  return (
    <VideoGrid>
      <VideoCard name={'amber-demo'} />
      <VideoCard name={'neil-demo'} />
      <VideoCard name={'erica-demo'} />
      <VideoCard name={'deena-fleming-video'} />
      <VideoCard name={'jessica-gennari'} />
      <VideoCard name={'neil-demo'} />
      <VideoCard name={'erica-demo'} />
      <VideoCard name={'neil-demo'} />
      <VideoCard name={'erica-demo'} />
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
