// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Shape from './Shape';
import Color from './Color';
import Shadow from './Shadow';
import { IMarkerAllSetterProps } from '../../../utils/types/markerSetterProps';
import { IMarkerAllProps } from '../../../utils/types/markerProps';
import Position from './Position';
import Ghost from './Ghost';

// Types

const MarkerOptions: React.FunctionComponent<IMarkerAllSetterProps & IMarkerAllProps> = (props) => {
  return (
    <>
      <Shape {...props}></Shape>
      <Divider />
      <Position {...props}></Position>
      <Divider></Divider>
      <Ghost {...props}></Ghost>
      <Divider></Divider>
      <Color {...props}></Color>
      <Divider/>
      <Shadow {...props}></Shadow>
    </>
  );
};

export default MarkerOptions;
