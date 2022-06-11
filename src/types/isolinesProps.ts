import { IColors } from './colorProps';


export interface IIsolinesProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export type strokeStyles = 1 | 2 | 3 | 4;

export interface IIsolinesVariantsProps {
  strokeWidth: number;
  strokeShrink: boolean;
  strokeStyle: strokeStyles;
}

export interface IIsolinesShapeProps {
  velocity: number;
  depth: number;
  size: number;
  radius: number;
  pressure: number;
}

export interface IIsolinePositionProps {
  x: number;
  y: number;
}

export type IIsolinesAllProps =
  IIsolinesShapeProps &
  IIsolinesVariantsProps &
  IIsolinePositionProps &
  IColors
