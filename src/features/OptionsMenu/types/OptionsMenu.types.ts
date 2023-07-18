import { Dispatch, ReactNode, Ref, RefObject, SetStateAction } from 'react';
import { IBubbleAllProps } from '../../Designs/Bubble/types/Bubble.types';
import { ICornerAllProps } from '../../Designs/Corners/types/Corners.types';
import { IIsolinesAllProps } from '../../Designs/Isolines/types/IsolineProps.types';
import { IMarkerAllProps } from '../../Designs/Marker/types/MarkerProps.types';
import { IWaveAllProps } from '../../Designs/Waves/types/WaveProps.types';

export interface IColors {
  startColor: string;
  endColor: string;
  bgColor: string;
}

export interface IColorDispatcher {
  setStartColor: Dispatch<SetStateAction<string>>;
  setEndColor: Dispatch<SetStateAction<string>>;
  setBgColor: Dispatch<SetStateAction<string>>;
}

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

export interface IDimensionsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  drawerButtonRef: RefObject<HTMLDivElement | null>;
  setHeight: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
  height: number;
  width: number;
}

export type AllDesignsProps =
  | IWaveAllProps
  | IBubbleAllProps
  | IMarkerAllProps
  | ICornerAllProps
  | IIsolinesAllProps;

export interface ISharedOptionsProps<T = AllDesignsProps> {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
}

export interface IOptionsMenuProps {
  svgRef: Ref<SVGSVGElement | null>;
  children: ReactNode;
}
