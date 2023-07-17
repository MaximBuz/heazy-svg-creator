import { IIsolinesAllProps } from './isolinesProps';
import { Dispatch, SetStateAction, Ref } from 'react';
import { ICanvasDimensions } from './canvasDimensions';
import { IDesignMode } from './designModes';
import { IBubbleAllProps } from './bubbleProps';
import { ICornerAllProps } from './cornerProps';
import { IMarkerAllProps } from './markerProps';
import { IWaveAllProps } from './waveProps';
import { Design } from '../graphql/generated';
import { IFlareAllProps } from './flareProps';

export interface IDesignProvider {
  setWidth: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
  canvasDimensions: ICanvasDimensions;
  design: IDesignMode;
  setDesign: Dispatch<SetStateAction<IDesignMode>>;
  designTypes: IDesignMode[] | null;

  waveState: IWaveAllProps;
  setWaveState: Dispatch<SetStateAction<IWaveAllProps>>;

  bubbleState: IBubbleAllProps;
  setBubbleState: Dispatch<SetStateAction<IBubbleAllProps>>;

  cornerState: ICornerAllProps;
  setCornerState: Dispatch<SetStateAction<ICornerAllProps>>;

  markerState: IMarkerAllProps;
  setMarkerState: Dispatch<SetStateAction<IMarkerAllProps>>;

  isolinesState: IIsolinesAllProps;
  setIsolinesState: Dispatch<SetStateAction<IIsolinesAllProps>>;

  flareState: IFlareAllProps;
  setFlareState: Dispatch<SetStateAction<IFlareAllProps>>;

  copyTemplateParams: (designParams: Design) => void;
  saveTemplate: (
    designParams: Pick<Design, 'optionParameters'>,
    name: string,
    firebaseId: string,
    typeId: number,
    svgRef: Ref<SVGSVGElement | null>
  ) => void;
}
