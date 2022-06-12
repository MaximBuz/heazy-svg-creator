// React
import React from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Variants from './Variants';

// Types
import Shape from './Shape';
import ColorOptions from '../../../OptionsMenu/ColorOptions';
import { useDesign } from '../../../../contexts/Design';
import Position from './Position';

const IsolinesOptions: React.FunctionComponent = () => {
  const { isolinesState, setIsolinesState } = useDesign();
  return (
    <>
      <Variants />
      <Divider />
      <Shape />
      <Divider />
      <Position/>
      <Divider />
      <ColorOptions state={isolinesState} setState={setIsolinesState} />
    </>
  );
};

export default IsolinesOptions;
