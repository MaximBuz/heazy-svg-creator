import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SectionDivider from '../Components/SectionDivider';

export interface IInspirationsProps {}

const Inspirations: React.FunctionComponent<IInspirationsProps> = (props) => {
  return (
    <Flex
      id="inspirations"
      backgroundImage="/inspiration-bg.png"
      position="relative"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      backgroundSize="contain"
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="center"
      textAlign="center"
      gap="50px"
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
        Instantly cure design fatigue.
      </Heading>

      {/* IMAGE WRAPPER */}
      <Flex justifyContent="space-between" p="0 20%" width="100%" gap="20px" wrap="wrap">
        {/* IMAGE ROW */}
        <Flex height="43vh" width="100%" justifyContent="center" gap="20px">
          <Box
            position="relative"
            width="50%"
            height="100%"
            transition="0.5s"
            rounded="sm"
            boxShadow="0 0px 35px -5px #152238"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0px 35px 2px #233860',
            }}
          >
            <Image
              src="/heazy-masterclass.png"
              layout="fill"
              objectFit="cover"
              alt="heazy-svg-generator-inspiration"
            ></Image>
          </Box>

          <Box
            position="relative"
            width="50%"
            height="100%"
            transition="0.5s"
            rounded="sm"
            boxShadow="0 0px 35px -5px #152238"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0px 35px 2px #233860',
            }}
          >
            <Image
              src="/heazy-sessions.png"
              layout="fill"
              objectFit="cover"
              alt="heazy-svg-generator-inspiration"
            ></Image>
          </Box>
        </Flex>

        <Flex height="75vh" width="100%" justifyContent="center" gap="20px">
          <Box
            position="relative"
            width="50%"
            height="100%"
            transition="0.5s"
            rounded="sm"
            boxShadow="0 0px 35px -5px #152238"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0px 35px 2px #233860',
            }}
          >
            <Image
              src="/heazy-login.png"
              layout="fill"
              objectFit="cover"
              alt="heazy-svg-generator-inspiration"
            ></Image>
          </Box>
          <Flex gap="20px" direction="column" width="50%" height="100%">
            <Box
              position="relative"
              width="100%"
              height="50%"
              transition="0.5s"
              rounded="sm"
              boxShadow="0 0px 35px -5px #152238"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 0px 35px 2px #233860',
              }}
            >
              <Image
                src="/heazy-fear.png"
                layout="fill"
                objectFit="cover"
                alt="heazy-svg-generator-inspiration"
              ></Image>
            </Box>
            <Box
              position="relative"
              width="100%"
              height="50%"
              transition="0.5s"
              rounded="sm"
              boxShadow="0 0px 35px -5px #152238"
              _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 0px 35px 2px #233860',
              }}
            >
              <Image
                src="/heazy-landing.png"
                layout="fill"
                objectFit="cover"
                alt="heazy-svg-generator-inspiration"
              ></Image>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Inspirations;
