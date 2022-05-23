import { Dispatch, SetStateAction } from 'react';

export interface IShadow {
  shadowX: number;
  shadowY: number;
  shadowSD: number;
  shadowColor: string;
}

export interface IShadowDispatcher {
  setShadowX: Dispatch<SetStateAction<number>>;
  setShadowY: Dispatch<SetStateAction<number>>;
  setShadowSD: Dispatch<SetStateAction<number>>;
  setShadowColor: Dispatch<SetStateAction<string>>;
}
