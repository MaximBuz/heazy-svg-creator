export interface ICornerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface ICornerVariantsProps {
  stroke: boolean; // DOPPELT ??
  solid: number;
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
  smooth: number
}

export interface ICornerColorProps {
  startColor: string;
  endColor: string;
  bgColor: string;
}

export interface ICornerShadowProps {
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
}

export type ICornerAllProps =
  ICornerShapeProps &
  ICornerVariantsProps &
  ICornerPositionProps &
  ICornerColorProps &
  ICornerShadowProps;
