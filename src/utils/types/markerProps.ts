export interface IMarkerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
  edgeJoin: "miter" | "bevel" | "round";
  startJoin: "miter" | "bevel" | "round";
  endJoin: "miter" | "bevel" | "round";
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