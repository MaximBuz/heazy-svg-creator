// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import Shape from './Shape';
import Variants from './Variants';

// Types
import { IWaveAllSetterProps } from '../Types/waveSetterProps';
import { IWaveAllProps } from '../Types/waveProps';

const WaveOptions: React.FunctionComponent<IWaveAllSetterProps & IWaveAllProps> = (props) => {
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

export default WaveOptions;
