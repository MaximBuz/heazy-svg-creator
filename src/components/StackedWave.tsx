import React from 'react';
import { smoothWavePath } from '../utils/calculations/smoothWavePath';
import { peakWavePath } from '../utils/calculations/peakWavePath';

export interface IStackedWaveProps {
  // onClick?: (e: MouseEvent) => void;
  svgRef?: any;
  type: 'smooth' | 'peak';
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
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
}

const StackedWave: React.FunctionComponent<IStackedWaveProps> = ({
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
  shadowOpacity,
  shadowX,
  shadowY,
  shadowSD,
  stroke,
  strokeWidth
}) => {
  let wavesData;
  if (type === 'smooth') {
    wavesData = smoothWavePath(seed, width, height, balance, velocity, breaks, stacks, distance, stroke);
  } else {
    wavesData = peakWavePath(seed, width, height, balance, velocity, breaks, stacks, distance, stroke);
  }
  const randomClassId = Math.round(Math.random()) * Math.round(Math.random());
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
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${type}-${randomClassId}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>

          {/* in the shadow you have to put in either x and width or y and height for shadows to stay in box */}
        {!stroke && (
          <filter id={`shadow-${type}-${randomClassId}`} x={0} width="100%">
            <feDropShadow
              dx={shadowX}
              dy={shadowY}
              stdDeviation={shadowSD}
              floodColor="black"
              floodOpacity={shadowOpacity}
            />
          </filter>
        )}
        {wavesData.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={!stroke ? `url(#shadow-${type}-${randomClassId})`:undefined}
            stroke={stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined}
            strokeWidth={strokeWidth}
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: !stroke ? `url(#linear-gradient-${type}-${randomClassId})` : undefined,
            }}
          ></path>
        ))}
      </svg>
    </div>
  );
};

export default StackedWave;
