import { IMarkerAllProps } from './types/MarkerProps.types';

export const initialMarkerState: IMarkerAllProps = {
  lineCap: 'butt',
  lineJoin: 'bevel',
  strokeWidth: 130,
  bgColor: '#ffffff',
  startColor: '#000000',
  endColor: '#000000',
  shadowX: 0,
  shadowY: 0,
  shadowSD: 10,
  shadowColor: '#00000000',
  markerHeight: 25,
  zickZacks: 10,
  ghost: true,
  ghostSize: 1.1,
  ghostStartColor: '#dedede',
  ghostEndColor: '#bdbdbd',
  padding: 30,
  mirror: false,
  yPosition: 500,
  pressure: 0,
};
