import React, { useContext, useState, Dispatch, SetStateAction, Ref } from 'react';
import { IDesignModes } from '../features/Canvas/Types/designModes';
import { initialBubbleState } from '../features/Designs/Bubble/initialState';
import { IBubbleAllProps } from '../features/Designs/Bubble/Types/bubbleProps';
import { initialCornerState } from '../features/Designs/Corners/initialState';
import { ICornerAllProps } from '../features/Designs/Corners/Types/cornerProps';
import { initialMarkerState } from '../features/Designs/Marker/initialState';
import { IMarkerAllProps } from '../features/Designs/Marker/Types/markerProps';
import { initialWaveState } from '../features/Designs/Waves/initialState';
import { IWaveAllProps } from '../features/Designs/Waves/Types/waveProps';
import {
  Design,
  GetDesignTypesQuery,
  useCreateNewDesignMutation,
  useGetDesignTypesQuery,
} from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';
import { useQueryClient } from 'react-query';

// firebase
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { svgToBlob } from '../utils/helpers/downloadBlob';

interface IDesignProvider {
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

  copyTemplateParams: (designParams: Design) => void;
  saveTemplate: (
    designParams: Pick<Design, 'optionParameters'>,
    name: string,
    firebaseId: string,
    typeId: number,
    svgRef: Ref<SVGAElement | null>
  ) => void;
}

const DesignContext = React.createContext(null);

export function useDesign() {
  return useContext<IDesignProvider>(DesignContext);
}

export function DesignProvider({ children }) {
  // Design State
  const [design, setDesign] = useState<IDesignModes>({ name: 'waves', id: 1 });
  const [waveState, setWaveState] = useState<IWaveAllProps>(initialWaveState);
  const [bubbleState, setBubbleState] = useState<IBubbleAllProps>(initialBubbleState);
  const [cornerState, setCornerState] = useState<ICornerAllProps>(initialCornerState);
  const [markerState, setMarkerState] = useState<IMarkerAllProps>(initialMarkerState);

  // getting DesignTypes
  const { data: designTypes, isSuccess } = useGetDesignTypesQuery({ endpoint, fetchParams: { headers } });

  // Setting state to parameters saved from templates
  function copyTemplateParams(designParams: Design) {
    const type = designParams.type;
    if (type.name === 'waves') setWaveState({ ...waveState, ...designParams.optionParameters });
    if (type.name === 'bubble') setBubbleState({ ...bubbleState, ...designParams.optionParameters });
    if (type.name === 'corners') setCornerState({ ...cornerState, ...designParams.optionParameters });
    if (type.name === 'marker') setMarkerState({ ...markerState, ...designParams.optionParameters });
    setDesign(type);
  }

  // Save template to database
  const queryClient = useQueryClient();
  const mutation = useCreateNewDesignMutation({ endpoint, fetchParams: { headers } });
  async function saveTemplate(
    designParams: Pick<Design, 'optionParameters'>,
    name: string,
    firebaseId: string,
    typeId: number,
    svgRef: Ref<SVGAElement | null>
  ) {
    const reference = ref(storage, `thumbnails/${firebaseId}/${name}.png`);
    return uploadBytes(reference, await svgToBlob(svgRef), { contentType: 'image/png' })
      .then((snapshot) => {
        mutation.mutate(
          {
            firebaseId,
            name,
            typeId,
            thumbnailUrl: snapshot.ref.toString(),
            optionParameters: designParams,
          },
          { onSuccess: () => queryClient.invalidateQueries(['getUserByFirebaseId', { id: firebaseId }]) }
        );
      })
      .catch(() => console.log('Failed to upload thumbnail'));
  }

  const value: IDesignProvider = {
    design,
    setDesign,
    designTypes: isSuccess
      ? designTypes
      : {
          designTypes: [
            { name: 'waves', id: 1 },
            { name: 'bubble', id: 2 },
            { name: 'corners', id: 3 },
            { name: 'marker', id: 4 },
          ],
        },

    waveState,
    setWaveState,

    bubbleState,
    setBubbleState,

    cornerState,
    setCornerState,

    markerState,
    setMarkerState,

    copyTemplateParams,
    saveTemplate,
  };

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}
