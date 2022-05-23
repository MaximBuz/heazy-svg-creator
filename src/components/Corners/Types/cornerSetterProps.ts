import { Dispatch, SetStateAction } from 'react';
import { IColorDispatcher } from '../../OptionsMenu/ColorOptions/Types/colorProps';
import { IShadowDispatcher } from '../../OptionsMenu/ShadowOptions/Types/shadowProps';

export interface ICornerVariantsSetterProps {
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
  setSmooth: Dispatch<SetStateAction<number>>;
}

export type ICornerAllSetterProps =
  ICornerShapeSetterProps &
  ICornerVariantsSetterProps &
  ICornerPositionSetterProps &
  IColorDispatcher &
  IShadowDispatcher;
