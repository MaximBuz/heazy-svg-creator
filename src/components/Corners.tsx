import React from 'react';
import { smoothWavePath } from '../utils/calculations/smoothWavePath';
import { peakWavePath } from '../utils/calculations/peakWavePath';
import { ICornerProps } from '../utils/types/cornerProps';
import { smoothCornerPath } from '../utils/calculations/smoothCornerPath';

const Corners: React.FunctionComponent<ICornerProps> = ({
  svgRef,
  type,
  seed,
  width,
  height,
  balance,
  velocity,
  breaks,
  stacks,
  distance,
  startWaveColor,
  stopWaveColor,
  bgColor,
  shadowX,
  shadowY,
  shadowSD,
  shadowColor,
  stroke,
  strokeWidth,
  strokeShrink,
  direction,
}) => {
  let firstCorner, secondCorner;
  if (type === 'smooth') {
    firstCorner = smoothCornerPath(
      seed,
      width,
      height,
      balance,
      velocity,
      breaks,
      stacks,
      distance,
      stroke,
    );
    secondCorner = smoothCornerPath(
      seed*2,
      width,
      height,
      balance,
      velocity,
      breaks,
      stacks,
      distance,
      stroke,
    );
  } else {
    firstCorner = peakWavePath(seed, width, height, balance, velocity,breaks , stacks, distance, stroke);
  }
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
      {/* ----- FIRST CORNER ----- */}
      <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(1, 1) rotate(0)'}>
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${type}-${randomClassId}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${type}-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {firstCorner.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${type}-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / firstCorner.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
      
      {/* ----- SECOND CORNER ----- */}
      <g transform-origin={`${width / 2} ${height / 2}`} transform={'scale(-1, -1) rotate(0)'}>
        <linearGradient id={`linear-gradient-${type}-${randomClassId}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>

        {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${type}-${randomClassId}`} x="-20%" width="150%" y="-20%" height="150%">
            <feDropShadow dx={shadowX} dy={shadowY} stdDeviation={shadowSD} floodColor={shadowColor} />
          </filter>
        )}
        {secondCorner.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${type}-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined}
            strokeWidth={
              strokeWidth && strokeShrink
                ? strokeWidth - (strokeWidth / secondCorner.length) * index
                : strokeWidth
            }
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </g>
    </svg>
  );
};

export default Corners;