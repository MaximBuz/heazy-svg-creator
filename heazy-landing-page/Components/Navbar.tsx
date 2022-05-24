import { Flex, UnorderedList, ListItem, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/Logo.svg';

export interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="80px"
      mt={{base: "10px", md:"20px"}}
      mr=" auto"
      ml=" auto"
    >
      <Image src={Logo} alt="heazy svg creator logo" width="35px" height="35px" />
      <UnorderedList display="flex" alignItems="center" justifyContent="center" gap="40px">
        <ListItem
          as="a"
          href="#features"
          fontSize="lg"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          Features
        </ListItem>
        <ListItem
          as="a"
          fontSize="lg"
          href="#inspirations"
          listStyleType="none"
          cursor="pointer"
          transition="0.3s"
          _hover={{ color: 'white', transform: 'scale(1.05)' }}
        >
          Inspirations
        </ListItem>
        <Button
          display={{base: "none", sm: "flex"}}
          as="a"
          href="https://app.heazy.studio/"
          rounded="full"
          _hover={{ bg: '#05f', color: 'white', transform: 'scale(1.05)' }}
        >
          Try it out!
        </Button>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
