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
import { IWaveOptionsProps } from '../../../utils/types/waveOptionProps';

const WaveOptions: React.FunctionComponent<IWaveOptionsProps> = (props) => {
  return (
    <>
      <Variants {...props}></Variants>

      <Divider />

      <Shape {...props}></Shape>

      <Divider />

      <Direction {...props}></Direction>

      <Divider></Divider>

      <Color {...props}></Color>

      <Divider></Divider>

      <Shadow {...props}></Shadow>
    </>
  );
};

export default WaveOptions;
