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

export interface IWaveColorProps {
  startColor: string;
  endColor: string;
  bgColor: string;
}

export interface IWaveShadowProps {
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
}

export type IWaveAllProps =
  IWaveShapeProps &
  IWaveVariantsProps &
  IWaveColorProps &
  IWaveShadowProps;
