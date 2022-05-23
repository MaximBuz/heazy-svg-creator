import { IColors } from '../../../OptionsMenu/ColorOptions/Types/colorProps';
import { IShadow } from '../../../OptionsMenu/ShadowOptions/Types/shadowProps';


export interface IBubbleProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IBubbleVariantsProps {
  stroke: boolean; // DOPPELT ??
  solid: number;
  strokeWidth: number;
}

export interface IBubbleShapeProps {
  velocity: number;
  size: number;
}

export type IBubbleAllProps =
  IBubbleShapeProps &
  IBubbleVariantsProps &
  IColors &
  IShadow;
