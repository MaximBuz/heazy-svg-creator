import { IShadowDispatcher } from '../Marker/shadowProps';
import { IColorDispatcher } from '../colorProps';
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


export type IWaveAllSetterProps =
  IWaveShapeSetterProps &
  IWaveVariantsSetterProps &
  IColorDispatcher &
  IShadowDispatcher;
