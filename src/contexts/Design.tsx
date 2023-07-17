import React, { useContext, useState, Ref } from 'react';
import { IDesignMode } from '../types/designModes';
import { initialBubbleState } from '../features/Designs/Bubble/initialState';
import { IBubbleAllProps } from '../types/bubbleProps';
import { initialCornerState } from '../features/Designs/Corners/initialState';
import { ICornerAllProps } from '../types/cornerProps';
import { initialMarkerState } from '../features/Designs/Marker/initialState';
import { IMarkerAllProps } from '../types/markerProps';
import { initialWaveState } from '../features/Designs/Waves/initialState';
import { IWaveAllProps } from '../types/waveProps';
import {
  Design,
  useCreateNewDesignMutation,
  useGetDesignTypesQuery,
} from '../graphql/generated';
import { endpoint, headers } from '../utils/apiConfig';
import { useQueryClient } from 'react-query';

// firebase
import { storage } from '../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { svgToBlob } from '../utils/helpers/downloadBlob';
import { useCanvasDimensions } from '../features';
import { IDesignProvider } from '../types/designContext';
import { useAuth } from './Auth';
import { initialIsolineState } from '../features/Designs/Isolines/initialState';
import { IIsolinesAllProps } from '../types/isolinesProps';
import { initialFlareState } from '../features/Designs/Flare/initialState';
import { IFlareAllProps } from '../types/flareProps';
import { useEventLogger } from '../hooks/useEventLogger';

const DesignContext = React.createContext(null);

/* ----- HOOK ----- */
export function useDesign() {
  return useContext<IDesignProvider>(DesignContext);
}

/* ----- PROVIDER ----- */
export function DesignProvider({ children }) {
  // get auth
  const auth = useAuth();
  // Analytics
  const { sendEventLog } = useEventLogger();

  // Design State
  const [setWidth, setHeight, canvasDimensions] = useCanvasDimensions(800, 600);

  const [design, setDesign] = useState<IDesignMode>({ name: 'waves' });

  const [waveState, setWaveState] = useState<IWaveAllProps>(initialWaveState);
  const [bubbleState, setBubbleState] =
    useState<IBubbleAllProps>(initialBubbleState);
  const [cornerState, setCornerState] =
    useState<ICornerAllProps>(initialCornerState);
  const [markerState, setMarkerState] =
    useState<IMarkerAllProps>(initialMarkerState);
  const [isolinesState, setIsolinesState] =
    useState<IIsolinesAllProps>(initialIsolineState);
  const [flareState, setFlareState] =
    useState<IFlareAllProps>(initialFlareState);

  // getting DesignTypes from database
  const { data, isSuccess } = useGetDesignTypesQuery({
    endpoint,
    fetchParams: { headers: headers(auth?.idToken) },
  });

  // Setting state to parameters saved from templates
  function copyTemplateParams(designParams: Design) {
    const type = designParams.type;

    setDesign(type as IDesignMode);

    if (type.name === 'waves') {
      setWaveState({ ...waveState, ...designParams.optionParameters });
    } else if (type.name === 'bubble') {
      setBubbleState({ ...bubbleState, ...designParams.optionParameters });
    } else if (type.name === 'corners') {
      setCornerState({ ...cornerState, ...designParams.optionParameters });
    } else if (type.name === 'marker') {
      setMarkerState({ ...markerState, ...designParams.optionParameters });
    } else if (type.name === 'isolines') {
      setIsolinesState({ ...isolinesState, ...designParams.optionParameters });
    } else if (type.name === 'flare') {
      setFlareState({ ...flareState, ...designParams.optionParameters });
    }
  }

  // Save template to database
  const queryClient = useQueryClient();
  const mutation = useCreateNewDesignMutation({
    endpoint,
    fetchParams: { headers: headers(auth?.idToken) },
  });
  async function saveTemplate(
    designParams: Pick<Design, 'optionParameters'>,
    name: string,
    firebaseId: string,
    typeId: number,
    svgRef: Ref<SVGSVGElement | null>
  ) {
    const reference = ref(storage, `thumbnails/${firebaseId}/${name}.png`);
    return uploadBytes(reference, await svgToBlob(svgRef), {
      contentType: 'image/png',
      cacheControl: 'max-age=31536000',
    })
      .then((snapshot) => {
        mutation.mutate(
          {
            name,
            typeId,
            thumbnailUrl: snapshot.ref.toString(),
            optionParameters: designParams,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries(['getUserByFirebaseId']);
              sendEventLog('saved_template', {
                user: auth.currentUser,
                design: typeId,
                name,
              });
            },
          }
        );
      })
      .catch((e) => console.error('Failed to upload thumbnail', e));
  }

  const value: IDesignProvider = {
    setWidth,
    setHeight,
    canvasDimensions,
    design,
    setDesign,
    designTypes: isSuccess
      ? (data.designTypes as IDesignMode[])
      : ([
          { name: 'waves' },
          { name: 'bubble' },
          { name: 'corners' },
          { name: 'marker' },
          { name: 'isolines' },
          { name: 'flare' },
        ] as IDesignMode[]),

    waveState,
    setWaveState,

    bubbleState,
    setBubbleState,

    cornerState,
    setCornerState,

    markerState,
    setMarkerState,

    isolinesState,
    setIsolinesState,

    flareState,
    setFlareState,

    copyTemplateParams,
    saveTemplate,
  };

  return (
    <DesignContext.Provider value={value}>{children}</DesignContext.Provider>
  );
}
