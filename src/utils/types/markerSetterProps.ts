import { Dispatch, SetStateAction } from 'react';

export interface IMarkerSetterProps {
  setLineCap: Dispatch<SetStateAction<'butt' | 'round' | 'square'>>;
  setLineJoin: Dispatch<SetStateAction<'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
  setMarkerHeight: Dispatch<SetStateAction<number>>;
  setNarrowness: Dispatch<SetStateAction<number>>;
  setGhost: Dispatch<SetStateAction<boolean>>;
}
