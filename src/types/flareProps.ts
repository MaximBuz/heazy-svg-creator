import { IColors } from './colorProps';

export interface IFlareProps {
  svgRef: any;
  seed: number;
  width: number;
  height: number;
}

export interface IFlareVariantsProps {

}

export interface IFlareShapeProps {

}

export interface IIsolinePositionProps {
  zoom: number;
  x: number;
  y: number;
}

export type IFlareAllProps =
  IFlareShapeProps &
  IFlareVariantsProps &
  IIsolinePositionProps &
  IColors
