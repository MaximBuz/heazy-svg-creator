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

// Types

const MarkerOptions: React.FunctionComponent<IMarkerAllSetterProps & IMarkerAllProps> = (props) => {
  return (
    <>
      <Shape {...props}></Shape>
      <Divider />
      <Color {...props}></Color>
      <Divider></Divider>
      <Position {...props}></Position>
      <Divider></Divider>
      {/* <Ghost {...props}></Ghost> */}
      <Shadow {...props}></Shadow>
    </>
  );
};

export default MarkerOptions;
