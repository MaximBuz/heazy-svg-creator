import { IShadow } from './shadowProps';
import { IColors } from './colorProps';

export interface IMarkerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IMarkerShapeProps {
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'bevel' | 'miter' | 'round';
  strokeWidth: number;
  markerHeight: number;
  zickZacks: number;
  pressure: number;
}

export interface IMarkerPositionProps {
  padding: number;
  mirror: boolean;
  yPosition: number;
}

export interface IMarkerGhostProps {
  ghost: boolean;
  ghostSize: number;
  ghostStartColor: string;
  ghostEndColor: string;
}


export type IMarkerAllProps = IMarkerShapeProps & IMarkerPositionProps & IMarkerGhostProps & IColors & IShadow;