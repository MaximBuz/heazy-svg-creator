// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import Shape from './Shape';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import { useDesign } from '../../../../contexts/DesignContext';

const BubbleOptions: React.FunctionComponent = () => {
  const { bubbleState, setBubbleState } = useDesign();
  return (
    <>
      <Variants />
      <Divider />
      <Shape />
      <Divider />
      <ColorOptions state={bubbleState} setState={setBubbleState} />
      <Divider />
      <ShadowOptions state={bubbleState} setState={setBubbleState} />
    </>
  );
};

export default BubbleOptions;
