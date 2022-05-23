// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import { IBubbleProps } from '../Types/bubbleProps';
import { IBubbleSetterProps } from '../Types/bubbleSetterProps';
import Shape from './Shape';
import ColorOptions from '../../OptionsMenu/ColorOptions';
import ShadowOptions from '../../OptionsMenu/ShadowOptions';

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
      <ColorOptions {...props}></ColorOptions>
      <Divider></Divider>
      <ShadowOptions {...props}></ShadowOptions>
    </>
  );
};

export default BubbleOptions;
