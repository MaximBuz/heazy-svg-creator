import { Dispatch, SetStateAction } from 'react';

export interface IWaveVariantsSetterProps {
  setSolid: Dispatch<SetStateAction<number>>;
  setStrokeShrink: Dispatch<SetStateAction<boolean>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

export interface IWaveShapeSetterProps {
  setBalance: Dispatch<SetStateAction<number>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setBreaks: Dispatch<SetStateAction<number>>;
  setStacks: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  setSmooth: Dispatch<SetStateAction<number>>;
}

export interface IWaveColorSetterProps {
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
}

export interface IWaveShadowSetterProps {
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
}

export type IWaveAllSetterProps =
  IWaveShapeSetterProps &
  IWaveVariantsSetterProps &
  IWaveColorSetterProps &
  IWaveShadowSetterProps;
