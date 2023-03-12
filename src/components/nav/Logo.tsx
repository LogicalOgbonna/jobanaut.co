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
        <Image src={image ?? logo} alt='Logo' />

        <ColumnFlex>
          <Text
            fontFamily={globalStyles.fontFamilyMedium}
            color={globalStyles.whiteColor}
            fontWeight={globalStyles.semibold}
            fontSize='2.5rem'
          >
            Jobanaut.co
          </Text>

          {showDesc && (
            <Text
              fontFamily={globalStyles.fontFamilyLight}
              color={globalStyles.whiteColor}
              fontWeight={globalStyles.normalFontWeight}
              fontSize={globalStyles.textFontSize}
              opacity={0.7}
            >
              World-class automated job applier
            </Text>
          )}
        </ColumnFlex>
      </Center>
    </Link>
  );
};
