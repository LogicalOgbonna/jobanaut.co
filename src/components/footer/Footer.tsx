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
      <ColumnFlex w='full' minH='368px'>
        <Flex
          alignItems='center'
          alignSelf='center'
          w={globalStyles.containerWidth}
          flex='1'
        >
          <FooterLogo />

          <Box h='300px' border='2px solid #010B2E' ml='10' />

          <HStack justify='space-evenly' flex='1' align='flex-start'>
            <FooterCard header='Platform' list={footerPlatform} />
            <FooterCard header='Company' list={footerCompany} />
          </HStack>
        </Flex>

        <ColumnFlex
          borderTop='5px solid #010B2E'
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
