import { Flex, HStack, Divider, Heading, Text, Container } from '@chakra-ui/react';
import React from 'react';
import OverviewBG from '../public/overview-bg.png';
import SectionDivider from '../Components/SectionDivider';

export interface ICall2ActionProps {}

const Call2Action: React.FunctionComponent<ICall2ActionProps> = (props) => {
  return (
    <Flex
      id="features"
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      direction="column"
      width="100%"
      height="100vh"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
    >
      <SectionDivider text="Start designing" />
      <Heading fontWeight="800" fontSize="4em">
        Get started with<br></br>
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
        today
      </Heading>
    </Flex>
  );
};

export default Call2Action;
