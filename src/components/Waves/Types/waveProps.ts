import { IColors } from '../../OptionsMenu/ColorOptions/Types/colorProps';
import { IShadow } from '../../OptionsMenu/ShadowOptions/Types/shadowProps';

export interface IWaveProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IWaveVariantsProps {
  stroke: boolean; // DOPPELT ??
  solid: number;
  strokeWidth: number;
  strokeShrink: boolean;
}

export interface IWaveShapeProps {
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  smooth: number
}

export type IWaveAllProps =
  IWaveShapeProps &
  IWaveVariantsProps &
  IColors &
  IShadow;
