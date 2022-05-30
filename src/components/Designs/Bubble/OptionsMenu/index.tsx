// React
import React, { Dispatch, SetStateAction } from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import { IBubbleAllProps } from '../Types/bubbleProps';
import Shape from './Shape';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';

const BubbleOptions: React.FunctionComponent<{
  state: IBubbleAllProps;
  setState: Dispatch<SetStateAction<IBubbleAllProps>>;
}> = (props) => {
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
