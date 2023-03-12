import { Flex, HStack } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { Logo } from './Logo';

export const Nav = () => {
  return (
    <Flex
      w={globalStyles.fullWidth}
      minH='100px'
      bg={globalStyles.primaryDarkColor}
      align='center'
      justify='center'
    >
      <HStack
        w={globalStyles.containerWidth}
        bg='transparent'
        justify='space-between'
      >
        <Logo />
      </HStack>
    </Flex>
  );
};
