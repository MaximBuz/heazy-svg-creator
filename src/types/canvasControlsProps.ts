import { Dispatch, Ref, SetStateAction } from 'react';

export interface ICanvasControlsProps {
  seed: number;
  setSeed: Dispatch<SetStateAction<number>>;
  setZoom: Dispatch<SetStateAction<number>>;
  svgRef: Ref<SVGAElement | null>;
}
