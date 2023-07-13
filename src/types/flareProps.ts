import { Ref } from 'react';

export interface IFlareProps {
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
  width: number;
  height: number;
}

export interface IFlareShapeProps {
  lensRadius: number; // 80 - 100
  lensSpill: number; // 1 - 5
  lensCut: boolean;
  irisWidth: number; // 1 - 15
  irisIntensity: number; // 0 - 2
  direction: number; // 0 - 3
}

export type TLensColorModes =
  | 'color-dodge'
  | 'darken'
  | 'screen'
  | 'normal'
  | 'hard-light'
  | 'soft-light';
export interface IFlareColorProps {
  bgColor: string;
  bgLightColor: string;
  irisColor: string;
  lensColor: string;
  lensColorMode: TLensColorModes;
}

export type IFlareAllProps = IFlareShapeProps & IFlareColorProps;
