export interface ICornerProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
  type: 'smooth' | 'peak';
  stroke: boolean;
  solid: number;
  strokeWidth: number;
  strokeShrink: boolean;
  startWaveColor: string;
  stopWaveColor: string;
  bgColor: string;
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
  balance: number;
  velocity: number;
  breaks: number;
  stacks: number;
  distance: number;
  direction: number;
}