// React
import React, { Dispatch, SetStateAction } from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import Shape from './Shape';
import Variants from './Variants';

// Types
import { IWaveAllProps } from '../Types/waveProps';

const WaveOptions: React.FunctionComponent<{
  state: IWaveAllProps;
  setState: Dispatch<SetStateAction<IWaveAllProps>>;
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

export default WaveOptions;
