import React from 'react';
import Home from './HomeComps/Home';
import UploadClass from './UploadComps/UploadClass';
import { extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const theme = extendTheme({
  colors: {
    blue: {
      50: '#E6EEFF',
      100: '#B8D0FE',
      200: '#8BB3FE',
      300: '#5D95FD',
      400: '#3077FD',
      500: '#0259FD',
      600: '#0247CA',
      700: '#013598',
      800: '#012365',
      900: '#001233',
    },
    cyan: {
      50: '#E7F4FD',
      100: '#BCE1FA',
      200: '#92CEF7',
      300: '#67BBF4',
      400: '#3CA7F1',
      500: '#1194EE',
      600: '#0E77BE',
      700: '#0A598F',
      800: '#073B5F',
      900: '#031E30',
    },
    yellow: {
      50: '#FCF8E8',
      100: '#F7EBC0',
      200: '#F2DF97',
      300: '#EDD26E',
      400: '#E8C645',
      500: '#E3B91C',
      600: '#B59417',
      700: '#886F11',
      800: '#5B4A0B',
      900: '#2D2506',
    },
  },
  styles: {
    global: {
      _focus: {
        boxShadow: 'none !important',
      },
      // styles for the `body`
      body: {
        bg: '#F6F6FF',
        color: 'black',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/upload-info" element={<UploadClass />} />
          {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
        <Home />
      </Router>
    </ChakraProvider>
  );
}

export default App;
