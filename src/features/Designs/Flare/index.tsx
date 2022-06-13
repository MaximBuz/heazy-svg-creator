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
  const rgbEnd = hexRgb(hexEnd);

  // Bubble
  const farthestSideColor = (opacity) =>
    `rgb(${rgbStart.red}, ${rgbStart.green}, ${rgbStart.blue},${opacity})`;
  const farthestSidePosition = `-${Math.round(random * 100)}% ${Math.round(random * 100)}%`;
  const farthestSideStart = Math.round((random - 1) * 50);
  const farthestSideEnd = Math.round((random + 1) * 50);
  
  // Second Bubble
  const secondBubblePosition = `${Math.round(signedRandom * 50)}% -${Math.round(random * 100)}%`;
  
  // Colors
  const firstBubbleColor = (opacity) => `rgb(${rgbStart.red}, ${rgbStart.green}, ${rgbStart.blue},${opacity})`;
  const secondBubbleColor = (opacity) => `rgb(${rgbEnd.red}, ${rgbEnd.green}, ${rgbEnd.blue},${opacity})`;
  
  // Positions
  const firstBubblePosition = {
    cx: `-${Math.round(signedRandom * 100)}%`,
    cy: `${Math.round(signedRandom * 100)}%`,
  };
  const secondBubblePosition2 = {
    cx: `${Math.round(signedRandom * 50) + 100}%`,
    cy: `-${Math.round(signedRandom * 100)}%`,
  };
  const lensPosition2 = (offsetX, offsetY) => ({
    cx: `-${Math.min(Math.round(random) * 200, 100) + offsetX}px`,
    cy: `${Math.round(signedRandom * 100) + offsetY}%`,
  });
  

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
  const transition = { transition: '0.3s' };
  return (
    <>
      <SvgCanvas width={width} height={height} svgRef={svgRef}>
        <defs>
          <radialGradient id="bubble-1">
            <stop offset="0%" stopColor={firstBubbleColor(0.5)}></stop>
            <stop offset="100%" stopColor={firstBubbleColor(0)}></stop>
          </radialGradient>

          <radialGradient id="lens">
            <stop offset={`50%`} stopColor={backgroundColor(0)}></stop>
            <stop offset={`90%`} stopColor={'rgb(255, 255, 255, 0.1)'}></stop>
            <stop offset={`95%`} stopColor={'rgb(255, 255, 255, 0.3)'}></stop>
            <stop offset={`100%`} stopColor={backgroundColor(0)}></stop>
          </radialGradient>

          <radialGradient id="lens-darkener">
            <stop offset="0%" stopColor={backgroundColor(0)}></stop>
            <stop offset="90%" stopColor={backgroundColor(1)}></stop>
            <stop offset="100%" stopColor={backgroundColor(0)}></stop>
          </radialGradient>

          <radialGradient id="lens-enhancer">
            <stop offset="50%" stopColor={firstBubbleColor(0)}></stop>
            <stop offset="90%" stopColor={firstBubbleColor(1)}></stop>
            <stop offset="100%" stopColor={firstBubbleColor(0)}></stop>
          </radialGradient>

          <radialGradient id="bubble-2">
            <stop offset={`0%`} stopColor={secondBubbleColor(0.5)}></stop>
            <stop offset={`100%`} stopColor={secondBubbleColor(0)}></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <circle {...firstBubblePosition} r="100%" fill="url(#bubble-1)" />
        <circle {...secondBubblePosition2} r="100%" fill="url(#bubble-2)"></circle>
        <circle style={{mixBlendMode: "color-dodge"}} {...lensPosition2(0, random * 20)} r="105%" fill="url(#lens)" />
        <circle style={{mixBlendMode: "saturation"}} {...lensPosition2(signedRandom * 100, 0)} r="100%" fill="url(#lens-enhancer)"></circle>
        <circle style={{mixBlendMode: "hard-light"}} {...lensPosition2(0, rand(seed+3) * 50)} r="100%" fill="url(#lens-darkener)"></circle>
      </SvgCanvas>
      {/* <Box width={width} height={height / 2} bgImage={`
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
      `}>

      </Box> */}
    </>
  );
};

export default Flare;

/* 

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

*/
