import { Flex, Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

// Images
import ErrorImg from '../assets/Error.svg';

export interface IErrorPlaceholderProps {
  withImage?: boolean;
  heading?: string;
}

const ErrorPlaceholder: React.FunctionComponent<IErrorPlaceholderProps> = ({
  withImage,
}) => {
  return (
    <Flex
      direction="column"
      mt="1em"
      textAlign="center"
      gap="10px"
      height="90%"
      justifyContent="center"
      p="5"
    >
      {withImage && (
        <Image pos="relative" right="15px" src={ErrorImg} h="20%"></Image>
      )}
      <Box mt="1em">
        <Heading as="h4" size="md" fontWeight={800}>
          oooops...{' '}
        </Heading>
        <Heading as="h5" size="md" fontWeight={300}>
          Something went wrong!
        </Heading>
      </Box>
    </Flex>
  );
};

export default ErrorPlaceholder;
