import React, { Ref, useId } from 'react';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { generateRandomNumber as rand } from '../../../utils/helpers/randomNumber';
import { useDesign } from '../../../contexts/Design';
import { Box } from '@chakra-ui/react';
import hexRgb from 'hex-rgb';

const Flare: React.FunctionComponent<{ svgRef: Ref<SVGAElement | null>; seed: number }> = ({
  seed,
  svgRef,
}) => {
  const { flareState, canvasDimensions } = useDesign();

  // destructure some params
  const { width, height } = canvasDimensions;
  const { bgColor, startColor: hexStart, endColor: hexEnd } = flareState;

  const random = rand(seed);
  const signedRandom = rand(seed + 1) - 0.5;
  const rgbBg = hexRgb(bgColor);
  const rgbStart = hexRgb(hexStart);

  // Bubble
  const farthestSideColor = (opacity) =>
    `rgb(${rgbStart.red}, ${rgbStart.green}, ${rgbStart.blue},${opacity})`;
  const farthestSidePosition = `-${Math.round(random * 100)}% ${Math.round(random * 100)}%`;
  const farthestSideStart = Math.round((random - 0.5) * 50);
  const farthestSideEnd = Math.round((random + 0.5) * 50);

  // Second Bubble
  const secondBubblePosition = `${Math.round(signedRandom * 50)}% -${Math.round(random * 100)}%`;

  // Lens
  const lensStart = '#9473ff';
  const rgbLensStart = hexRgb(lensStart);
  const lensEnd = '#ffffff18';
  const lensOpacity = 0;
  const lensColor = (opacity) =>
    `rgb(${rgbLensStart.red}, ${rgbLensStart.green}, ${rgbLensStart.blue},${opacity})`;
  const backgroundColor = (opacity) => `rgb(${rgbBg.red}, ${rgbBg.green}, ${rgbBg.blue},${opacity})`;
  const lensPosition = (offsetX, offsetY) => `
    ${Math.min(Math.round(random) * 200, 100) + offsetX}px
    ${Math.round(signedRandom * 200) + offsetY}%
  `;
  const lensEdge = Math.min(Math.round(random * 200), 50);
  const edgeSharpness = 0.8;
  const edgeWidth = 10;

  return (
    <Box
      width={width}
      height={height}
      bgImage={`
      // Bubble
      radial-gradient(
        circle farthest-side at ${farthestSidePosition},
        ${farthestSideColor(0.4)} ${farthestSideStart}%,
        ${farthestSideColor(0)}  ${farthestSideEnd}%
      ),
        
      // Lens
      radial-gradient(
        circle farthest-corner at ${lensPosition(0, 0)},
        ${lensColor(lensOpacity)} ${lensEdge - edgeWidth * 10}%,
        ${backgroundColor(1)} ${lensEdge}%,
        ${lensEnd} ${lensEdge + edgeWidth * edgeSharpness}%,
        rgb(0, 0, 0, 0) ${lensEdge + edgeWidth}%
      ),
          
      // Dark Lens Bubble
      radial-gradient(
        circle farthest-corner at ${lensPosition(0, -30)},
        rgb(18, 20, 28) 32%,
        hsla(0,0%,100%,0) 62%
      ),
            
      // Light Lens Bubble
      radial-gradient(
        circle farthest-side at ${lensPosition(0, -25)},
        ${hexStart} 50%,
        rgb(18, 20, 28,0) 72%
      ),
              
      // Big Bubble
      radial-gradient(
        circle farthest-corner at ${secondBubblePosition},
        ${hexEnd} 26%,
        ${backgroundColor(1)} 72%
      );
`}
    ></Box>
  );
};

export default Flare;