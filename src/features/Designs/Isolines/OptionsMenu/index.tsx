// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import Shape from './Shape';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import { useDesign } from '../../../../contexts/DesignContext';
import Position from './Position';
import CenterPosition from './CenterOffset';

const IsolinesOptions: React.FunctionComponent = () => {
  const { isolinesState, setIsolinesState } = useDesign();
  return (
    <>
      <Variants />
      <Divider />
      <Shape />
      <Divider />
      <Position />
      <Divider />
      <CenterPosition />
      <Divider />
      <ColorOptions state={isolinesState} setState={setIsolinesState} />
    </>
  );
};

export default IsolinesOptions;
