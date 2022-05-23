// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import ShadowOptions from '../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../OptionsMenu/ColorOptions';
import Shape from './Shape';
import Position from './Position';
import Ghost from './Ghost';

// Types
import { IMarkerAllSetterProps } from '../../../Types/Marker/markerSetterProps';
import { IMarkerAllProps } from '../../../Types/Marker/markerProps';

const MarkerOptions: React.FunctionComponent<IMarkerAllSetterProps & IMarkerAllProps> = (props) => {
  return (
    <>
      <Shape {...props}></Shape>
      <Divider />
      <Position {...props}></Position>
      <Divider></Divider>
      <Ghost {...props}></Ghost>
      <Divider></Divider>
      <ColorOptions {...props}></ColorOptions>
      <Divider/>
      <ShadowOptions {...props}></ShadowOptions>
    </>
  );
};

export default MarkerOptions;
