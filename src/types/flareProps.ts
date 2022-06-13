export interface IFlareProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IFlareColorProps {
  bgColor: string;
  bgLightColor: string;
  irisColor: string;
  lensColor: string;
  lensColorMode: string;
}

export interface IFlareShapeProps {
  lensRadius: number; // 80 - 100
  lensVolume: number; // 1 - 5
  lensCut: boolean;
  irisWidth: number; // 1 - 10
  irisIntensity: number; // 0 - 2
  direction: number; // 0 - 3
}

export type IFlareAllProps = IFlareShapeProps & IFlareColorProps
