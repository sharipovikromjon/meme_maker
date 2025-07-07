'use client';

import { useMemeStore } from '@/store/memeStore';
import styled from '@emotion/styled';

const CanvasWrapper = styled('div')`
  position: relative;
  width: 400px;
  height: auto;
  margin-top: 1rem;
  border: 2px solid #ccc;
`;

const MemeText = styled('div')`
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000;
`;

const MemeCanvas = () => {
  const { image, topText, bottomText } = useMemeStore();

  if (!image) return null;

  return (
    <CanvasWrapper id="meme-box">
      <img src={image} alt="Uploaded meme" style={{ width: '100%' }} />
      <MemeText style={{ top: '10px' }}>{topText}</MemeText>
      <MemeText style={{ bottom: '10px' }}>{bottomText}</MemeText>
    </CanvasWrapper>
  );
};

export default MemeCanvas;
