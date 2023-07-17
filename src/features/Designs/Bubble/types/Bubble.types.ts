import {
  IShadow,
  IColors,
} from './../../../OptionsMenu/types/OptionsMenu.types';
import { Ref } from 'react';

export interface IBubbleProps {
  svgRef: Ref<SVGSVGElement | null>;
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

export type IBubbleAllProps = IBubbleShapeProps &
  IBubbleVariantsProps &
  IColors &
  IShadow;
