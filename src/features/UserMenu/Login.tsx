import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  Alert,
  AlertIcon,
  Text,
  Image,
  HStack,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger as OrigPopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';

import { RaceBy } from '@uiball/loaders';
import React, { Dispatch, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import LoginImg from '../../assets/Login.svg';
import { CloseIcon } from '@chakra-ui/icons';

const PopoverTrigger: React.FC<{ children: React.ReactNode }> = OrigPopoverTrigger;

export interface ILoginProps {
  setRegistrationMode: Dispatch<boolean>;
}

const Login: React.FunctionComponent<ILoginProps> = ({ setRegistrationMode }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, resetPassword: resetPw } = useAuth();
  const { onOpen: openPwReset, onClose: closePwReset, isOpen: pwResetIsOpen } = useDisclosure();
  const [resetPwEmail, setResetPwEmail] = useState<string>();

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target['login-email'].value;
    const password = e.target['login-pw'].value;
    setLoading(true);
    login(email, password)
      .then(() => {
        setError('');
        setLoading(false);
      })
      .catch(() => setError('Incorrect credentials!'))
      .finally(() => setLoading(false));
  }

  return (
    <Flex
      p="5"
      direction="column"
      mt="1em"
      textAlign="center"
      gap="10px"
      height="80%"
      justifyContent="center"
    >
      <Image src={LoginImg} h="20%"></Image>
      <Box mt="1em">
        <Heading as="h4" size="md" fontWeight={800}>
          Welcome Back.{' '}
        </Heading>
        <Heading as="h5" size="md" fontWeight={300}>
          You've been missed!
        </Heading>
      </Box>
      <form onSubmit={handleLogin}>
        <FormControl isRequired>
          <Input name="login-email" mt={5} placeholder="Email" type="email"></Input>
        </FormControl>
        <FormControl isRequired>
          <Input mt="10px" name="login-pw" placeholder="Password" type="password"></Input>
        </FormControl>
        <Button
          isLoading={loading}
          spinner={<RaceBy size={150} lineWeight={5} speed={1.4} color="white" />}
          width="100%"
          type="submit"
          mt={5}
        >
          Sign in
        </Button>
      </form>
      {error && (
        <Alert rounded="md" status="error">
          <AlertIcon />
          <Text fontSize="xs">{error}</Text>
        </Alert>
      )}
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

      <Popover isLazy isOpen={pwResetIsOpen} placement="left">
        <PopoverTrigger>
          <Text color="#ffffff81" fontSize="xs">
            <Text _hover={{ cursor: 'pointer' }} color="#ffffffcd" display="inline">
              Forgot your password?
            </Text>
          </Text>
        </PopoverTrigger>
        <PopoverContent p={5} bgColor="#2D3748" border="none" _focus={{ boxShadow: 'none' }}>
          <PopoverArrow bgColor="#2D3748" />
          <HStack spacing={4}>
            <CloseIcon
              as="button"
              onClick={openPwReset}
              cursor="pointer"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            ></CloseIcon>
            <FormControl>
              <Input
                placeholder="Template name"
                type="email"
                onChange={(e) => setResetPwEmail(e.target.value)}
                id="templateName"
              />
            </FormControl>
            <Button
              colorScheme="blue"
              onClick={() => {
                resetPw(resetPwEmail);
              }}
            >
              Send
            </Button>
          </HStack>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default Login;
