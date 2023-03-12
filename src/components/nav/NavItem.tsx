import { NavModel } from '../../models';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { globalStyles } from '../../styles';

export const NavItem = ({ name, path }: NavModel) => {
  return (
    <Link to={path}>
      <Text
        color={globalStyles.whiteColor}
        fontFamily={globalStyles.fontFamilyLight}
        _hover={{
          opacity: 0.8,
        }}
      >
        {name}
      </Text>
    </Link>
  );
};
