import { Box, Flex, HStack } from '@chakra-ui/react';
import { footerCompany, footerPlatform } from '../../store';
import { globalStyles } from '../../styles';
import { ColumnFlex } from '../shared';
import { FooterCard } from './FooterCard';
import { FooterLogo } from './FooterLogo';
import { FooterSocials } from './FooterSocials';

export const Footer = () => {
  return (
    <Flex bg={globalStyles.primaryDarkColor} align='center'>
      <ColumnFlex w={globalStyles.fullWidth} minH='368px' pt='5' px='2'>
        <Flex
          alignItems={{ base: 'flex-start', md: 'center' }}
          alignSelf='center'
          w={globalStyles.containerWidth}
          flex='1'
          gap={{ base: '6', md: 0 }}
        >
          <FooterLogo />

          <Box
            h='300px'
            border='2px solid #010B2E'
            ml='10'
            display={{ base: 'none', xl: 'inline-block' }}
          />

          <HStack
            justify='space-evenly'
            flex='1'
            align='flex-start'
            pt={{ base: '2', md: 0 }}
            gap={{ base: 1, md: 0 }}
          >
            <FooterCard header='Platform' list={footerPlatform} />
            <FooterCard header='Company' list={footerCompany} />
          </HStack>
        </Flex>

        <ColumnFlex
          borderTop={{ base: 'none', xl: '5px solid #010B2E' }}
          alignItems='center'
          justifyContent='center'
          py='10'
        >
          <FooterSocials />
        </ColumnFlex>
      </ColumnFlex>
    </Flex>
  );
};
