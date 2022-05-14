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
import OverviewBG from "../public/overview-bg.png"

const Home: NextPage = () => {
  return (
    <div style={{ fontFamily: 'Karla, sans-serif', color: '#c5cfd9' }}>
      <Head>
        <title>Heazy - SVG Studio</title>
        <meta name="description" content="Generate unique SVG design assets with ease" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/*-------- HERO SECTION --------*/}
        <Flex
          height="100vh"
          backgroundImage="linear-gradient(180deg,rgb(18, 22, 29,0) 7%,rgb(18, 22, 29,0) 20%),radial-gradient(circle farthest-side at -25% 150%,#1A202C 48%,rgb(18, 22, 29,0) 65%),radial-gradient(circle farthest-corner at -25% -125%,rgb(18, 22, 29,0) 50%,rgb(18, 22, 29) 70%,rgb(18, 22, 29,0) 72%),radial-gradient(circle farthest-corner at 0 -50%,rgb(18, 22, 29) 32%,hsla(0,0%,100%,0) 62%),radial-gradient(circle farthest-side at 0 -25%,#007252 50%,rgb(18, 22, 29,0) 72%),radial-gradient(circle farthest-corner at 50% -100%,#05f 26%,rgb(18, 22, 29,0) 72%);"
          direction="column"
          p="0 10em"
        >
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
                Overview
              </ListItem>
              <ListItem fontSize="lg" listStyleType="none">
                Usecases
              </ListItem>
              <ListItem fontSize="lg" listStyleType="none">
                Designs
              </ListItem>
              <Button>Try it out!</Button>
            </UnorderedList>
          </Flex>

          {/* HERO TITLE */}
          <Flex mt="-80px" height="100%" justifyContent="space-between" alignItems="center">
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

        {/*-------- OVERVIEW SECTION --------*/}
        <Flex backgroundImage={` url('${OverviewBG.src}')`} backgroundRepeat="no-repeat" backgroundSize="cover" mt="10" direction="column" width="100%" justifyContent="center" textAlign="center">
          <HStack ml="auto" mr="auto">
            <Divider width="20vw" />
            <Text fontSize=".625em" fontWeight="600" letterSpacing=".2em" textTransform="uppercase">
              Overview
            </Text>
            <Divider width="20vw" />
          </HStack>
          <Heading mt="10" fontWeight="700" fontSize="3em">
            Easy peazy{' '}
              heazy.
            <br />
            Unique vector assets within seconds.
          </Heading>
        </Flex>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
