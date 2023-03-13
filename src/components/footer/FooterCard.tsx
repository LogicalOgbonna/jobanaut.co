import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { NavModel } from '../../models';
import { globalStyles } from '../../styles';
import { ColumnFlex } from '../shared';

interface Props {
  header: string;
  list: NavModel[];
}

export const FooterCard = ({ header, list }: Props) => {
  const renderList = list.map((item) => (
    <Link to={item.path} key={item.id}>
      <Text
        fontSize={{ base: '8px', md: globalStyles.smFontSize }}
        fontFamily={globalStyles.fontFamilyLight}
        opacity={globalStyles.textOpacity}
        _hover={globalStyles.hoverOpacity}
      >
        {item.name}
      </Text>
    </Link>
  ));

  return (
    <ColumnFlex color={globalStyles.whiteColor} gap='4'>
      <Text
        fontSize={globalStyles.smFontSize}
        fontFamily={globalStyles.fontFamilySemiBold}
      >
        {header}
      </Text>

      <ColumnFlex gap='2.5'>{renderList}</ColumnFlex>
    </ColumnFlex>
  );
};
