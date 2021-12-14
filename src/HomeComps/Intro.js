import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
// For get started button
import GetStarted from './GetStarted';
// For learn more button
import ReactPlayer from 'react-player';

export default function Intro() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // For handling both intro options for the user / routing
  const [buttonIdx, setButtonIdx] = useState(-1);
  const handleIntroClick = idx => {
    setButtonIdx(idx);
    onOpen();
  };
  const idxs = [0, 1];

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        // bgColor={'yellow.400'}
        backgroundImage="linear-gradient(180deg, #A1D3F5, #0248CD)"
      >
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
              color={'white'}
            >
              Course management
            </Text>
            <br />{' '}
            <Text color={'black'} as={'span'}>
              made easy.
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
            Enable your students' futures by seamlessly providing Career
            Technical Education (CTE) level classes with our software.
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {idxs.map(idx => (
              <>
                {idx === 0 ? (
                  <Button
                    onClick={() => handleIntroClick(idx)}
                    key={idx}
                    m={2}
                    bgColor={'yellow.400'}
                    _hover={{ bg: 'yellow.200' }}
                  >
                    {'Get started'}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleIntroClick(idx)}
                    key={idx}
                    m={2}
                    color={'white'}
                    bgColor={'black'}
                    _hover={{ bg: 'gray.700' }}
                  >
                    {'Learn more'}
                  </Button>
                )}
              </>
            ))}

            <Modal onClose={onClose} isOpen={isOpen} size={'lg'} isCentered>
              <ModalOverlay />
              <Flex>
                <ModalContent bg={'transparent'} boxShadow={'none'}>
                  {buttonIdx === 0 ? (
                    <GetStarted />
                  ) : (
                    <ReactPlayer url="https://www.youtube.com/watch?v=_ckpXsD3OIc" />
                  )}
                </ModalContent>
              </Flex>
            </Modal>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={'https://i.ibb.co/6bF8HZJ/Logic-Ed-logo-color-1.png'}
        />
      </Flex>
    </Stack>
  );
}

{
  /* <Button
              rounded={'full'}
              bg={'yellow.400'}
              color={'white'}
              _hover={{
                bg: 'yellow.500',
              }}
            >
              Get started
            </Button>
            <Button
              rounded={'full'}
              bg={'gray.50'}
              color={'black'}
              _hover={{
                bg: 'gray.300',
              }}
            >
              How It Works
            </Button> */
}
