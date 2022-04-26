import React from 'react';
import { smoothWavePath } from '../utils/calculations/smoothWavePath';
import { peakWavePath } from '../utils/calculations/peakWavePath';

export interface IStackedWaveProps {
  type: "smooth" | "peak"
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
  if (type === "smooth") {
    wavesData = smoothWavePath(seed, width, height, balance, velocity, breaks, stacks, distance);
  } else {
    wavesData = peakWavePath(seed, width, height, balance, velocity, breaks, stacks, distance);
  }

  return (
    <div style={{width, height}}>
      <svg viewBox={`0 0 ${width} ${height}`} height="100%" width="100%">
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id={`linear-gradient-${type}`}>
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>
        <filter id={`shadow-${type}`}>
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
            filter={`url(#shadow-${type})`}
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: `url(#linear-gradient-${type})`,
            }}
          ></path>
        ))}
      </svg>
    </div>
  );
};

export default StackedWave;
