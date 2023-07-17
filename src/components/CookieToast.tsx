import { Flex, Link, HStack, Button, Text } from '@chakra-ui/react';
import React from 'react';

export interface ICookieToastProps {
  accept: () => void;
  decline: () => void;
  close: () => void;
}

const CookieToast: React.FunctionComponent<ICookieToastProps> = ({
  accept,
  decline,
  close,
}) => {
  return (
    <Flex
      padding="2em"
      rounded="md"
      backgroundColor="#363e4a71"
      height="70px"
      alignItems="center"
      justifyContent="space-around"
      gap="2em"
    >
      <Flex direction="column">
        <Text fontSize="sm">We use cookies to collect usage statistics.</Text>
        <Text fontSize="sm">
          Click{' '}
          <Link
            textDecoration="underline"
            href="https://heazystudio.com/privacy"
          >
            here
          </Link>{' '}
          for more information.
        </Text>
      </Flex>
      <HStack>
        <Button
          size="sm"
          variant="solid"
          colorScheme="blue"
          onClick={() => {
            accept();
            close();
          }}
        >
          Accept
        </Button>
        <Button
          size="sm"
          variant="solid"
          colorScheme="outline"
          color="white"
          onClick={() => {
            decline();
            close();
          }}
        >
          Decline
        </Button>
      </HStack>
    </Flex>
  );
};

export default CookieToast;
