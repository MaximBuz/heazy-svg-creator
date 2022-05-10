export interface IMarkerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'bevel' | 'miter' | 'round';
  strokeWidth: number;
  startColor: string;
  endColor: string;
  bgColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
  markerHeight: number;
  zickZacks: number;
  ghost: boolean;
  ghostSize: number;
  ghostStartColor: string;
  ghostEndColor: string;
  padding: number;
  mirror: boolean;
  yPosition: number;
  pressure: number;
}
