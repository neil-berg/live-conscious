import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

interface VideoCardProps {
  name: string;
}

/**
 *
 * NOTE: only mp4 seem to work on AWS
 */
export const VideoCard = (props: VideoCardProps) => {
  const [flipped, setFlipped] = React.useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  const vidRef = React.useRef(null);

  const handleFlip = () => {
    // Pause video and flip card
    // flipped ? vidRef.current.pause() : vidRef.current.play();
    if (flipped) {
      vidRef.current.pause();
    }
    setFlipped(!flipped);
  };

  return (
    <Container>
      <div className='card-header'>
        <span className='name'>{props.name}</span>
        <button onClick={handleFlip}>FLIP</button>
      </div>
      <animated.div
        className='card back'
        style={{
          opacity: opacity.interpolate((o: number) => 1 - o),
          transform,
        }}
      >
        {/* <div className='back-text'>
          <div>Love it!</div>
        </div> */}
      </animated.div>
      <animated.div
        className='card front'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <video ref={vidRef} width='340' height='auto' controls>
          <source
            src={`https://live-conscious.s3.us-east-2.amazonaws.com/${props.name}.mp4`}
            type='video/mp4'
          />
        </video>
      </animated.div>
    </Container>
  );
};

const Container = styled.div`
  height: 237.25px;
  width: 350px;
  position: relative;

  .card-header {
    font-size: 20px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .name {
    text-transform: capitalize;
    font-family: 'Mukta', sans-serif;
    transform: translateY(5px);
    color: black;
  }

  button {
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }

  .card {
    position: absolute;
    max-width: 340px;
    width: 340px;
    max-height: 191.25px;
    height: 191.25px;
    cursor: pointer;
    will-change: transform, opacity;
  }

  video {
    border-radius: 10px;
    max-width: 340px;
    width: 340px;
    max-height: 191.25px;
    height: 191.25px;
    outline: 0;
  }

  .front,
  .back {
    border: 4px black solid;
    border-radius: 15px;

    &:focus-within {
      border-color: pink;
    }
  }

  .back {
    border-color: #f2e2b6;
    border-color: black;
  }

  .back {
    background-image: url(https://24ryrdikgsto8d3526ikji7k-wpengine.netdna-ssl.com/wp-content/uploads/Photo-2018.-05.-28.-21-07-34-m%C3%A1solata-1024x784.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }

  /* .back-text {
    height: 100%;
    background: #f2e2b6;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  } */
`;
