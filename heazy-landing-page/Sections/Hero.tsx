import { Flex, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';

export interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  return (
    <Flex direction="column">
      {/* NAVBAR */}
      <Navbar />
      
      {/* HERO TITLE */}
      <Flex gap={50} direction="column" justifyContent="center" alignItems="center">
        <Flex
          minHeight="75vh"
          direction="column"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Heading fontWeight="800" fontSize="4em">
            The design you want.
            <br />
            Without the{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(207deg,#00c58d 23%,#05f 87%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              design time.
            </span>
          </Heading>
          <Flex direction="column" alignItems="center" gap="5px">
            <Button
              as="a"
              href="https://app.heazy.studio/"
              rounded="full"
              size="lg"
              _hover={{ bg: '#05f', color: 'white', transform:"scale(1.05)" }}
            >
              Start Designing
            </Button>
            <Text opacity={0.5}>Free for ever. No signup required.</Text>
          </Flex>
        </Flex>
        <Flex height={{base: "50vh",lg:"100vh"}} justifyContent="center" alignItems="flex-start">
          <video
            playsInline
            autoPlay
            loop
            muted
            width="85%"
            height="auto"
            style={{
              borderRadius: '10px',
              boxShadow: 'rgb(0 0 0 / 20%) 0px 4px 20px',
            }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
