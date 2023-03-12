import { Flex } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { ColumnFlex } from '../shared';
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
