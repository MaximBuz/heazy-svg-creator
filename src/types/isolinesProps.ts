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
}

export interface IIsolinesShapeProps {
  velocity: number;
  amount: number;
  depth: number;
}

export type IIsolinesAllProps =
  IIsolinesShapeProps &
  IIsolinesVariantsProps &
  IColors
