import React from 'react';
import ReactDOM from 'react-dom';
import DashboardBody from './DashboardBody';
import DashboardNav from './DashboardNav';
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

function Dashboard() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden">
      {/* Column 1 with black background */}
      <DashboardNav />
      <DashboardBody />
    </Flex>
  );
}

export default Dashboard;
