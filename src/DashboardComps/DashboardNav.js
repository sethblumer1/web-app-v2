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

import {
  Fa,
  FaDatabase,
  FaHome,
  FaInfoCircle,
  FaRegChartBar,
  FaGraduationCap,
} from 'react-icons/fa';

import './dashboard-styles.css';

function DashboardNav() {
  return (
    <>
      {/* Column 1 with black background */}
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="white"
        color="black"
      >
        <Flex flexDir="column" justifyContent="space-between">
          {/* Logo / name container; can use "as" property to set div to any tag we want */}
          <Flex flexDir="column" as="nav" alignItems="center">
            <Heading mt={50} mb={100}>
              <Image src="https://i.ibb.co/xsGwZCt/2-1.png" />
            </Heading>
            {/* tabs on side */}
            <Flex flexDir="column" align="flex-start">
              {/* HOME ICON */}
              <Flex className="sidebar-items">
                <Link>
                  <Icon
                    as={FaHome}
                    fontSize="2xl"
                    className="active-icon"
                  ></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text className="active">Home</Text>
                </Link>
              </Flex>
              {/* DATA ICON */}
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FaGraduationCap} fontSize="2xl"></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text>Students</Text>
                </Link>
              </Flex>

              {/* CHARTS ICON */}
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FaRegChartBar} fontSize="2xl"></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text>Grades</Text>
                </Link>
              </Flex>
              {/* ABOUT ICON */}
              <Flex className="sidebar-items">
                <Link>
                  <Icon as={FaInfoCircle} fontSize="2xl"></Icon>
                </Link>
                <Link _hover={{ textDecor: 'none' }}>
                  <Text>About</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default DashboardNav;
