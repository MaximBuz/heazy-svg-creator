import React, { Ref, useId } from 'react';
import { bubblePath } from '../../../utils/path-algorithms/Bubble/bubblePath';
import { generateRandomNumber } from '../../../utils/helpers/randomNumber';
import SvgCanvas from '../../Canvas/SvgCanvas';
import { useDesign } from '../../../contexts/Design';
import { isolinePath } from '../../../utils/path-algorithms/Isolines/isolinePath';

const Isolines: React.FunctionComponent<{ svgRef: Ref<SVGAElement | null>; seed: number }> = ({
  seed,
  svgRef,
}) => {
  const { isolinesState, canvasDimensions } = useDesign();
  // destructure some params
  const { width, height } = canvasDimensions;
  const { strokeWidth, strokeShrink, invertStrokeShrink } = isolinesState;
  const { velocity, amount, depth } = isolinesState;
  const { bgColor, startColor, endColor } = isolinesState;

  // generate path
  const pathData = isolinePath(seed, width, height, velocity, depth);

  const randomClassId = useId().replaceAll(':', '');
  return (
    <SvgCanvas width={width} height={height} svgRef={svgRef}>
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* ACHTUNG ye dicker desto mehr */}
        <filter x="-2%" y="-2%" width="104%" height="104%" filterUnits="objectBoundingBox" id="pencilTexture">
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise"></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="3"
            in="SourceGraphic"
            result="newSource"
          ></feDisplacementMap>
        </filter>
        <filter x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox" id="pencilTexture2">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="2"
            numOctaves="5"
            stitchTiles="stitch"
            result="f1"
          ></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
            result="f2"
          ></feColorMatrix>
          <feComposite operator="in" in2="f2" in="SourceGraphic" result="f3"></feComposite>
        </filter>
        <filter x="-5%" y="-5%" width="110%" height="110%" filterUnits="objectBoundingBox" id="pencilTexture3">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            numOctaves="5"
            stitchTiles="stitch"
            result="f1"
          ></feTurbulence>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.5"
            result="f2"
          ></feColorMatrix>
          <feComposite operator="in" in2="f2b" in="SourceGraphic" result="f3"></feComposite>
          <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise"></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="2.5"
            in="f3"
            result="f4"
          ></feDisplacementMap>
        </filter>
        <filter id="pencilTexture4"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            seed="1"
            result="f1"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="5"
            in="SourceGraphic"
            in2="f1"
            result="f4"
          ></feDisplacementMap>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03"
            numOctaves="3"
            seed="10"
            result="f2"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="5"
            in="SourceGraphic"
            in2="f2"
            result="f5"
          ></feDisplacementMap>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.2"
            numOctaves="2"
            seed="100"
            result="f3"
          ></feTurbulence>
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="3"
            in="SourceGraphic"
            in2="f3"
            result="f6"
          ></feDisplacementMap>
          <feBlend mode="multiply" in2="f4" in="f5" result="out1"></feBlend>
          <feBlend mode="multiply" in="out1" in2="f6" result="out2"></feBlend>
        </filter>
        <filter x="-2%" y="-2%" width="104%" height="104%" filterUnits="objectBoundingBox" id="pencilTexture5">
      <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" result="noise">
      </feTurbulence>
      <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="3" in="SourceGraphic" result="newSource">
      </feDisplacementMap>
        </filter>


        <g filter="url(#pencilTexture4)" >
          {pathData.map((circle, index) => (
            <path
              // options
              d={circle}
              fill="none"
              strokeLinecap="round"
              stroke={`url(#linear-gradient-${randomClassId})`}
              strokeWidth={
                strokeShrink && !invertStrokeShrink
                  ? strokeWidth / (index + 1)
                  : strokeShrink && invertStrokeShrink
                  ? strokeWidth * (index + 1)
                  : strokeWidth
              }
              style={{
                transformOrigin: 'center',
                transform: `rotate(${(generateRandomNumber(seed) - 0.5) * 360}deg)`,
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              }}
            ></path>
          ))}
        </g>
      </g>
    </SvgCanvas>
  );
};

export default Isolines;
