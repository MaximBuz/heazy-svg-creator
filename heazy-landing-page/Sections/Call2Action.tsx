import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import React from 'react';

export interface ICall2ActionProps {}

const Call2Action: React.FunctionComponent<ICall2ActionProps> = (props) => {
  return (
    <Flex
      backgroundImage="radial-gradient(circle farthest-corner at -75% 0%,#0F1119 0%,rgb(15, 17, 25,0) 48%),radial-gradient(circle farthest-corner at 25% -80%,#12141c 50%,rgb(15, 17, 25,0)100%),radial-gradient(circle farthest-corner at -55% -100%,rgb(15, 17, 25,0) 55%,rgba(13,17,23,.28) 65%,rgb(15, 17, 25,0) 68%),radial-gradient(circle farthest-corner at -33% -75%,#00c58d 48%,rgba(131,5,49,0) 56%),radial-gradient(circle farthest-side at 0 50%,rgb(15, 17, 25,0) 64%,rgba(1,2,36,.4) 69%,rgb(15, 17, 25,0) 81%),radial-gradient(circle farthest-corner at 0 50%,rgb(15, 17, 25,0) 33%,#05f 51%,rgb(15, 17, 25,0) 72%)"
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      direction="column"
      textAlign="center"
      gap="20px"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      padding={['0 1.5em']}
    >
      <Heading fontWeight="800" fontSize={{ base: '2.5em', lg: '4em' }} lineHeight={1}>
        What are you wating for?<br></br>
        <span
          style={{
            backgroundImage: 'linear-gradient(207deg,#00c58d 23%,#05f 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          Heazy
        </span>{' '}
        is waiting for you!
      </Heading>
      <Text fontSize="20px">No sign ups, logins, credit cards etc. We promise!</Text>
      <Flex gap="10px">
        <Button
          as="a"
          href={process.env.NEXT_PUBLIC_APP_URL || "https://app.heazystudio.com/"}
          rounded="full"
          size="lg"
          bg="#05f"
          color="white"
          _hover={{ transform: 'scale(1.05)' }}
        >
          Try it out!
        </Button>
        <Button
          as="a"
          href="https://www.youtube.com/watch?v=58rATWqcFxo"
          rounded="full"
          size="lg"
          variant="outline"
          _hover={{ bg: '#ffffff40', color: 'white', transform: 'scale(1.05)' }}
        >
          Watch Showcase
        </Button>
      </Flex>
    </Flex>
  );
};

export default Call2Action;
