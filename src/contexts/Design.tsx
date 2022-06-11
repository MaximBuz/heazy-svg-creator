import React, { useContext, useState, Ref } from 'react';
import { IDesignModes } from '../types/designModes';
import { initialBubbleState } from '../features/Designs/Bubble/initialState';
import { IBubbleAllProps } from '../types/bubbleProps';
import { initialCornerState } from '../features/Designs/Corners/initialState';
import { ICornerAllProps } from '../types/cornerProps';
import { initialMarkerState } from '../features/Designs/Marker/initialState';
import { IMarkerAllProps } from '../types/markerProps';
import { initialWaveState } from '../features/Designs/Waves/initialState';
import { IWaveAllProps } from '../types/waveProps';
import { Design, useCreateNewDesignMutation, useGetDesignTypesQuery } from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';
import { useQueryClient } from 'react-query';

// firebase
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { svgToBlob } from '../utils/helpers/downloadBlob';
import { useCanvasDimensions } from '../features';
import { IDesignProvider } from '../types/designContext';
import { useAuth } from './Auth';

const DesignContext = React.createContext(null);

/* ----- HOOK ----- */
export function useDesign() {
  return useContext<IDesignProvider>(DesignContext);
}

/* ----- PROVIDER ----- */
export function DesignProvider ({ children }) {
  // get auth
  const auth = useAuth();

  // Design State
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);
  const [design, setDesign] = useState<IDesignModes>({ name: 'waves', id: 1 });
  const [waveState, setWaveState] = useState<IWaveAllProps>(initialWaveState);
  const [bubbleState, setBubbleState] = useState<IBubbleAllProps>(initialBubbleState);
  const [cornerState, setCornerState] = useState<ICornerAllProps>(initialCornerState);
  const [markerState, setMarkerState] = useState<IMarkerAllProps>(initialMarkerState);

  // getting DesignTypes from database
  const { data: designTypes, isSuccess } = useGetDesignTypesQuery({ endpoint, fetchParams: { headers: headers(auth?.idToken) } });

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
  const mutation = useCreateNewDesignMutation({ endpoint, fetchParams: { headers: headers(auth?.idToken) } });
  async function saveTemplate(
    designParams: Pick<Design, 'optionParameters'>,
    name: string,
    firebaseId: string,
    typeId: number,
    svgRef: Ref<SVGAElement | null>
  ) {
    const reference = ref(storage, `thumbnails/${firebaseId}/${name}.png`);
    return uploadBytes(reference, await svgToBlob(svgRef), { contentType: 'image/png', cacheControl: 'max-age=31536000'})
      .then((snapshot) => {
        mutation.mutate(
          {
            name,
            typeId,
            thumbnailUrl: snapshot.ref.toString(),
            optionParameters: designParams,
          },
          { onSuccess: () => queryClient.invalidateQueries(['getUserByFirebaseId']) }
        );
      })
      .catch(() => console.log('Failed to upload thumbnail'));
  }

  const value: IDesignProvider = {
    setWidth,
    setHeight,
    canvasDimensions,
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
