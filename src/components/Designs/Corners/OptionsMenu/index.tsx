// React
import React, { Dispatch, SetStateAction } from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';
import Shape from './Shape';
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';

// Types
import { ICornerAllProps } from '../Types/cornerProps';
import Position from './Position';

const CornerOptions: React.FunctionComponent<{
  state: ICornerAllProps;
  setState: Dispatch<SetStateAction<ICornerAllProps>>;
}> = (props) => {
  return (
    <>
      <Variants {...props}></Variants>
      <Divider />
      <Position {...props}></Position>
      <Divider />
      <Shape {...props}></Shape>
      <Divider />
      <ColorOptions {...props}></ColorOptions>
      <Divider></Divider>
      <ShadowOptions {...props}></ShadowOptions>
    </>
  );
};

export default CornerOptions;
