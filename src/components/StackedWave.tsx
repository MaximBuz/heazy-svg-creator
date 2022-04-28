import React from 'react';
import { smoothWavePath } from '../utils/calculations/smoothWavePath';
import { peakWavePath } from '../utils/calculations/peakWavePath';

export interface IStackedWaveProps {
  // onClick?: (e: MouseEvent) => void;
  svgRef?: any;
  type: 'smooth' | 'peak';
  seed: number;
  width: number;
  height: number;
  startWaveColor: string;
  stopWaveColor: string;
  bgColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowOpacity: number;
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
}) => {
  let wavesData;
  if (type === 'smooth') {
    wavesData = smoothWavePath(seed, width, height, balance, velocity, breaks, stacks, distance);
  } else {
    wavesData = peakWavePath(seed, width, height, balance, velocity, breaks, stacks, distance);
  }
  const randomClassId = Math.round(Math.random()) * Math.round(Math.random());
  return (
    <div ref={svgRef}style={{ width, height }}>
      <svg viewBox={`0 0 ${width} ${height}`} height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${type}-${randomClassId}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>
        <filter id={`shadow-${type}-${randomClassId}`}>
          <feDropShadow
            dx={shadowX}
            dy={shadowY}
            stdDeviation={shadowSD}
            floodColor="black"
            floodOpacity={shadowOpacity}
          />
        </filter>
        {wavesData.map((wave, index) => (
          <path
            key={index}
            d={wave}
            fill="none"
            strokeLinecap="round"
            filter={`url(#shadow-${type}-${randomClassId})`}
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: `url(#linear-gradient-${type}-${randomClassId})`,
            }}
          ></path>
        ))}
      </svg>
    </div>
  );
};

export default StackedWave;
