import { IWaveAllProps } from './types/WaveProps.types';

export const initialWaveState: IWaveAllProps = {
  solid: true,
  bgColor: '#002438',
  startColor: '#ff0005ff',
  endColor: '#ff0092ff',
  shadowX: 0,
  shadowY: 0,
  shadowSD: 10,
  shadowColor: '#00000061',
  balance: 0.5,
  velocity: 1,
  breaks: 4,
  stacks: 2,
  distance: 100,
  strokeShrink: false,
  strokeWidth: 1,
  smooth: 0.2,
};
