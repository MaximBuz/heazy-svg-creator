import React from 'react';
import { bubblePath } from '../utils/calculations/bubblePath';
import { generateRandomNumber } from '../utils/calculations/randomNumber';

export interface IBubbleProps {
  svgRef?: any;
  stroke: boolean;
  strokeWidth?: number;
  seed: number;
  width: number;
  height: number;
  startWaveColor: string;
  stopWaveColor: string;
  bgColor: string;
  shadowX?: number;
  shadowY?: number;
  shadowSD?: number;
  shadowOpacity?: number;
  velocity: number;
  size: number;
}

const Bubble: React.FunctionComponent<IBubbleProps> = ({
  svgRef,
  stroke,
  strokeWidth,
  seed,
  width,
  height,
  startWaveColor,
  stopWaveColor,
  bgColor,
  shadowX,
  shadowOpacity,
  shadowY,
  shadowSD,
  velocity,
  size,
}) => {
  const pathData = bubblePath(seed, width, height, velocity, size);

  const randomClassId = Math.round(Math.random() * 100);
  return (
    <div ref={svgRef} style={{ width, height }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform-origin="center" transform="scale(1, 1) rotate(0)">
          <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
          <linearGradient id={`linear-gradient-${randomClassId}`}>
            <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
            <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
          </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
          {!stroke && (
            <filter id={`shadow-${randomClassId}`}>
              <feDropShadow
                dx={shadowX}
                dy={shadowY}
                stdDeviation={shadowSD}
                floodColor="black"
                floodOpacity={shadowOpacity}
              />
            </filter>
          )}
          <path
            d={pathData}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${randomClassId})` : undefined}
            stroke={stroke ? `url(#linear-gradient-${randomClassId})` : undefined}
            strokeWidth={strokeWidth}
            style={{
              transformOrigin: "center",
              transform: `rotate(${(generateRandomNumber(seed) - 0.5) * 360}deg)`,
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${randomClassId})` : undefined,
            }}
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Bubble;
