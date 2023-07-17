import { Dispatch, SetStateAction, Ref } from 'react';
import { Design } from '../../graphql/generated';
import { IBubbleAllProps } from '../../features/Designs/Bubble/types/Bubble.types';
import { ICanvasDimensions } from '../../features/Canvas/types/Canvas.types';
import { ICornerAllProps } from '../../features/Designs/Corners/types/Corners.types';
import { IFlareAllProps } from '../../features/Designs/Flare/types/FlareProps.types';
import { IIsolinesAllProps } from '../../features/Designs/Isolines/types/IsolineProps.types';
import { IMarkerAllProps } from '../../features/Designs/Marker/types/MarkerProps.types';
import { IWaveAllProps } from '../../features/Designs/Waves/types/WaveProps.types';

export type IDesignMode = {
  name: 'waves' | 'bubble' | 'corners' | 'marker' | 'isolines' | 'flare';
  id?: number;
};

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
