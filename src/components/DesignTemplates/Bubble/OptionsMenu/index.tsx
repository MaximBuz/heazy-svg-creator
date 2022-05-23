// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import { IBubbleAllProps } from '../Types/bubbleProps';
import Shape from './Shape';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import { IBubbleAllSetterProps } from '../Types/bubbleSetterProps';

const BubbleOptions: React.FunctionComponent<IBubbleAllProps & IBubbleAllSetterProps> = (props) => {
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
