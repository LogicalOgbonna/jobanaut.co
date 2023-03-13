import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Center, Image, Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { JobaRoutes } from '../../utils';
import { ColumnFlex } from '../shared';

interface Props {
  showDesc?: boolean;
  image?: string;
}

export const Logo = ({ showDesc, image }: Props) => {
  return (
    <Link to={JobaRoutes.homepage}>
      <Center
        gap='5'
        _hover={{
          opacity: 0.8,
        }}
      >
        <Image
          src={image ?? logo}
          alt='Logo'
          boxSize={{ base: '40px', md: '50px', lg: 'max-content' }}
        />

        <ColumnFlex>
          <Text
            fontFamily={globalStyles.fontFamilyMedium}
            color={globalStyles.whiteColor}
            fontWeight={globalStyles.semibold}
            fontSize={{ base: '1.5rem', md: '2.5rem' }}
          >
            Jobanaut.co
          </Text>

          {showDesc && (
            <Text
              fontFamily={globalStyles.fontFamilyLight}
              color={globalStyles.whiteColor}
              fontWeight={globalStyles.normalFontWeight}
              fontSize={{ base: '8px', md: globalStyles.textFontSize }}
              opacity={globalStyles.textOpacity}
            >
              World-class automated job applier
            </Text>
          )}
        </ColumnFlex>
      </Center>
    </Link>
  );
};
