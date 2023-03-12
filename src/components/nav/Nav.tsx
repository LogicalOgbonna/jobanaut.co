import { Flex, HStack } from '@chakra-ui/react';
import { navItems } from '../../store';
import { globalStyles } from '../../styles';
import { Logo } from './Logo';
import { NavItem } from './NavItem';

export const Nav = () => {
  const renderNav = navItems.map((nav) => <NavItem key={nav.id} {...nav} />);

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

        <Flex align='center' gap='12'>
          {renderNav}
        </Flex>
      </HStack>
    </Flex>
  );
};
