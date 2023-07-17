import { Ref } from 'react';
import { IColors } from '../../../OptionsMenu/types/OptionsMenu.types';

export interface IIsolinesProps {
  svgRef: Ref<SVGSVGElement | null>;
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
  radius: number;
  pressure: number;
  distance: number; // 0 - 200
  innerOffsetX: number; // 0 - 2
  innerOffsetY: number; // 0 - 2
}

export interface IIsolinePositionProps {
  zoom: number;
  x: number;
  y: number;
}

export type IIsolinesAllProps = IIsolinesShapeProps &
  IIsolinesVariantsProps &
  IIsolinePositionProps &
  IColors;
