import React, { Ref } from 'react';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { generateRandomNumber as rand } from '../../../utils/helpers/randomNumber';
import { useDesign } from '../../../contexts/DesignContext';
import hexRgb from 'hex-rgb';
import mirror from '../../../utils/helpers/getTransform';

const Flare: React.FunctionComponent<{
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
}> = ({ seed, svgRef }) => {
  const { flareState, canvasDimensions } = useDesign();

  // destructure some params
  const { width, height } = canvasDimensions;
  const {
    bgColor,
    bgLightColor,
    irisColor: irisHex,
    lensColor: lensHex,
    lensColorMode,
    lensRadius,
    lensSpill,
    lensCut,
    irisWidth,
    irisIntensity,
  } = flareState;

  const random = rand(seed);
  const random2 = rand(seed + 1);
  const signedRandom1 = rand(seed + 1) - 0.5;
  const signedRandom2 = rand(seed + 2) - 0.5;

  const rgbBg = hexRgb(bgColor);
  const rgbBgLight = hexRgb(bgLightColor);
  const rgbLens = hexRgb(lensHex);
  const rgbIris = hexRgb(irisHex);

  // Colors
  const backgroundColor = (opacity) =>
    `rgb(${rgbBg.red}, ${rgbBg.green}, ${rgbBg.blue},${opacity})`;
  const lensColor = (opacity) =>
    `rgb(${rgbLens.red}, ${rgbLens.green}, ${rgbLens.blue},${opacity})`;
  const irisColor = (opacity) =>
    `rgb(${rgbIris.red}, ${rgbIris.green}, ${rgbIris.blue},${opacity})`;
  const backgroundLightColor = (opacity) =>
    `rgb(${rgbBgLight.red}, ${rgbBgLight.green}, ${rgbBgLight.blue},${opacity})`;

  // Positions
  const firstBubblePosition = {
    cx: `-${Math.round(signedRandom1 * 100)}%`,
    cy: `${Math.round(signedRandom2 * 100)}%`,
  };
  const backgroundLightPosition = {
    cx: `${Math.round(signedRandom1 * 100) + random < 0.5 ? 100 : 0}%`,
    cy: `${Math.round(signedRandom2 * 100) + random < 0.5 ? 100 : 0}%`,
  };
  const lensPosition = (offsetX, offsetY) => ({
    cx: `-${Math.min(Math.round(signedRandom1) * 200, 100) + offsetX}px`,
    cy: `${Math.round(signedRandom2 * 100) + offsetY}%`,
  });

  const mirrorIndices = [0, 1, 2, 3];

  return (
    <>
      <SvgCanvas width={width} height={height} svgRef={svgRef}>
        <defs>
          <radialGradient id="lens-light">
            <stop offset={random * 90 + '%'} stopColor={lensHex}></stop>
            <stop offset="100%" stopColor={lensColor(0)}></stop>
          </radialGradient>

          <radialGradient id="lens-iris">
            <stop
              offset={50 - irisWidth * 2 + '%'}
              stopColor={backgroundColor(0)}
            ></stop>
            <stop
              offset={90 - irisWidth + '%'}
              stopColor={irisColor(irisIntensity / 2)}
            ></stop>
            <stop
              offset={90 + irisWidth / 2 + '%'}
              stopColor={irisColor(irisIntensity)}
            ></stop>
            <stop offset={'100%'} stopColor={backgroundColor(0)}></stop>
          </radialGradient>

          <radialGradient id="lens-dark-edge">
            <stop offset="0%" stopColor={backgroundColor(0)}></stop>
            <stop
              offset={85 - random * 10 + '%'}
              stopColor={backgroundColor(1)}
            ></stop>
            <stop
              offset={100 - random * 10 + '%'}
              stopColor={backgroundColor(0)}
            ></stop>
          </radialGradient>

          <radialGradient id="lens-middle-color">
            <stop
              offset={(5 - lensSpill) * 10 + '%'}
              stopColor={lensColor(0)}
            ></stop>
            <stop
              offset={100 - ((5 - lensSpill) * 10) / 2 + '%'}
              stopColor={lensColor(1)}
            ></stop>
            <stop offset="100%" stopColor={lensColor(0)}></stop>
          </radialGradient>

          <radialGradient id="background-light">
            <stop offset={'0%'} stopColor={backgroundLightColor(0.5)}></stop>
            <stop
              offset={50 + random * 50 + '%'}
              stopColor={backgroundLightColor(0)}
            ></stop>
          </radialGradient>
        </defs>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>

        <g
          transform-origin={`${width / 2} ${height / 2}`}
          transform={mirror(mirrorIndices[Math.round(random * 4)])}
        >
          <circle
            {...backgroundLightPosition}
            r={50 + random * 200 + '%'}
            fill="url(#background-light)"
          ></circle>
          <circle
            {...lensPosition(0, random * (lensRadius / 5))}
            style={{ mixBlendMode: 'color-dodge', transition: '0.3s' }}
            r={lensRadius + 5 + '%'}
            fill="url(#lens-iris)"
          />
          <circle
            {...lensPosition(signedRandom1 * lensRadius, 0)}
            style={{ mixBlendMode: 'saturation', transition: '0.3s' }}
            r={lensRadius + '%'}
            fill="url(#lens-middle-color)"
          ></circle>
          {lensCut && (
            <circle
              {...lensPosition(0, random2 * (lensRadius / 2))}
              style={{ mixBlendMode: 'hard-light', transition: '0.3s' }}
              r={lensRadius + '%'}
              fill="url(#lens-dark-edge)"
            ></circle>
          )}
          <circle
            {...firstBubblePosition}
            style={{ mixBlendMode: lensColorMode, transition: '0.3s' }}
            r={lensRadius + '%'}
            fill="url(#lens-light)"
          />
        </g>
      </SvgCanvas>
    </>
  );
};

export default Flare;
