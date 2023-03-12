import logo from '../../assets/images/footer.png';
import { Flex, Text } from '@chakra-ui/react';
import { Logo } from '../nav';
import { footerLogoItems } from '../../store';
import { globalStyles } from '../../styles';
import { ColumnFlex } from '../shared';

export const FooterLogo = () => {
  const renderItems = footerLogoItems.map((item) => (
    <a href={item.path} key={item.id} target='_blank' rel='noreferrer noopener'>
      <Text
        fontSize={globalStyles.textFontSize}
        fontFamily={globalStyles.fontFamilyXLight}
        opacity={globalStyles.textOpacity}
        fontWeight={300}
        _hover={globalStyles.hoverOpacity}
      >
        {item.name}
      </Text>
    </a>
  ));

  return (
    <ColumnFlex gap='10'>
      <Logo showDesc image={logo} />
      <Flex color={globalStyles.whiteColor} gap='6' pl='85px'>
        {renderItems}
      </Flex>
    </ColumnFlex>
  );
};
