import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { Dispatch, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Register from '../../assets/Register.svg';
import { RaceBy } from '@uiball/loaders';

export interface IRegistrationProps {
  setRegistrationMode: Dispatch<boolean>;
}

const Registration: React.FunctionComponent<IRegistrationProps> = ({
  setRegistrationMode,
}) => {
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleRegistration(e) {
    e.preventDefault();
    const email = e.target['registration-email'].value;
    const password = e.target['registration-pw'].value;
    const userName = e.target['registration-userName'].value;
    const confirmPassword = e.target['registration-pw-confirm'].value;

    if (password === confirmPassword) {
      setLoading(true);
      signup(email, password, userName)
        .then(() => {
          setError('');
          setLoading(false);
        })
        .catch(() => setError('Could not register!'))
        .finally(() => setLoading(false));
    } else {
      setError('Passwords do not match!');
    }
  }
  return (
    <Flex
      direction="column"
      mt="1em"
      textAlign="center"
      gap="10px"
      height="90%"
      justifyContent="center"
      p="5"
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
          <Input
            name="registration-userName"
            mt={5}
            placeholder="Username"
            type="text"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <Input
            mt="10px"
            name="registration-email"
            placeholder="Email"
            type="email"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <Input
            mt="10px"
            name="registration-pw"
            placeholder="Password"
            type="password"
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <Input
            mt="10px"
            name="registration-pw-confirm"
            placeholder="Repeat your password"
            type="password"
          ></Input>
        </FormControl>
        <Button
          isLoading={loading}
          spinner={
            <RaceBy size={150} lineWeight={5} speed={1.4} color="white" />
          }
          width="100%"
          type="submit"
          mt={5}
        >
          Register
        </Button>
      </form>
      {error && (
        <Alert rounded="md" status="error">
          <AlertIcon />
          <Text fontSize="xs">{String(error)}</Text>
        </Alert>
      )}
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
  );
};

export default Registration;
