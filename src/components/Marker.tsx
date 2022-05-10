import React from 'react';
import { generateRandomNumber } from '../utils/calculations/randomNumber';
import { IMarkerProps } from '../utils/types/markerProps';

const Marker: React.FunctionComponent<IMarkerProps> = ({
  svgRef,
  seed,
  width,
  height,
  lineCap,
  lineJoin,
  strokeWidth,
  startColor,
  endColor,
  bgColor,
  shadowX,
  shadowY,
  shadowSD,
  shadowColor,
  markerHeight,
  zickZacks,
  ghost,
}) => {
  // const pathData = bubblePath(seed, width, height, velocity, size);

  const randomClassId = Math.round(Math.random() * 100);
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      ref={svgRef}
    >
      <g transform-origin="center" transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${randomClassId}`}>
          <stop offset="0%" stopColor={startColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={endColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        <filter id={`shadow-${randomClassId}`}>
          <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
        </filter>
        <path
          d={"M71 338.276L134.477 118.614L191.76 471L308.283 69L397.264 353.59C417.391 258.727 464 69 464 69"}
          fill="none"
          strokeLinecap={lineCap}
          strokeLinejoin={lineJoin}
          filter={`url(#shadow-${randomClassId})`}
          stroke={`url(#linear-gradient-${randomClassId})`}
          strokeWidth={strokeWidth}
          style={{
            transformOrigin: 'center',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
          }}
        ></path>
      </g>
    </svg>
  );
};

export default Marker;
