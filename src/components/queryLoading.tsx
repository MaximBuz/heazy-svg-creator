import { Flex } from '@chakra-ui/react';
import { Jelly } from '@uiball/loaders';
import React from 'react';

export interface IQueryLoadingProps {
  size: number;
  speed: number;
  color: string;
}

const QueryLoading: React.FunctionComponent<IQueryLoadingProps> = (props) => {
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

export default QueryLoading;
