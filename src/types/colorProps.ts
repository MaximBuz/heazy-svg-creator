import { Dispatch, SetStateAction } from 'react';

export interface IColors {
  startColor: string;
  endColor: string;
  bgColor: string;
}

export interface IColorDispatcher {
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
}
