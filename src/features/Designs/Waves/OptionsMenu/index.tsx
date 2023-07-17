// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import Shape from './Shape';
import Variants from './Variants';
import { useDesign } from '../../../../contexts/DesignContext';

const WaveOptions: React.FunctionComponent = () => {
  const { waveState, setWaveState } = useDesign();
  return (
    <>
      <Variants />
      <Divider />
      <Shape />
      <Divider />
      <ColorOptions state={waveState} setState={setWaveState} />
      <Divider />
      <ShadowOptions state={waveState} setState={setWaveState} />
    </>
  );
};

export default WaveOptions;
