import { Flex, Button, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import { useTranslation } from 'next-i18next';

export interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = () => {
  const { t } = useTranslation('hero');
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex direction="column">
      <Navbar />

      <Flex
        gap={50}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          minHeight="75vh"
          direction="column"
          textAlign="center"
          justifyContent="center"
          alignItems="center"
          gap="20px"
        >
          <Heading fontWeight="800" fontSize={{ base: '3em', lg: '4em' }}>
            {t('title1')}
            <br />
            {t('title2')}
            <span
              style={{
                backgroundImage: 'linear-gradient(207deg,#00c58d 23%,#05f 87%)',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
              }}
            >
              {t('title3')}
            </span>
          </Heading>
          <Flex direction="column" alignItems="center" gap="5px">
            <Flex gap="10px" direction={isMobile ? 'column' : 'row'}>
              <Button
                as="a"
                href={
                  process.env.NEXT_PUBLIC_APP_URL ||
                  'https://app.heazystudio.com/'
                }
                rounded="full"
                size="lg"
                _hover={{
                  bg: '#05f',
                  color: 'white',
                  transform: 'scale(1.05)',
                }}
              >
                {t('leftButton')}
              </Button>
              <Button
                as="a"
                href="https://www.youtube.com/watch?v=58rATWqcFxo"
                rounded="full"
                size="lg"
                variant="outline"
                _hover={{
                  bg: '#ffffff40',
                  color: 'white',
                  transform: 'scale(1.05)',
                }}
              >
                {t('rightButton')}
              </Button>
            </Flex>
            <Text opacity={0.5}>{t('buttonInfo')}</Text>
          </Flex>
        </Flex>
        <Flex mb="10em" justifyContent="center" alignItems="flex-start">
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
