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

export interface IShadow {
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
}

export interface IShadowDispatcher {
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
}

export interface IDimensionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  drawerButtonRef: any;
  setHeight: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  width: number;
}
