import { ChevronLeftIcon } from '@chakra-ui/icons';
import { chakra, Circle, Divider, Flex, Heading, Icon, Stack, useDisclosure } from '@chakra-ui/react';
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import Login from './Login';
import Registration from './Registration';
import UserSpace from './UserSpace';

export interface IUserMenuProps {}

const UserMenu: React.FunctionComponent<IUserMenuProps> = (props) => {
  const { currentUser } = useAuth();

  const { isOpen: userSpaceIsOpen, onOpen: openUserSpace, onClose: closeUserSpace } = useDisclosure();
  const [registrationMode, setRegistrationMode] = useState(false);
  // Drawer with Framer Motion
  const UserSection = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

  return (
    <>
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

            {currentUser ? (
              <UserSpace/>
            ) : registrationMode ? (
              <Registration setRegistrationMode={setRegistrationMode} />
            ) : (
              <Login setRegistrationMode={setRegistrationMode} />
            )}
          </UserSection>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserMenu;
