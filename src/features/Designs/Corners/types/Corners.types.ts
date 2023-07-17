import { Ref } from 'react';
import { IColors, IShadow } from '../../../OptionsMenu/types/OptionsMenu.types';

export interface ICornerProps {
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
  width: number;
  height: number;
}

export interface ICornerVariantsProps {
  solid: boolean;
}

export interface ICornerPositionProps {
  topLeftCorner: boolean;
  topRightCorner: boolean;
  bottomLeftCorner: boolean;
  bottomRightCorner: boolean;
  mirror: boolean;
}

export interface ICornerShapeProps {
  strokeWidth: number;
  strokeShrink: boolean;
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  smooth: number;
}

export type ICornerAllProps = ICornerShapeProps &
  ICornerVariantsProps &
  ICornerPositionProps &
  IColors &
  IShadow;

export interface ICornerSvgGroup {
  width: number;
  height: number;
  solid: boolean;
  strokeWidth: number;
  strokeShrink: boolean;
  classId: string;
  startColor: string;
  endColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
  path: any[];
  direction: number;
}
