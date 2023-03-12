import { Flex, HStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { footerSocials, footerSocialsLinks } from '../../store';
import { globalStyles } from '../../styles';

export const FooterSocials = () => {
  const renderLinks = footerSocialsLinks.map((link) => (
    <Link to={link.path} key={link.id}>
      <Text
        fontSize={globalStyles.textFontSize}
        fontWeight={400}
        fontFamily={globalStyles.fontFamily}
        color={globalStyles.whiteColor}
      >
        {link.name}
      </Text>
    </Link>
  ));

  const renderSocials = footerSocials.map((soc) => (
    <a href={soc.path} key={soc.id} target='_blank' rel='noreferrer noopener'>
      <Image src={soc.name} alt={soc.path} />
    </a>
  ));

  return (
    <Flex
      w={globalStyles.containerWidth}
      align='center'
      justifyContent='space-between'
    >
      <HStack gap='3'>{renderLinks}</HStack>
      <HStack gap='5'>{renderSocials}</HStack>
    </Flex>
  );
};
