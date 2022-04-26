import React from 'react';
import { smoothWavePath } from '../utils/calculations/smoothWavePath';

export interface ISmoothWaveProps {
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
}

const SmoothWave: React.FunctionComponent<ISmoothWaveProps> = ({
  seed,
  width,
  height,
  balance,
  velocity,
  breaks,
  startWaveColor,
  stopWaveColor,
  bgColor,
  shadowOpacity,
  shadowX,
  shadowY,
  shadowSD,
}) => {
  const waveData = smoothWavePath(seed, width, height, balance, velocity, breaks);
  return (
    <div style={{width, height}}>
      <svg viewBox={`0 0 ${width} ${height}`} height="100%" width="100%">
        <rect x="0" y="0" width={width} height={height} fill={bgColor}></rect>
        <linearGradient id="linear-gradient-smooth">
          <stop offset="0%" stopColor={startWaveColor} stopOpacity="100%" />
          <stop offset="100%" stopColor={stopWaveColor} stopOpacity="100%" />
        </linearGradient>
        <filter id="shadow-smooth">
          <feDropShadow
            dx={shadowX}
            dy={shadowY}
            stdDeviation={shadowSD}
            floodColor="black"
            floodOpacity={shadowOpacity}
          />
        </filter>
          <path
            d={waveData}
            fill="none"
            strokeLinecap="round"
            filter="url(#shadow-smooth)"
            style={{
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0s',
              fill: 'url(#linear-gradient-smooth)',
            }}
          ></path>
      </svg>
    </div>
  );
};

export default SmoothWave;
