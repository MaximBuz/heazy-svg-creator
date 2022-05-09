import { Dispatch, SetStateAction } from 'react';

export interface IMarkerSetterProps {
  setEdgeJoin: Dispatch<SetStateAction<'miter' | 'bevel' | 'round'>>;
  setStartJoin: Dispatch<SetStateAction<'miter' | 'bevel' | 'round'>>;
  setEndJoin: Dispatch<SetStateAction<'miter' | 'bevel' | 'round'>>;
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
