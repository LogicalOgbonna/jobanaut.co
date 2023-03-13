import {
  Flex,
  VStack,
  Spacer,
  Stack,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import { globalStyles } from '../../styles';
import { useSideBar } from '../../context';
import { Link } from 'react-router-dom';
import { navItems } from '../../store';
import { Logo } from './Logo';
import { IconBtn } from '../shared';

export const SideBar = () => {
  // Hooks
  const { updateShow, show } = useSideBar();
  const [isLargerThan992] = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    isLargerThan992 && updateShow(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLargerThan992]);

  // renders
  const renderNavLinks = navItems.map(({ path, name }, i) => {
    return (
      <Link to={path} key={`${name}-${i}`}>
        <Text
          color={globalStyles.whiteColor}
          _hover={{
            color: globalStyles.primaryColor,
          }}
          onClick={() => updateShow(false)}
        >
          {name}
        </Text>
      </Link>
    );
  });

  return (
    <VStack
      width={globalStyles.fullWidth}
      h={globalStyles.fullHeight}
      position='fixed'
      bg={globalStyles.primaryColor}
      zIndex={3000}
      top={0}
      align='flex-start'
      transition='linear all .3s'
      transform={show ? 'translate(0%)' : 'translate(-100%)'}
      pt={2}
      pb={5}
      px={2}
      boxShadow='2px 2px 100px 50px rgba(0, 0, 0, 0.07)'
    >
      <Flex width={globalStyles.fullWidth} align='center' px={4} pt={2}>
        <Logo />

        <Spacer />

        <IconBtn
          aria-label='menu icon'
          onClick={() => updateShow(false)}
          icon={<CloseIcon fontSize='1.25rem' color='white' />}
          display={{ base: 'flex', lg: 'none' }}
          fontSize='1.8rem'
          bg='transparent'
        />
      </Flex>

      <Stack
        width={globalStyles.fullWidth}
        justify='flex-start'
        px={4}
        pt={10}
        gap='50px'
      >
        {renderNavLinks}
      </Stack>
    </VStack>
  );
};
