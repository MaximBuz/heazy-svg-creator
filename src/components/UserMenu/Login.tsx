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
} from '@chakra-ui/react';
import { RaceBy } from '@uiball/loaders';
import React, { Dispatch, useState } from 'react';
import { useAuth } from '../../contexts/Auth';
import LoginImg from '../../assets/Login.svg';

export interface ILoginProps {
  setRegistrationMode: Dispatch<boolean>;
}

const Login: React.FunctionComponent<ILoginProps> = ({ setRegistrationMode }) => {
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      .catch(() => setError('Could not login!'))
      .finally(() => setLoading(false));
  }

  return (
    <Flex direction="column" mt="1em" textAlign="center" gap="10px" height="90%" justifyContent="center">
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
    </Flex>
  );
};

export default Login;
