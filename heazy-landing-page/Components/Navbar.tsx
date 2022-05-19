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
        <Button
          as="a"
          href="https://app.heazy.studio/"
          rounded="full"
          _hover={{ bg: '#05f', color: 'white' }}
        >
          Try it out!
        </Button>
      </UnorderedList>
    </Flex>
  );
};

export default Navbar;
