import { Dispatch, SetStateAction } from 'react';

export interface IBubbleSetterProps {
  setSize: Dispatch<SetStateAction<number>>;
  setSolid: Dispatch<SetStateAction<number>>;
  setBgColor: Dispatch<SetStateAction<string>>;
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
  setVelocity: Dispatch<SetStateAction<number>>;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
}
