// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
// import Color from './Color';
// import Direction from './Direction';
// import Shadow from './Shadow';
// import Shape from './Shape';
// import Variants from './Variants';

// Types
import { ICornerSetterProps } from '../../../utils/types/cornerSetterProps';
import { ICornerProps } from '../../../utils/types/cornerProps';

const CornerOptions: React.FunctionComponent<
  Omit<ICornerSetterProps, 'seed' | 'width' | 'height' | 'svgRef'> &
    Omit<ICornerProps, 'seed' | 'width' | 'height' | 'svgRef'>
> = (props) => {
  return (
    <>
      {/* <Variants {...props}></Variants>
      <Divider />
      <Shape {...props}></Shape>
      <Divider /> */}
      {/* <Direction {...props}></Direction> */}
      {/* <Divider/> */}
      {/* <Color {...props}></Color>
      <Divider></Divider>
      <Shadow {...props}></Shadow> */}
    </>
  );
};

export default CornerOptions;
