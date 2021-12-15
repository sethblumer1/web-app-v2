import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Heading,
  Image,
  Icon,
  IconButton,
  StackDivider,
  HStack,
} from '@chakra-ui/react';
function DashboardBody() {
  return (
    <Flex
      w="85%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      backgroundImage="linear-gradient(180deg, #A1D3F5, #0248CD)"
    >
      <h1>hello world</h1>
    </Flex>
  );
}

export default DashboardBody;
