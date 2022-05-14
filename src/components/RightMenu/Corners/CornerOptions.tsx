// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';
import Shape from './Shape';
import Color from './Color';

// Types
import { ICornerAllSetterProps } from '../../../utils/types/cornerSetterProps';
import { ICornerAllProps } from '../../../utils/types/cornerProps';
import Shadow from './Shadow';

const CornerOptions: React.FunctionComponent<
  ICornerAllSetterProps &
   ICornerAllProps
> = (props) => {
  return (
    <>
      <Variants {...props}></Variants>
      <Divider />
      <Shape   {...props}></Shape>
      <Divider />
      {/* <Direction {...props}></Direction> */}
      {/* <Divider/> */}
      <Color {...props}></Color>
      <Divider></Divider>
      <Shadow {...props}></Shadow>
    </>
  );
};

export default CornerOptions;
