import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled, { css } from 'styled-components';
import RefreshIcon from '../../assets/sort.svg';
import { Member } from '../../types';

interface VideoCardProps {
  idx: number;
  member: Member;
}

interface StyledProps {
  member: Member;
  flipped: boolean;
  cardColor: string;
  imagePath?: string;
}

const cardColors = [
  '#fde768',
  '#f8ab59',
  '#fd6868',
  '#79e794',
  'white',
  '#f568fd',
  '#68fddf',
  '#68c9fd',
  '#7768fd',
];

export const VideoCard = (props: VideoCardProps) => {
  const [flipped, setFlipped] = React.useState(true);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const cardColor = cardColors[props.idx];

  const imageSrcPrefix = 'https://liveconscious.com/extrapix/';
  const defaultImagePath = imageSrcPrefix + 'playa-viva-default.jpg';
  const imagePath = props.member.imageFile
    ? imageSrcPrefix + props.member.imageFile
    : defaultImagePath;

  return (
    <Container
      member={props.member}
      cardColor={cardColor}
      flipped={flipped}
      imagePath={imagePath}
    >
      <div className='card-header'>
        <span className='name'>{props.member.labName}</span>
        <button onClick={handleFlip}>
          <RefreshIcon className='button-icon' height={20} width={20} />
        </button>
      </div>
      <animated.div
        className='card back'
        style={{
          opacity: opacity.interpolate((o: number) => 1 - o),
          transform,
        }}
      >
        {props.member.quote && (
          <div className='back-text'>
            <div>{props.member.quote}</div>
          </div>
        )}
      </animated.div>
      <animated.div
        className='card front'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
        }}
      >
        <iframe
          src={props.member.videoSrc}
          width='100%'
          height='auto'
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        ></iframe>
      </animated.div>
    </Container>
  );
};

const Container = styled.div<StyledProps>`
  height: 216.25px;
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
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: papayawhip;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    transform: ${(props) =>
      props.flipped ? 'rotate(0deg)' : 'rotate(180deg)'};
    transition: all 0.45s linear;
    &:focus {
      outline: 0;
    }
  }

  .button-icon {
    fill: papayawhip;
    transition: all 0.2s linear;
    &:hover {
      fill: ${(props) => props.cardColor};
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
    transition: all 0.1s linear;

    &:hover {
      box-shadow: 0 5px 10px ${(props) => props.cardColor};
    }
  }

  iframe {
    border-radius: 7px;
    max-width: 340px;
    width: 340px;
    max-height: 191.25px;
    height: 191.25px;
    outline: 0;
  }

  .front,
  .back {
    border: 2px ${(props) => props.cardColor} solid;
    border-radius: 8px;
    /* &:focus-within {
      border-color: #79e794;
    } */
  }

  .back {
    border-color: ${(props) => props.cardColor};
  }

  ${(props) =>
    !props.member.quote &&
    css<StyledProps>`
      .back {
        background-image: url(${(props) => props.imagePath});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
      }
    `}

  .back-text {
    height: 100%;
    background: papayawhip;
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
