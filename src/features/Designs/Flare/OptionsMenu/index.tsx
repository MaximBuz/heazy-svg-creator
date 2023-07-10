// React
import React, { memo } from 'react';

// Styling
import { Divider } from '@chakra-ui/react';

// Components
import Shape from './Shape';
import Color from './Color';

const FlareOptions: React.FunctionComponent = memo(() => {
  return (
    <>
      <Shape />
      <Divider />
      <Color />
    </>
  );
});

export default FlareOptions;
