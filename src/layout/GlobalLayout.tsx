import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Footer, Nav } from '../components';
import { globalStyles } from '../styles';

export const GlobalLayout = () => {
  return (
    <Flex
      w={globalStyles.fullWidth}
      minH={globalStyles.fullHeight}
      bg={globalStyles.primaryColor}
      direction='column'
      position='relative'
    >
      <Nav />
      <Outlet />
      <Footer />
    </Flex>
  );
};
