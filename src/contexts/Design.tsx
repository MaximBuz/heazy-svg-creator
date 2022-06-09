import React, { useContext, useState, useEffect, Dispatch } from 'react';
import { IDesignModes } from '../features/Canvas/Types/designModes';
import { initialBubbleState } from '../features/Designs/Bubble/initialState';
import { IBubbleAllProps } from '../features/Designs/Bubble/Types/bubbleProps';
import { initialCornerState } from '../features/Designs/Corners/initialState';
import { ICornerAllProps } from '../features/Designs/Corners/Types/cornerProps';
import { initialMarkerState } from '../features/Designs/Marker/initialState';
import { IMarkerAllProps } from '../features/Designs/Marker/Types/markerProps';
import { initialWaveState } from '../features/Designs/Waves/initialState';
import { IWaveAllProps } from '../features/Designs/Waves/Types/waveProps';
import { Design } from '../graphql/generated';

interface IDesignProvider {
  design: string;
  setDesign: Dispatch<IDesignModes>;

  waveState: IWaveAllProps;
  setWaveState: Dispatch<IWaveAllProps>;

  bubbleState: IBubbleAllProps;
  setBubbleState: Dispatch<IBubbleAllProps>;

  cornerState: ICornerAllProps;
  setCornerState: Dispatch<ICornerAllProps>;

  markerState: IMarkerAllProps;
  setMarkerState: Dispatch<IMarkerAllProps>;

  copyTemplateParams: (designParams: Design) => void;
}

const DesignContext = React.createContext(null);

export function useDesign() {
  return useContext<IDesignProvider>(DesignContext);
}

export function DesignProvider({ children }) {
  const [design, setDesign] = useState<IDesignModes>('waves');

  const [waveState, setWaveState] = useState<IWaveAllProps>(initialWaveState);
  const [bubbleState, setBubbleState] = useState<IBubbleAllProps>(initialBubbleState);
  const [cornerState, setCornerState] = useState<ICornerAllProps>(initialCornerState);
  const [markerState, setMarkerState] = useState<IMarkerAllProps>(initialMarkerState);

  function copyTemplateParams(designParams: Design) {
    const { name: type } = designParams.type;
    if (type === 'waves') setWaveState({ waveState, ...designParams.optionParameters });
    if (type === 'bubble') setBubbleState({ bubbleState, ...designParams.optionParameters });
    if (type === 'corners') setCornerState({ cornerState, ...designParams.optionParameters });
    if (type === 'marker') setMarkerState({ markerState, ...designParams.optionParameters });
  }

  const value: IDesignProvider = {
    design,
    setDesign,

    waveState,
    setWaveState,

    bubbleState,
    setBubbleState,

    cornerState,
    setCornerState,

    markerState,
    setMarkerState,

    copyTemplateParams,
  };

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}
