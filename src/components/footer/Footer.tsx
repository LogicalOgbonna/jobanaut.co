import { Flex, Grid, GridItem } from '@chakra-ui/react';
import { globalStyles } from '../../styles';
import { FooterLogo } from './FooterLogo';

export const Footer = () => {
  return (
    <Flex minH='368px' bg={globalStyles.primaryDarkColor}>
      <Grid templateColumns='repeat(3,1fr)' w='full'>
        <GridItem colSpan={1} border='2px solid red'>
          <FooterLogo />
        </GridItem>
        <GridItem colSpan={2} border='2px solid green'></GridItem>
        <GridItem colSpan={3} border='2px solid blue'></GridItem>
      </Grid>
    </Flex>
  );
};
