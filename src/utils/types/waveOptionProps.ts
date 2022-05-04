import { Dispatch, SetStateAction } from 'react';

export interface IWaveOptionsProps {
  setSolid: Dispatch<SetStateAction<number>>;
  solid: number;
  setSmooth: Dispatch<SetStateAction<number>>;
  setDirection: Dispatch<SetStateAction<number>>;
  setBgColor: Dispatch<SetStateAction<string>>;
  bgColor: string;
  setStartColor: Dispatch<SetStateAction<string>>;
  startColor: string;
  setStopColor: Dispatch<SetStateAction<string>>;
  stopColor: string;

  shadowX: number;
  setShadowX: Dispatch<SetStateAction<number>>;
  shadowY: number;
  setShadowY: Dispatch<SetStateAction<number>>;
  shadowSD: number;
  setShadowSD: Dispatch<SetStateAction<number>>;
  shadowOpacity: number;
  setShadowOpacity: Dispatch<SetStateAction<number>>;
  shadowColor: string;
  setShadowColor: Dispatch<SetStateAction<string>>;

  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  setBalance: Dispatch<SetStateAction<number>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setBreaks: Dispatch<SetStateAction<number>>;
  setStacks: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  setStrokeShrink: Dispatch<SetStateAction<boolean>>;
  strokeShrink: boolean;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  strokeWidth: number;
}