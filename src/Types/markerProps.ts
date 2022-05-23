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

export interface IMarkerColorProps {
  startColor: string;
  endColor: string;
  bgColor: string;
}

export interface IMarkerShadowProps {
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
}

export type IMarkerAllProps = IMarkerShapeProps & IMarkerPositionProps & IMarkerGhostProps & IMarkerColorProps & IMarkerShadowProps;