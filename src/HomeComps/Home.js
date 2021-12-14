import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import GetStarted from './GetStarted';
import UploadClass from '../UploadComps/UploadClass';
import Intro from './Intro';

function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Intro></Intro>
    </Box>
  );
}

export default Home;
