import {
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Logo from '../public/Logo.svg';
import OverviewBG from '../public/overview-bg.png';

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: 'Karla, sans-serif', color: '#c5cfd9' }}>
      <Head>
        <title>Heazy - SVG Studio</title>
        <meta name="description" content="Generate unique SVG design assets with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          padding: '0 10em',
          backgroundPosition: 'top',
          backgroundImage:
            'linear-gradient(180deg,rgb(18, 22, 29,0) 7%,rgb(18, 22, 29,0) 20%),radial-gradient(circle farthest-side at -25% 150%,#1A202C 48%,rgb(18, 22, 29,0) 65%),radial-gradient(circle farthest-corner at -25% -125%,rgb(18, 22, 29,0) 50%,rgb(18, 22, 29) 70%,rgb(18, 22, 29,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(18, 22, 29) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#007252 50%,rgb(18, 22, 29,0) 72%),radial-gradient(circle farthest-corner at 50% -100%,#05f 26%,rgb(18, 22, 29,0) 72%);',
        }}
      >
        {/*-------- HERO SECTION --------*/}
        <Flex height="100vh" direction="column">
          {/* NAVBAR */}
          <Flex
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            height="80px"
            mt="20px"
            mr=" auto"
            ml=" auto"
          >
            <Image src={Logo} alt="heazy svg creator logo" width="35px" height="35px" />
            <UnorderedList display="flex" alignItems="center" justifyContent="center" gap="40px">
              <ListItem fontSize="lg" listStyleType="none">
                Features
              </ListItem>
              <ListItem fontSize="lg" listStyleType="none">
                Inspirations
              </ListItem>
              <ListItem fontSize="lg" listStyleType="none">
                Designs
              </ListItem>
              <Button rounded="full" _hover={{ bg: '#05f', color: 'white' }}>
                Try it out!
              </Button>
            </UnorderedList>
          </Flex>

          {/* HERO TITLE */}
          <Flex mt="-80px" height="100%" justifyContent="space-between" alignItems="center" wrap="wrap">
            <Flex direction="column" gap="20px">
              <Heading fontWeight="700" fontSize="3em">
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
                  design <br /> time.
                </span>
              </Heading>
              <Flex alignItems="center" gap="15px">
                <Button rounded="full" size="lg" _hover={{ bg: '#05f', color: 'white' }}>
                  Start Designing
                </Button>
                <Text>
                  Free for ever. <br /> No signup required.
                </Text>
              </Flex>
            </Flex>

            <video
              playsInline
              autoPlay
              loop
              muted
              width="55%"
              height="auto"
              style={{
                borderRadius: '10px',
                boxShadow: 'rgb(0 0 0 / 20%) 0px 4px 20px;',
              }}
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </Flex>
        </Flex>

        {/*-------- FEATURES SECTION --------*/}
        <Flex
          backgroundImage={` url('${OverviewBG.src}')`}
          backgroundRepeat="no-repeat"
          backgroundPosition="bottom"
          backgroundSize="contain"
          mt="10"
          direction="column"
          width="100%"
          justifyContent="flex-start"
          textAlign="center"
          gap="50px"
        >
          <HStack ml="auto" mr="auto">
            <Divider width="20vw" />
            <Text fontSize=".625em" fontWeight="600" letterSpacing=".2em" textTransform="uppercase">
              Features
            </Text>
            <Divider width="20vw" />
          </HStack>
          <Heading fontWeight="700" fontSize="3em">
            Heazy is easy.
            <br />
            Unique vector assets within seconds.
          </Heading>

          {/* FEATURE TILES */}
          <Flex flexWrap="wrap" gap="35px" justifyContent="center" alignItems="center">
            <Flex
              borderRadius="8px"
              maxWidth="288px"
              padding="30px 20px 30px 20px"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              gap="15px"
              textAlign="center"
              boxShadow="inset 0 0 0 1px #2f363d, 0 4px 8px -4px #0d1117"
              backgroundColor="#20262d73"
              backdropFilter="blur(1px)"
              transition="0.3s"
              _hover={{backdropFilter:"blur(5px)", bg: '#0055ff12', boxShadow: 'inset 0 0 0 1px #243546, 0 4px 8px -4px #0d1117' }}
            >
              <Image src="/resize-icon.svg" width="50px" height="50px" alt="SVG Resizing Icon"></Image>
              <Text>
                Heazy let&apos;s you create beautiful vector visuals that can be re-sized to any resolution
                without loosing quality.
              </Text>
            </Flex>
            <Flex
              borderRadius="8px"
              maxWidth="288px"
              padding="30px 20px 30px 20px"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              gap="15px"
              textAlign="center"
              boxShadow="inset 0 0 0 1px #2f363d, 0 4px 8px -4px #0d1117"
              backgroundColor="#20262d73"
              backdropFilter="blur(1px)"
              transition="0.3s"
              _hover={{backdropFilter:"blur(5px)", bg: '#0055ff12', boxShadow: 'inset 0 0 0 1px #243546, 0 4px 8px -4px #0d1117' }}
            >
              <Image src="/export-icon.svg" width="50px" height="50px" alt="SVG Resizing Icon"></Image>
              <Text>
                Export your creations to SVG and PNG or easily copy JavaScript and TypeScript React snippets to your clipboard.
              </Text>
            </Flex>
            <Flex flexWrap="wrap" gap="35px" justifyContent="center" alignItems="center">
              <Flex
                borderRadius="8px"
                maxWidth="288px"
                padding="30px 20px 30px 20px"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                gap="15px"
                textAlign="center"
                boxShadow="inset 0 0 0 1px #2f363d, 0 4px 8px -4px #0d1117"
                backgroundColor="#20262d73"
                backdropFilter="blur(1px)"
                transition="0.3s"
                _hover={{backdropFilter:"blur(5px)", bg: '#0055ff12', boxShadow: 'inset 0 0 0 1px #243546, 0 4px 8px -4px #0d1117' }}
              >
                <Image src="/sliders-icon.svg" width="50px" height="50px" alt="SVG Resizing Icon"></Image>
                <Text>
                  Heazy prides itself in having some of the most customizable templates on the web. Always create stunningly unique visuals.
                </Text>
              </Flex>
              <Flex
                borderRadius="8px"
                maxWidth="288px"
                padding="30px 20px 30px 20px"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="15px"
                textAlign="center"
                boxShadow="inset 0 0 0 1px #2f363d, 0 4px 8px -4px #0d1117"
                backgroundColor="#20262d73"
                backdropFilter="blur(1px)"
                transition="0.3s"
                _hover={{backdropFilter:"blur(5px)", bg: '#0055ff12', boxShadow: 'inset 0 0 0 1px #243546, 0 4px 8px -4px #0d1117' }}
              >
                <Image src="/inspiration-icon.svg" width="50px" height="50px" alt="SVG Resizing Icon"></Image>
                <Text>
                  Never struggle with finding ideas again. Click through the templates and options, and be sure to always create something beautiful.
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
