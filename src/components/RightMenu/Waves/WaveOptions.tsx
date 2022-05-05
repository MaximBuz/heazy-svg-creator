// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Color from './Color';
import Direction from './Direction';
import Shadow from './Shadow';
import Shape from './Shape';
import Variants from './Variants';

// Types
import { IWaveSetterProps } from '../../../utils/types/waveSetterProps';
import { IWaveProps } from '../../../utils/types/waveProps';

const WaveOptions: React.FunctionComponent<
  Omit<IWaveSetterProps, 'seed' | 'width' | 'height' | 'svgRef'> &
  Omit<IWaveProps, 'seed' | 'width' | 'height' | 'svgRef'>
> = (props) => {
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
