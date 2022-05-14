import { Dispatch, SetStateAction } from 'react';

export interface ICornerVariantsSetterProps {
  setSmooth: Dispatch<SetStateAction<number>>;
  setSolid: Dispatch<SetStateAction<number>>;
}

export interface ICornerPositionSetterProps {
  setTopLeftCorner: Dispatch<SetStateAction<boolean>>;
  setTopRightCorner: Dispatch<SetStateAction<boolean>>;
  setBottomLeftCorner: Dispatch<SetStateAction<boolean>>;
  setBottomRightCorner: Dispatch<SetStateAction<boolean>>;
  setMirror: Dispatch<SetStateAction<boolean>>;
}

export interface ICornerShapeSetterProps {
  setBalance: Dispatch<SetStateAction<number>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setBreaks: Dispatch<SetStateAction<number>>;
  setStacks: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  setStrokeShrink: Dispatch<SetStateAction<boolean>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

export interface ICornerColorSetterProps {
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
}

export interface ICornerShadowSetterProps {
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
}

export type ICornerAllSetterProps =
  ICornerShapeSetterProps &
  ICornerVariantsSetterProps &
  ICornerPositionSetterProps &
  ICornerColorSetterProps &
  ICornerShadowSetterProps;
