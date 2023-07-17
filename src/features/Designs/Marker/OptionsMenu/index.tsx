// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import Shape from './Shape';
import Position from './Position';
import Ghost from './Ghost';
import { useDesign } from '../../../../contexts/DesignContext';

// Types

const MarkerOptions: React.FunctionComponent = () => {
  const { markerState, setMarkerState } = useDesign();
  return (
    <>
      <Shape />
      <Divider />
      <Position />
      <Divider />
      <Ghost />
      <Divider />
      <ColorOptions state={markerState} setState={setMarkerState} />
      <Divider />
      <ShadowOptions state={markerState} setState={setMarkerState} />
    </>
  );
};

export default MarkerOptions;
