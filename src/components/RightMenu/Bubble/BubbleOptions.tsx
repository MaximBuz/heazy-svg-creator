// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import { IBubbleProps } from '../../../utils/types/bubbleProps';
import { IBubbleSetterProps } from '../../../utils/types/bubbleSetterProps';
import Shape from './Shape';

const BubbleOptions: React.FunctionComponent<
  Omit<IBubbleSetterProps, 'seed' | 'width' | 'height' | 'svgRef'> &
  Omit<IBubbleProps, 'seed' | 'width' | 'height' | 'svgRef'>
> = (props) => {
  return (
    <>
      <Variants {...props}></Variants>
      <Divider />
      <Shape {...props}></Shape>
      <Divider />
      {/* <Direction {...props}></Direction> */}
      {/* <Divider/> */}
      {/* <Color {...props}></Color>
      <Divider></Divider>
      <Shadow {...props}></Shadow> */}
    </>
  );
};

export default BubbleOptions;
