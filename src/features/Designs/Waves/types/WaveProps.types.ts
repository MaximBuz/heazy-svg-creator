import { Ref } from 'react';
import { IColors, IShadow } from '../../../OptionsMenu/types/OptionsMenu.types';

export interface IWaveProps {
  svgRef: Ref<SVGSVGElement | null>;
  seed: number;
  width: number;
  height: number;
}

export interface IWaveVariantsProps {
  solid: boolean;
  strokeWidth: number;
  strokeShrink: boolean;
}

export interface IWaveShapeProps {
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  smooth: number;
}

export type IWaveAllProps = IWaveShapeProps &
  IWaveVariantsProps &
  IColors &
  IShadow;
