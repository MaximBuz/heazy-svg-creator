import React, { Dispatch, memo, SetStateAction, useState } from 'react';

// Design
import {
  Flex,
  Stack,
  Image,
  Heading,
  Button,
  useDisclosure,
  chakra,
  Icon,
  Box,
  Text,
  Circle,
  Divider,
  Input,
  FormControl,
} from '@chakra-ui/react';
import stackedWave from '../../assets/Thumbnails/stackedWaves.svg';
import smoothStage from '../../assets/Thumbnails/smoothStage.svg';
import marker from '../../assets/Thumbnails/marker.svg';
import bubble from '../../assets/Thumbnails/bubble.svg';
import Logo from '../../assets/Logo.svg';
import Login from '../../assets/Login.svg';
import Register from '../../assets/Register.svg';
import GitHubButton from 'react-github-btn';

// Utils
import Thumbnail from './Thumbnail';
import { IDesignModes } from '../Canvas/Types/designModes';
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';
import { ChevronLeftIcon } from '@chakra-ui/icons';

// Firebase
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export interface ITemplateMenuProps {
  setDesign: Dispatch<SetStateAction<IDesignModes>>;
  activeDesign: string;
}

const TemplateMenu: React.FunctionComponent<ITemplateMenuProps> = memo(({ activeDesign, setDesign }) => {
  const { isOpen: userSpaceIsOpen, onOpen: openUserSpace, onClose: closeUserSpace } = useDisclosure();

  /* Registration */
  const [registrationMode, setRegistrationMode] = useState(false);

  function handleRegistration(e) {
    e.preventDefault();

    const auth = getAuth();
    const email = e.target['registration-email'].value;
    const password = e.target['registration-pw'].value;
    const confirmPassword = e.target['registration-pw-confirm'].value;

    password === confirmPassword &&
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Handle Sign In Context!
          const user = userCredential.user;
          e.target.reset();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
  }

  // Drawer with Framer Motion
  const UserSection = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

  return (
    <>
      <Flex
        minW="180px"
        maxW="180px"
        height="100vh"
        bgColor="#1c1f27"
        direction="column"
        boxShadow="dark-lg"
        p="0"
        h="100%"
        zIndex={2}
      >
        <Flex
          minW="180px"
          maxW="180px"
          height="70px"
          zIndex={2}
          bgColor="#262a33"
          justifyContent="space-around"
          alignItems="center"
        >
          <Image src={Logo} h="50%"></Image>
        </Flex>
        <Stack
          spacing={0}
          scrollBehavior="smooth"
          overflow="scroll"
          flexGrow={1}
          sx={{
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Thumbnail
            isActive={activeDesign === 'waves'}
            setDesign={setDesign}
            image={stackedWave}
            caption="waves"
          ></Thumbnail>
          <Thumbnail
            isActive={activeDesign === 'bubble'}
            setDesign={setDesign}
            image={bubble}
            caption="bubble"
          ></Thumbnail>
          <Thumbnail
            isActive={activeDesign === 'corners'}
            setDesign={setDesign}
            image={smoothStage}
            caption="corners"
          ></Thumbnail>
          <Thumbnail
            isActive={activeDesign === 'marker'}
            setDesign={setDesign}
            image={marker}
            caption="marker"
          ></Thumbnail>
        </Stack>

        <Flex
          minW="180px"
          maxW="180px"
          height="70px"
          minH="70px"
          zIndex={2}
          bgColor="#262a33"
          justifyContent="space-around"
          alignItems="center"
          direction="column"
        >
          <Heading lineHeight="1em" fontWeight="lighter" fontSize="2xl" fontFamily="Karla, sans-serif;">
            HEAZY.
          </Heading>
          {/* <Icon as={UilLinkedin} boxSize="8" cursor="pointer"></Icon> */}
          <GitHubButton
            href="https://github.com/MaximBuz/heazy-svg-creator"
            data-color-scheme="no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;"
            data-size="small"
            data-show-count="true"
            aria-label="Star MaximBuz/heazy-svg-creator on GitHub"
          >
            Star
          </GitHubButton>
        </Flex>
      </Flex>

      {/* USER SPACE DRAWER */}
      <Flex
        pos="absolute"
        top="18px"
        width="215px"
        onClick={openUserSpace}
        transition="0.3s"
        _hover={{ width: '335px', background: '#373d48', cursor: 'pointer' }}
        roundedBottomRight="full"
        roundedTopRight="full"
        justifyContent="flex-end"
        alignItems="center"
        bg="#262e3a"
        fill="none"
        p="2"
        gap="10px"
      >
        <Heading as="h4" size="xs">
          Personal Space
        </Heading>
        <Icon boxSize="5" viewBox="0 0 24 24" fill="white" opacity={0.9}>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M12,2A10,10,0,0,0,4.65,18.76h0a10,10,0,0,0,14.7,0h0A10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-5.55-2.25,6,6,0,0,1,11.1,0A8,8,0,0,1,12,20ZM10,10a2,2,0,1,1,2,2A2,2,0,0,1,10,10Zm8.91,6A8,8,0,0,0,15,12.62a4,4,0,1,0-6,0A8,8,0,0,0,5.09,16,7.92,7.92,0,0,1,4,12a8,8,0,0,1,16,0A7.92,7.92,0,0,1,18.91,16Z"
          />
        </Icon>
      </Flex>
      <AnimatePresence>
        {userSpaceIsOpen && (
          <UserSection
            position="absolute"
            as={motion.div}
            minW="250px"
            maxW="250px"
            height="100vh"
            bgColor="#1c1f27"
            direction="column"
            boxShadow="dark-lg"
            p={5}
            h="100%"
            zIndex={1}
            initial={{ left: 0 }}
            animate={{ left: '180px' }}
            exit={{ left: '-85px' }}
            //@ts-expect-error
            transition={{
              duration: 0.4,
              type: 'spring',
              bounce: 0,
            }}
          >
            {/* HEADING */}
            <Stack spacing={2.5}>
              <Flex alignItems="center" justifyContent="center">
                <Circle
                  as="button"
                  onClick={closeUserSpace}
                  padding={1}
                  _hover={{ background: '#2e3643', cursor: 'pointer' }}
                  position="absolute"
                  left="5"
                  rounded="full"
                  centerContent
                >
                  <ChevronLeftIcon onClick={closeUserSpace} />
                </Circle>
                <Heading as="h3" size="xs" textTransform="uppercase" textAlign="center">
                  Personal Space
                </Heading>
              </Flex>
              <Divider></Divider>
            </Stack>

            {/* LOGGED IN? */}
            {registrationMode ? (
              <Flex
                direction="column"
                mt="1em"
                textAlign="center"
                gap="10px"
                height="90%"
                justifyContent="center"
              >
                <Image src={Register} h="20%"></Image>
                <Box mt="1em">
                  <Heading as="h4" size="md" fontWeight={800}>
                    Let's sign up
                  </Heading>
                  <Heading as="h5" size="md" fontWeight={300}>
                    Welcome to heazy!
                  </Heading>
                </Box>
                <form onSubmit={handleRegistration}>
                  <FormControl isRequired>
                    <Input name="registration-email" mt={5} placeholder="Email" type="email"></Input>
                  </FormControl>
                  <FormControl isRequired>
                    <Input mt="10px" name="registration-pw" placeholder="Password" type="password"></Input>
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                      mt="10px"
                      name="registration-pw-confirm"
                      placeholder="Repeat your password"
                      type="password"
                    ></Input>
                  </FormControl>
                  <Button width="100%" type="submit" mt={5}>
                    Register
                  </Button>
                </form>
                <Text color="#ffffff81" fontSize="xs">
                  Already have an account?{' '}
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => setRegistrationMode(false)}
                    color="#ffffffcd"
                    display="inline"
                  >
                    Sign in
                  </Text>
                </Text>
              </Flex>
            ) : (
              <Flex
                direction="column"
                mt="1em"
                textAlign="center"
                gap="10px"
                height="90%"
                justifyContent="center"
              >
                <Image src={Login} h="20%"></Image>
                <Box mt="1em">
                  <Heading as="h4" size="md" fontWeight={800}>
                    Welcome Back.{' '}
                  </Heading>
                  <Heading as="h5" size="md" fontWeight={300}>
                    You've been missed!
                  </Heading>
                </Box>
                <Input mt={5} placeholder="Email" type="email"></Input>
                <Input placeholder="Password" type="password"></Input>
                <Button mt={5}>Sign In</Button>
                <Text color="#ffffff81" fontSize="xs">
                  Don't have an account?{' '}
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => setRegistrationMode(true)}
                    color="#ffffffcd"
                    display="inline"
                  >
                    Register
                  </Text>
                </Text>
              </Flex>
            )}
          </UserSection>
        )}
      </AnimatePresence>
    </>
  );
});

export default TemplateMenu;
