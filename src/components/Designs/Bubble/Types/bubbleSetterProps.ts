import { Dispatch, SetStateAction } from 'react';
import { IColorDispatcher } from '../../../OptionsMenu/ColorOptions/Types/colorProps';
import { IShadowDispatcher } from '../../../OptionsMenu/ShadowOptions/Types/shadowProps';

export interface IBubbleVariantsSetterProps {
  setSolid: Dispatch<SetStateAction<number>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}

export interface IBubbleShapeSetterProps {
  setVelocity: Dispatch<SetStateAction<number>>;
  setSize: Dispatch<SetStateAction<number>>;
}


export type IBubbleAllSetterProps =
  IBubbleShapeSetterProps &
  IBubbleVariantsSetterProps &
  IColorDispatcher &
  IShadowDispatcher;
