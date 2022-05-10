import { Dispatch, SetStateAction } from 'react';

export interface IMarkerShapeSetterProps {
  setLineCap: Dispatch<SetStateAction<'butt' | 'round' | 'square'>>;
  setLineJoin: Dispatch<SetStateAction<'bevel' | 'miter' | 'round'>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  setMarkerHeight: Dispatch<SetStateAction<number>>;
  setzickZacks: Dispatch<SetStateAction<number>>;
  setPressure: Dispatch<SetStateAction<number>>;
}

export interface IMarkerPositionSetterProps {
  setPadding: Dispatch<SetStateAction<number>>;
  setMirror: Dispatch<SetStateAction<boolean>>;
  setYPosition: Dispatch<SetStateAction<number>>;
}

export interface IMarkerGhostSetterProps {
  setGhost: Dispatch<SetStateAction<boolean>>;
  setGhostSize: Dispatch<SetStateAction<number>>;
  setGhostStartColor: Dispatch<SetStateAction<string>>;
  setGhostEndColor: Dispatch<SetStateAction<string>>;
}

export interface IMarkerColorSetterProps {
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
}

export interface IMarkerShadowSetterProps {
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
}

export type IMarkerAllSetterProps = IMarkerShapeSetterProps &
  IMarkerPositionSetterProps &
  IMarkerGhostSetterProps &
  IMarkerColorSetterProps &
  IMarkerShadowSetterProps;
