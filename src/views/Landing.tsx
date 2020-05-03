import * as React from 'react';
import styled from 'styled-components';
import { VideoCard } from '../components';
import { randomNineMembers } from '../util';
import { memberData } from '../data';

export const Landing = () => {
  const members = randomNineMembers(memberData);
  const renderVideoCards = members.map((member, idx) => (
    <VideoCard idx={idx} key={member.id} member={member} />
  ));
  return (
    <StyledLanding>
      <div className='video-grid'>{renderVideoCards}</div>;
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
  /* background: radial-gradient(ellipse at top, #e66465, transparent),
    radial-gradient(ellipse at bottom, #4d9f0c, transparent); */

  background: #26212c;

  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 10px;
    justify-content: center;
  }
`;
