// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';
import Shape from './Shape';
import ShadowOptions from '../../../OptionsMenu/ShadowOptions';
import ColorOptions from '../../../OptionsMenu/ColorOptions';

// Types
import Position from './Position';
import { useDesign } from '../../../../contexts/DesignContext';

const CornerOptions: React.FunctionComponent = () => {
  const { cornerState, setCornerState } = useDesign();
  return (
    <>
      <Variants />
      <Divider />
      <Position />
      <Divider />
      <Shape />
      <Divider />
      <ColorOptions state={cornerState} setState={setCornerState} />
      <Divider />
      <ShadowOptions state={cornerState} setState={setCornerState} />
    </>
  );
};

export default CornerOptions;
