import { IColors } from './colorProps';


export interface IIsolinesProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IIsolinesVariantsProps {
  strokeWidth: number;
  strokeShrink: boolean;
  invertStrokeShrink: boolean;
}

export interface IIsolinesShapeProps {
  velocity: number;
  depth: number;
}

export type IIsolinesAllProps =
  IIsolinesShapeProps &
  IIsolinesVariantsProps &
  IColors
