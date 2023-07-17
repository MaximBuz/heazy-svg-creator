import { Flex } from '@chakra-ui/react';
import { Jelly } from '@uiball/loaders';
import React from 'react';

export interface ILoadingPlaceholderProps {
  size: number;
  speed: number;
  color: string;
}

const LoadingPlaceholder: React.FunctionComponent<ILoadingPlaceholderProps> = (
  props
) => {
  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Jelly {...props} />
    </Flex>
  );
};

export default LoadingPlaceholder;
