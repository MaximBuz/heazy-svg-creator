import { Dispatch, SetStateAction } from 'react';

export interface IMarkerSetterProps {
  setLineCap: Dispatch<SetStateAction<'butt' | 'round' | 'square'>>;
  setLineJoin: Dispatch<SetStateAction<'bevel' | 'miter' | 'round'>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
  setMarkerHeight: Dispatch<SetStateAction<number>>;
  setzickZacks: Dispatch<SetStateAction<number>>;
  setGhost: Dispatch<SetStateAction<boolean>>;
  setGhostSize: Dispatch<SetStateAction<number>>;
  setGhostStartColor:Dispatch<SetStateAction<string>>;
  setGhostEndColor:Dispatch<SetStateAction<string>>;
  setPadding: Dispatch<SetStateAction<number>>;
  setMirror: Dispatch<SetStateAction<boolean>>;
  setYPosition: Dispatch<SetStateAction<number>>;
  setPressure: Dispatch<SetStateAction<number>>;
}
