import { IColors } from './colorProps';
import { IShadow } from './shadowProps';


export interface IBubbleProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IBubbleVariantsProps {
  solid: boolean;
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
