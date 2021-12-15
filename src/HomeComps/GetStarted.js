import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function GetStarted() {
  const [showPassword, setShowPassword] = useState(false);
  // For future references on other pages
  const [lastName, setLastName] = useState('');
  const handleChange = e => setLastName(e.target.value);

  return (
    <Flex maxH={'60vh'} align={'center'} justify={'center'} bg={'transparent'}>
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
        py={12}
        px={6}
        bg={'transparent'}
      >
        <>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      outline="2px solid #ededed"
                      isRequired
                      placeholder="Enter first name"
                      _placeholder={{ color: 'gray.400' }}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      outline="2px solid #ededed"
                      value={lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      _placeholder={{ color: 'gray.400' }}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  outline="2px solid #ededed"
                  placeholder="your-email@example.com"
                  _placeholder={{ color: 'gray.400' }}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    outline="2px solid #ededed"
                    placeholder="Enter password"
                    _placeholder={{ color: 'gray.400' }}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      onClick={() =>
                        setShowPassword(showPassword => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Link
                  _hover={{ textDecoration: 'none' }}
                  href="/web-app-v2/dashboard/"
                  display="flex"
                  justifyContent="center"
                >
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    <Text>Sign up</Text>
                  </Button>
                </Link>
              </Stack>
              <Stack>
                <Text align={'center'}>
                  Already a user?{' '}
                  <Link color={'blue.400'} href="/web-app-v2/dashboard/">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </>
      </Stack>
    </Flex>
  );
}
