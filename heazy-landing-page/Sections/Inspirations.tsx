import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SectionDivider from '../Components/SectionDivider';
import { useTranslation } from 'next-i18next';

export interface IInspirationsProps {}

const Inspirations: React.FunctionComponent<IInspirationsProps> = () => {
  const { t } = useTranslation('inspirations');

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
      mb="10%"
    >
      <SectionDivider text={t('dividerText')} />
      <Heading fontWeight="700" fontSize={{ base: '2em', lg: '3em' }}>
        {t('title1')}
        <span
          style={{
            backgroundImage: 'linear-gradient(120deg,#f724e9 0%,#0c4ab5 87%)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
          }}
        >
          {t('title2')}
        </span>
        <br />
        {t('description')}
      </Heading>

      <Flex
        justifyContent="center"
        alignItems="center"
        padding={{ base: '0 1em', md: '0 5%', lg: '0 20%' }}
        width="100%"
        gap="20px"
        wrap="wrap"
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          height={{ base: '100vh', lg: '30vh', xl: '40vh', '2xl': '47.5vh' }}
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Box
            position="relative"
            width={['100%', '100%', '70%', '100%']}
            height={['35%', '50%', '45%', '100%']}
            overflow="hidden"
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
            width={['100%', '100%', '70%', '100%']}
            height={['60%', '50%', '55%', '100%']}
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

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          height={{ base: '150vh', md: '220vh', lg: '80vh', xl: '75vh' }}
          width={['100%', '100%', '70%', '100%']}
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Box
            position="relative"
            width={{ base: '100%', lg: '50%' }}
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
          <Flex
            gap="20px"
            direction="column"
            alignItems="center"
            justifyContent="center"
            width={{ base: '100%', lg: '50%' }}
            height="100%"
          >
            <Box
              position="relative"
              width="100%"
              height={{ base: '40%', lg: '50%' }}
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
              height="60%"
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
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          height={{ base: '120vh', md: '160vh', lg: '40vh', xl: '50vh' }}
          width={['100%', '100%', '70%', '100%']}
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Box
            position="relative"
            width={{ base: '100%', lg: '35%' }}
            height={{ base: '67%', md: '65%', lg: '100%', xl: '100%' }}
            transition="0.5s"
            rounded="sm"
            boxShadow="0 0px 35px -5px #152238"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0px 35px 2px #233860',
            }}
          >
            <Image
              src="/heazy-poster.jpg"
              layout="fill"
              objectFit="cover"
              alt="heazy-svg-generator-inspiration"
            ></Image>
          </Box>
          <Box
            position="relative"
            width={{ base: '100%', lg: '65%' }}
            height={{ base: '33%', md: '35%', lg: '100%', xl: '100%' }}
            transition="0.5s"
            rounded="sm"
            boxShadow="0 0px 35px -5px #152238"
            _hover={{
              transform: 'scale(1.05)',
              boxShadow: '0 0px 35px 2px #233860',
            }}
          >
            <Image
              src="/heazy-life.jpg"
              layout="fill"
              objectFit="cover"
              alt="heazy-svg-generator-inspiration"
            ></Image>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Inspirations;
