import React from 'react';
import { IIsolinesVariantsProps } from './types/IsolineProps.types';

const StrokeStyles: React.FunctionComponent<
  Pick<IIsolinesVariantsProps, 'strokeStyle'>
> = ({ strokeStyle }) => {
  if (strokeStyle === 1) return <></>;

  if (strokeStyle === 2)
    return (
      <filter
        x="-2%"
        y="-2%"
        width="104%"
        height="104%"
        filterUnits="objectBoundingBox"
        id="strokeStyle"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="3"
          result="noise"
        ></feTurbulence>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="3"
          in="SourceGraphic"
          result="newSource"
        ></feDisplacementMap>
      </filter>
    );

  if (strokeStyle === 3)
    return (
      <filter
        x="-5%"
        y="-5%"
        width="110%"
        height="110%"
        filterUnits="objectBoundingBox"
        id="strokeStyle"
      >
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
        <feComposite
          operator="in"
          in2="f2b"
          in="SourceGraphic"
          result="f3"
        ></feComposite>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="3"
          result="noise"
        ></feTurbulence>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="2.5"
          in="f3"
          result="f4"
        ></feDisplacementMap>
      </filter>
    );

  if (strokeStyle === 4)
    return (
      <filter
        id="strokeStyle"
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
    );

  if (strokeStyle === 5)
    return (
      <filter
        x="-2%"
        y="-2%"
        width="104%"
        height="104%"
        filterUnits="objectBoundingBox"
        id="strokeStyle"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1.2"
          numOctaves="3"
          result="noise"
        ></feTurbulence>
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="3"
          in="SourceGraphic"
          result="newSource"
        ></feDisplacementMap>
      </filter>
    );
};

export default StrokeStyles;
