import { IIsolinesAllProps } from './isolinesProps';
import { Dispatch, SetStateAction, Ref } from 'react';
import { ICanvasDimensions } from './canvasDimensions';
import { IDesignModes } from './designModes';
import { IBubbleAllProps } from './bubbleProps';
import { ICornerAllProps } from './cornerProps';
import { IMarkerAllProps } from './markerProps';
import { IWaveAllProps } from './waveProps';
import { GetDesignTypesQuery, Design } from '../graphql/generated';
import { IFlareAllProps } from './flareProps';

export interface IDesignProvider {
  setWidth: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
  canvasDimensions: ICanvasDimensions;
  design: IDesignModes;
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
  designTypes: GetDesignTypesQuery | null;

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
    svgRef: Ref<SVGAElement | null>
  ) => void;
}
