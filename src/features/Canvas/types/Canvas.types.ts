import { Dispatch, Ref, SetStateAction } from 'react';

export interface ICanvasControlsProps {
  currentZoom: number;
  setSeed: Dispatch<SetStateAction<number>>;
  setZoom: Dispatch<SetStateAction<number>>;
  svgRef: Ref<SVGSVGElement | null>;
}

export interface ICanvasDimensions {
  width: number;
  height: number;
  widthRatio: number;
  heightRatio: number;
}
