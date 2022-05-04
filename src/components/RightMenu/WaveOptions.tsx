// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Color from './Waves/Color';
import Direction from './Waves/Direction';
import Shadow from './Waves/Shadow';
import Shape from './Waves/Shape';
import Variants from './Waves/Variants';
import { IWaveOptionsProps } from '../../utils/types/waveOptionProps';

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

      {/* -------------- SHADOW -------------- */}
    </>
  );
};

export default WaveOptions;
