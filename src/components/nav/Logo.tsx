import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Center, Image, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { JobaRoutes } from '../../utils';

export const Logo = () => {
  return (
    <Link to={JobaRoutes.homepage}>
      <Center
        bg='transparent'
        gap='5'
        _hover={{
          opacity: 0.8,
        }}
      >
        <Image src={logo} alt='Logo' bg='transparent' />

        <Text
          fontFamily={globalStyles.fontFamilyBold}
          color={globalStyles.whiteColor}
          fontSize='2.5rem'
          bg='transparent'
        >
          Jobanaut.co
        </Text>
      </Center>
    </Link>
  );
};
