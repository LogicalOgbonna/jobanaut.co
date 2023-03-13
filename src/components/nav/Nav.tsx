import { Flex, HStack } from '@chakra-ui/react';
import { navItems } from '../../store';
import { globalStyles } from '../../styles';
import { IconBtn } from '../shared';
import { Logo } from './Logo';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavItem } from './NavItem';
import { useSideBar } from '../../context';
import { SideBar } from './SideBar';

export const Nav = () => {
  const { updateShow } = useSideBar();
  const renderNav = navItems.map((nav) => <NavItem key={nav.id} {...nav} />);

  return (
    <Flex
      w={globalStyles.fullWidth}
      minH={{ base: '70px', lg: '100px' }}
      align='center'
      justify='center'
      bg={globalStyles.primaryDarkColor}
      px={globalStyles.globalPx}
    >
      <HStack
        w={globalStyles.containerWidth}
        bg='transparent'
        justify='space-between'
      >
        <Logo />

        <Flex align='center' gap='12' display={{ base: 'none', xl: 'flex' }}>
          {renderNav}
        </Flex>

        <IconBtn
          icon={
            <HamburgerIcon color={globalStyles.whiteColor} fontSize='2rem' />
          }
          aria-label='Menu'
          bg='transparent'
          onClick={() => updateShow(true)}
          display={{ base: 'flex', xl: 'none' }}
        />
      </HStack>

      <SideBar />
    </Flex>
  );
};
