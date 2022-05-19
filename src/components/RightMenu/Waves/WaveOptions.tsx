// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Color from './Color';
import Shadow from './Shadow';
import Shape from './Shape';
import Variants from './Variants';

// Types
import { IWaveAllSetterProps } from '../../../utils/types/waveSetterProps';
import { IWaveAllProps } from '../../../utils/types/waveProps';

const WaveOptions: React.FunctionComponent<IWaveAllSetterProps & IWaveAllProps> = (props) => {
  return (
    <>
      <Variants {...props}></Variants>
      <Divider />
      <Shape {...props}></Shape>
      <Divider />
      {/* <Direction {...props}></Direction> */}
      {/* <Divider/> */}
      <Color {...props}></Color>
      <Divider></Divider>
      <Shadow {...props}></Shadow>
    </>
  );
};

export default WaveOptions;
