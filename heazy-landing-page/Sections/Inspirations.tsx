import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SectionDivider from '../Components/SectionDivider';
import OverviewBG from '../public/overview-bg.png';

export interface IInspirationsProps {}

const Inspirations: React.FunctionComponent<IInspirationsProps> = (props) => {
  return (
    <Flex
      // backgroundImage={` url('${OverviewBG.src}')`}
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom"
      backgroundSize="contain"
      mt="10"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
      minHeight="75vh"
    >
      <SectionDivider text="Inspirations" />
      <Heading fontWeight="700" fontSize="3em">
        Heazy{' '}
        <span
          style={{
            backgroundImage: 'linear-gradient(120deg,#f724e9 0%,#0c4ab5 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          inspires.
        </span>
        <br />
        You know it when you see it.
      </Heading>

      <Flex justifyContent="space-between" p="0 8em" width="100%" gap="20px" wrap="wrap">
        <Box
          position="relative"
          width="580px"
          height="380px"
          boxShadow="0 0px 8px -4px #0d1117"
          transition="0.3s"
          _hover={{
            backdropFilter: 'blur(3px)',
            boxShadow: 'inset 0 0 0 1px #162c41, 0 0px 35px -5px #152238',
            transform: 'scale(1.05)',
          }}
        >
          <Image src="/heazy-fear.png" layout='fill' objectFit="cover" alt="heazy-svg-generator-inspiration"></Image>
        </Box>

        <Box
          position="relative"
          width="580px"
          height="380px"
          boxShadow="0 0px 8px -4px #0d1117"
          transition="0.3s"
          _hover={{
            backdropFilter: 'blur(3px)',
            boxShadow: 'inset 0 0 0 1px #162c41, 0 0px 35px -5px #152238',
            transform: 'scale(1.05)',
          }}
        >
          <Image src="/heazy-landing.png" layout='fill' objectFit="cover" alt="heazy-svg-generator-inspiration"></Image>
        </Box>

        <Box
          position="relative"
          height="550px"
          width="30%"
          boxShadow="0 0px 8px -4px #0d1117"
          transition="0.3s"
          _hover={{
            backdropFilter: 'blur(3px)',
            boxShadow: 'inset 0 0 0 1px #162c41, 0 0px 35px -5px #152238',
            transform: 'scale(1.05)',
          }}
        >
          <Image src="/heazy-login.png" layout='fill' objectFit="cover" alt="heazy-svg-generator-inspiration"></Image>
        </Box>

        <Box
          position="relative"
          height="550px"
          width="60%"
          boxShadow="0 0px 8px -4px #0d1117"
          transition="0.3s"
          _hover={{
            backdropFilter: 'blur(3px)',
            boxShadow: 'inset 0 0 0 1px #162c41, 0 0px 35px -5px #152238',
            transform: 'scale(1.05)',
          }}
        >
          <Image src="/heazy-sessions.png" layout='fill' objectFit="cover" alt="heazy-svg-generator-inspiration"></Image>
        </Box>

        <Box
          position="relative"
          height="370px"
          width="40%"
          boxShadow="0 0px 8px -4px #0d1117"
          transition="0.3s"
          _hover={{
            backdropFilter: 'blur(3px)',
            boxShadow: 'inset 0 0 0 1px #162c41, 0 0px 35px -5px #152238',
            transform: 'scale(1.05)',
          }}
        >
          <Image src="/heazy-masterclass.png" layout='fill' objectFit="cover" alt="heazy-svg-generator-inspiration"></Image>
        </Box>

      </Flex>
    </Flex>
  );
};

export default Inspirations;
