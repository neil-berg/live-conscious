import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

export const VideoCard = () => {
  const [flipped, setFlipped] = React.useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const vidRef = React.useRef(null);

  const handleFlip = () => {
    // Pause video and flip card
    flipped ? vidRef.current.pause() : vidRef.current.play();
    setFlipped(!flipped);
  };
  return (
    <Container>
      <button onClick={() => handleFlip()}>FLIP</button>
      <animated.div
        className='card back'
        style={{
          opacity: opacity.interpolate((o: number) => 1 - o),
          transform,
        }}
      >
        <div>
          <span>Love it!</span>
        </div>
      </animated.div>
      <animated.div
        className='card front'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <video ref={vidRef} width='400' height='auto' controls>
          <source
            src='https://live-conscious.s3.us-east-2.amazonaws.com/neil-demo.mp4'
            type='video/mp4'
          />
        </video>
      </animated.div>
    </Container>
  );
};

const Container = styled.div`
  border: 2px red solid;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    position: absolute;
    top: 0;
  }

  .card {
    position: absolute;
    max-width: 400px;
    max-height: 500px;
    width: 400px;
    height: 225px;
    cursor: pointer;
    will-change: transform, opacity;
  }

  .front {
    border: 1px orange solid;
  }
  .back {
    border: 1px green solid;
  }
  /* .back {
    background-image: url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop);
  } */
`;
