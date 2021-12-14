import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Select,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function AboutYou() {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'transparent'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={'white'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        textAlign={'center'}
      >
        {/* <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Complete User Profile
        </Heading> */}
        <FormControl id="userName">
          <FormLabel>User Pic</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="lg">
                {/* <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                /> */}
              </Avatar>
            </Center>
            <Center w="full">
              <Button
                w="full"
                bgColor={'green.400'}
                color="white"
                _hover={{
                  bgColor: 'green.500',
                }}
              >
                Change Pic
              </Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Level of education</FormLabel>
          <Select
            placeholder="High school"
            outline="2px solid #ededed"
            bg="white"
            borderColor="white"
          >
            <option value="Elementary school">Elementary school</option>
            <option value="Middle school">Middle school</option>
            <option value="College">College</option>
          </Select>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Name of school</FormLabel>
          <Input
            placeholder="e.g. Bayside High School"
            _placeholder={{ color: 'gray.400' }}
            type="text"
            outline="2px solid #ededed"
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Phone number</FormLabel>
          <Input
            placeholder="+1 (___) __-___-___"
            _placeholder={{ color: 'gray.400' }}
            type="text"
            outline="2px solid #ededed"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
          >
            Clear All
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
