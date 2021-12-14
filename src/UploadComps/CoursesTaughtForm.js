import React from 'react';
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Button,
  Checkbox,
  CheckboxGroup,
  HStack,
  VStack,
  IconButton,
} from '@chakra-ui/react';

import { FaArrowAltCircleRight } from 'react-icons/fa';
function CoursesTaughtForm() {
  const allCourses = [
    'Agriculture & Natural Resources',
    'Arts, Media, & Entertainment',
    'Building & Construction Trades',
    'Business & Finance',
    'Education, Child Development, & Family Services',
    'Energy, Environment, & Utilities',
    'Engineering & Architecture',
    'Fashion & Interior Design',
    'Health Science & Medical Technology',
    'Hospitality, Tourism, & Recreation',
    'Information & Communication Technologies',
    'Manufacturing & Product Development',
    'Marketing, Sales, & Services',
    'Public Services',
    'Transportation',
  ];

  return (
    <Flex
      display="flex"
      flexDirection="column"
      //   spacing={4}
      //   width={'1000px'}
      h={'80vh'}
      bg={'white'}
      rounded={'xl'}
      boxShadow={'lg'}
      //   p={2}
      //   my={12}
      alignItems="center"
      justifyContent="center"
      textAlign={'center'}
      //   style={{
      //     overflowY: 'scroll',
      //   }}
    >
      <CheckboxGroup colorScheme="blue">
        <VStack spacing={1} width="100%">
          {allCourses.map(courseName => (
            <Button size="xs" colorScheme="blue" variant="ghost">
              <Checkbox value={courseName}>{courseName}</Checkbox>
            </Button>
          ))}
        </VStack>
      </CheckboxGroup>

      <Flex justifyContent="center" alignItems="center" width="100%">
        <IconButton
          colorScheme="black"
          icon={<FaArrowAltCircleRight />}
          mt={4}
          variant="ghost"
        ></IconButton>
      </Flex>
    </Flex>
  );
}

export default CoursesTaughtForm;
