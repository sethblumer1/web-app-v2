import React, { useState } from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Button,
  Progress,
  CircularProgress,
  CircularProgressLabel,
  Tooltip,
  IconButton,
  Link,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcUpload,
  FcInfo,
  FcReading,
} from 'react-icons/fc';
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons';
// About you functionality
import AboutYou from './AboutYouForm';
// Courses taught functionality
import CoursesTaughtForm from './CoursesTaughtForm';
import { useDisclosure } from '@chakra-ui/hooks';

const Feature = ({ title, text, icon }) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={10}
      //   backgroundImage="linear-gradient(180deg, #A1D3F5, #34A7F5)"
      bgColor={'white'}
      boxShadow={'lg'}
      borderRadius={'lg'}
      w={310}
      h={310}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text>{text}</Text>
    </Flex>
  );
};

export default function UploadClass() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // For handling both icon options for user sign up
  const [iconIdx, setIconIdx] = useState(-1);
  const handleIconClick = idx => {
    setIconIdx(idx);
    console.log(idx);
    onOpen();
  };
  const idxs = [0, 1, 2];

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'100vh'}
      backgroundImage="linear-gradient(180deg, #A1D3F5, #34A7F5)"
      backgroundImage="linear-gradient(180deg, #A1D3F5, #0248CD)"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={20}>
        {idxs.map(idx => (
          <Tooltip
            label="Click on the icon to complete!"
            shouldWrapChildren
            fontSize="20px"
            bgColor="transparent"
            placement="top"
            color="white"
            boxShadow="none"
            tabIndex="0"
          >
            {idx === 0 ? (
              <Feature
                icon={
                  <Button onClick={() => handleIconClick(idx)} key={idx}>
                    <Icon as={FcInfo} w={10} h={10} />
                  </Button>
                }
                title={'Your Profile'}
                text={
                  'Provide us with more information about you to complete your profile.'
                }
              />
            ) : idx === 1 ? (
              <Feature
                icon={
                  <Button onClick={() => handleIconClick(idx)} key={idx}>
                    <Icon as={FcReading} w={10} h={10} />
                  </Button>
                }
                title={'Your Courses'}
                text={
                  'Enter the CTE courses you teach to allow for platform customization.'
                }
              />
            ) : (
              <Feature
                icon={
                  <Button onClick={() => handleIconClick(idx)} key={idx}>
                    <Icon as={FcUpload} w={10} h={10} />
                  </Button>
                }
                title={'Your Students'}
                text={
                  "Upload an Excel file with your students' names; we'll take care of the rest."
                }
              />
            )}
          </Tooltip>
        ))}

        <Modal onClose={onClose} isOpen={isOpen} size={'xl'} isCentered>
          <ModalOverlay />
          <Flex>
            <ModalContent bg={'transparent'} boxShadow={'none'}>
              {iconIdx === 0 ? (
                <AboutYou></AboutYou>
              ) : iconIdx === 1 ? (
                <CoursesTaughtForm />
              ) : (
                <></>
              )}
            </ModalContent>
          </Flex>
        </Modal>
      </SimpleGrid>
      <CircularProgress
        value={100}
        color="green.300"
        size="120px"
        mt={4}
        trackColor="white"
      >
        <CircularProgressLabel color="white">3/3</CircularProgressLabel>
      </CircularProgress>
      <Flex>
        <Link
          _hover={{ textDecoration: 'none' }}
          href="/"
          display="flex"
          justifyContent="center"
          pr={4}
        >
          <Button colorScheme="red" mt={4} variant="solid" h={50}>
            <ChevronLeftIcon ml={2} mt={1} />
            Return to home
          </Button>
        </Link>
        <Link
          _hover={{ textDecoration: 'none' }}
          href="/dashboard"
          display="flex"
          justifyContent="center"
        >
          <Button colorScheme="whatsapp" mt={4} variant="solid" h={50}>
            Continue <ChevronRightIcon ml={2} mt={1} />
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
