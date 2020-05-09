import * as React from 'react';
import styled from 'styled-components';
import { VideoCard } from '../components';
import { randomSevenMembers } from '../util';
import { hannahEntry, jakeEntry, memberData } from '../data';

export const Landing = () => {
  const randomSeven = randomSevenMembers(memberData);
  const members = [jakeEntry, hannahEntry, ...randomSeven];
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
  background: #26212c;

  .video-grid {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    grid-gap: 20px;
    justify-content: center;
  }

  @media screen and (min-width: 1060px) {
    .video-grid {
      grid-template-columns: repeat(3, 350px);
    }
  }
`;
