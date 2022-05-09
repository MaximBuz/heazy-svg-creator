export interface IMarkerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
  lineCap: 'butt' | 'round' | 'square';
  lineJoin: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
  strokeWidth: number;
  startColor: string;
  endColor: string;
  bgColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
  markerHeight: number;
  narrowness: number;
  ghost: boolean;
}
