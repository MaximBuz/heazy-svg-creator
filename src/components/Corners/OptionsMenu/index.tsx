// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';
import Shape from './Shape';
import ShadowOptions from '../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../OptionsMenu/ColorOptions';

// Types
import { ICornerAllSetterProps } from '../../../Types/cornerSetterProps';
import { ICornerAllProps } from '../../../Types/cornerProps';
import Position from './Position';

const CornerOptions: React.FunctionComponent<ICornerAllSetterProps & ICornerAllProps> = (props) => {
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
